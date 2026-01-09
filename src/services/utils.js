/**
 * Utility Functions Module
 * 
 * Common utility functions for the application
 */

/**
 * Format a date to a readable string
 * @param {Date} date - The date to format
 * @param {string} format - The format pattern (default: 'MM/DD/YYYY')
 * @returns {string} The formatted date string
 */
export function formatDate(date, format = 'MM/DD/YYYY') {
  const d = new Date(date)
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const year = d.getFullYear()

  return format
    .replace('MM', month)
    .replace('DD', day)
    .replace('YYYY', year)
}

/**
 * Capitalize the first letter of a string
 * @param {string} str - The string to capitalize
 * @returns {string} The capitalized string
 */
export function capitalize(str) {
  if (typeof str !== 'string') return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Debounce a function
 * @param {function} func - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {function} The debounced function
 */
export function debounce(func, delay = 300) {
  let timeoutId

  return function(...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

/**
 * Check if a value is empty
 * @param {*} value - The value to check
 * @returns {boolean} True if empty, false otherwise
 */
export function isEmpty(value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'string' && value.trim() === '') ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0)
  )
}

/**
 * Deep clone an object
 * @param {object} obj - The object to clone
 * @returns {object} A deep clone of the object
 */
export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj.getTime())
  if (obj instanceof Array) return obj.map(item => deepClone(item))
  if (obj instanceof Object) {
    const clonedObj = {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key])
      }
    }
    return clonedObj
  }
}
