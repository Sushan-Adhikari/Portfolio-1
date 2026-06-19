// Text normalization + tokenization helpers shared by the CV assistant.

export const STOP_WORDS = new Set([
  'the',
  'a',
  'an',
  'is',
  'are',
  'am',
  'was',
  'were',
  'to',
  'of',
  'in',
  'for',
  'on',
  'at',
  'and',
  'or',
  'as',
  'by',
  'with',
  'from',
  'can',
  'you',
  'your',
  'me',
  'i',
  'my',
  'about',
  'what',
  'which',
  'who',
  'when',
  'where',
  'how',
  'tell',
  'please',
  'do',
  'does',
  'did',
])

export function normalizeText(input) {
  return (input || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s+]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function tokenize(input) {
  return normalizeText(input)
    .split(' ')
    .filter((token) => token.length > 2 && !STOP_WORDS.has(token))
}

export function containsAny(normalizedQuestion, terms) {
  return terms.some((term) => normalizedQuestion.includes(normalizeText(term)))
}
