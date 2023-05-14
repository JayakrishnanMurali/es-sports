export const calculateReadingTime = (charCount?: number): string => {
  if (!charCount) return ""

  // Average reading speed in words per minute (wpm)
  const readingSpeed = 200

  // Calculate the estimated reading time in minutes
  const readingTime = charCount / (readingSpeed * 5) // assuming an average word length of 5 characters
  const roundedReadingTime = Math.round(readingTime)
  return `${roundedReadingTime} min read`
}
