// One-off generator for the placeholder resume PDF.
// Usage: node scripts/make-placeholder-pdf.mjs
// Replace public/resume/sharvil-patel-resume.pdf with the real export when ready.
import { writeFileSync } from 'node:fs';

const lines = [
  '(PLACEHOLDER RESUME) Tj',
  '0 -28 Td (Sharvil Patel - sharvilpatel.dev) Tj',
  '0 -28 Td (Replace this file with the real resume PDF at) Tj',
  '0 -28 Td (public/resume/sharvil-patel-resume.pdf) Tj',
].join('\n');

const stream = `BT\n/F1 18 Tf\n72 720 Td\n${lines}\nET`;

const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
  `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
];

let pdf = '%PDF-1.4\n';
const offsets = [0];
objects.forEach((body, i) => {
  offsets.push(pdf.length);
  pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
});

const xrefStart = pdf.length;
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += '0000000000 65535 f \n';
for (let i = 1; i <= objects.length; i++) {
  pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

writeFileSync('public/resume/sharvil-patel-resume.pdf', pdf, 'latin1');
console.log(`Wrote public/resume/sharvil-patel-resume.pdf (${pdf.length} bytes)`);
