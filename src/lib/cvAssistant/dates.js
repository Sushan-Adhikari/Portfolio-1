// Month/year parsing + duration helpers (used for e.g. "how long at KyraWorks?").

const MONTH_INDEX = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
}

const MONTH_NAME = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function parseMonthYear(value) {
  const raw = (value || '').trim()
  if (!raw) return null

  if (raw.toLowerCase() === 'present') {
    const now = new Date()
    return { month: now.getMonth(), year: now.getFullYear() }
  }

  const match = raw.match(/^([A-Za-z]+)\s+(\d{4})$/)
  if (!match) return null

  const month = MONTH_INDEX[match[1].slice(0, 3).toLowerCase()]
  const year = Number.parseInt(match[2], 10)
  if (month == null || Number.isNaN(year)) return null

  return { month, year }
}

export function parseDateRange(range) {
  const [startRaw, endRaw] = (range || '').split('-').map((part) => part.trim())
  if (!startRaw || !endRaw) return null

  const start = parseMonthYear(startRaw)
  const end = parseMonthYear(endRaw)
  if (!start || !end) return null

  return { start, end }
}

export function compareMonthYear(a, b) {
  if (a.year !== b.year) return a.year - b.year
  return a.month - b.month
}

export function formatMonthYear(value) {
  if (!value) return ''
  return `${MONTH_NAME[value.month]} ${value.year}`
}

export function monthsInclusive(start, end) {
  return (end.year - start.year) * 12 + (end.month - start.month) + 1
}
