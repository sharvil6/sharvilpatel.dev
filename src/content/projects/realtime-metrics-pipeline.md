---
title: "Realtime Metrics Pipeline"
summary: "Kafka-to-ClickHouse ingestion pipeline handling 40k events/sec with sub-second dashboard latency."
date: 2025-11-01
tech: ["Go", "Kafka", "ClickHouse", "Grafana", "Terraform"]
role: "Solo project"
repo: "https://github.com/sharvilpatel/metrics-pipeline"
featured: true
order: 1
---

> **Placeholder writeup.** Replace this with the real project. The structure below (problem, constraints, approach, outcome) is a good skeleton to keep.

## Problem

Application metrics were scattered across per-service log files and a managed APM product whose retention and query costs grew faster than the traffic did. Engineers couldn't ask ad-hoc questions like "what was p99 latency for this endpoint, for this customer tier, last Tuesday" without exporting data by hand.

## Constraints

- Sustained ingest of around 40,000 events per second at peak, with bursts to double that.
- Dashboard queries needed to come back in under a second to be usable during incidents.
- Run on existing infrastructure; no new managed services beyond what was already approved.

## Approach

Events flow from services into Kafka, where a small fleet of Go consumers batch, validate, and flatten them before inserting into ClickHouse. The consumers are deliberately boring: at-least-once delivery, idempotent inserts keyed on event ID, and backpressure by pausing partition consumption rather than buffering in memory.

```go
// Batches flush on size or age, whichever comes first.
func (w *writer) flushLoop(ctx context.Context) {
    ticker := time.NewTicker(w.maxAge)
    defer ticker.Stop()
    for {
        select {
        case <-ctx.Done():
            w.flush() // drain on shutdown
            return
        case <-ticker.C:
            w.flush()
        case ev := <-w.in:
            if w.add(ev) >= w.maxBatch {
                w.flush()
            }
        }
    }
}
```

ClickHouse tables use a `MergeTree` ordered by `(service, endpoint, timestamp)` with a materialized view maintaining per-minute rollups, so Grafana dashboards hit the rollups and incident deep-dives hit raw events.

## Outcome

- p99 dashboard query latency dropped from roughly 8 seconds to 300 milliseconds.
- Retention went from 14 days to 13 months at lower cost than the APM product.
- Schema changes ship through Terraform and take effect without downtime.

## What I'd do differently

Start with the rollup tables instead of adding them after the first slow-dashboard complaint, and budget more time for Kafka consumer-group rebalancing edge cases, which produced the only two production incidents the pipeline has had.
