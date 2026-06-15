const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

/** "Nov 2025" — for mono metadata rows */
export function formatDate(date: Date): string {
  return `${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

/** "2025" — for index listings */
export function formatYear(date: Date): string {
  return String(date.getUTCFullYear());
}

/** ISO yyyy-mm-dd — for <time datetime> */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
