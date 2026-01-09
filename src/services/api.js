/**
 * API Service Module
 * 
 * This module contains functions for making API calls.
 * You can add your API endpoints and functions here.
 */

/**
 * Fetch data from an endpoint
 * @param {string} url - The endpoint URL
 * @param {object} options - Fetch options
 * @returns {Promise} The response data
 */
export async function fetchData(url, options = {}) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      ...options,
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

/**
 * Post data to an endpoint
 * @param {string} url - The endpoint URL
 * @param {object} data - Data to send
 * @param {object} options - Additional fetch options
 * @returns {Promise} The response data
 */
export async function postData(url, data, options = {}) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
      ...options,
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('Post error:', error)
    throw error
  }
}

/**
 * Update data via PUT request
 * @param {string} url - The endpoint URL
 * @param {object} data - Data to update
 * @param {object} options - Additional fetch options
 * @returns {Promise} The response data
 */
export async function updateData(url, data, options = {}) {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
      ...options,
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('Update error:', error)
    throw error
  }
}

/**
 * Delete data via DELETE request
 * @param {string} url - The endpoint URL
 * @param {object} options - Additional fetch options
 * @returns {Promise} The response data
 */
export async function deleteData(url, options = {}) {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      ...options,
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('Delete error:', error)
    throw error
  }
}
