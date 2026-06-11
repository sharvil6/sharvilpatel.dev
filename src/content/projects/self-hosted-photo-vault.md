---
title: "Self-Hosted Photo Vault"
summary: "End-to-end encrypted photo backup server with content-addressed deduplication, running on a single Hetzner box."
date: 2025-06-15
tech: ["Rust", "SQLite", "S3", "Docker"]
role: "Solo project"
demo: "https://vault-demo.sharvilpatel.dev"
featured: true
order: 2
---

> **Placeholder writeup.** Replace this with the real project.

## Problem

I wanted photo backups I actually control: encrypted before they leave the device, deduplicated so a decade of camera rolls doesn't cost a fortune, and recoverable with nothing but a passphrase and a copy of the data.

## Constraints

- The server must never see plaintext photos or thumbnails.
- A full restore must work from object storage alone, with no database backup.
- Cheap enough to run indefinitely: one small VPS plus S3-compatible storage.

## Approach

The client chunks each photo with content-defined chunking, encrypts chunks with a key derived from the library passphrase, and uploads them content-addressed by the hash of the ciphertext. The server is a thin Rust service that tracks chunk references in SQLite and garbage-collects unreferenced chunks.

```rust
/// A chunk is stored once no matter how many photos reference it.
async fn put_chunk(&self, id: ChunkId, body: Bytes) -> Result<()> {
    if self.index.contains(&id)? {
        self.index.add_ref(&id)?;
        return Ok(()); // dedup hit: no upload
    }
    self.store.put(&id.key(), body).await?;
    self.index.insert(&id)?;
    Ok(())
}
```

Because chunk IDs derive from ciphertext, the index is reconstructable by listing the bucket, which is what makes the no-database-backup restore guarantee hold.

## Outcome

- 312 GB of photos across two phones deduplicates to 196 GB stored.
- Full restore from a clean machine takes about 40 minutes, verified quarterly.
- Total monthly cost is under five euros.

## What I'd do differently

SQLite was the right call; the custom chunking parameters were not. I tuned them for my photo library and the settings are mediocre for video. Next iteration uses different chunk-size targets per media type.
