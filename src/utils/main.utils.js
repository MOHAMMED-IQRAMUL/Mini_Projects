// src/utils/main.utils.js

/**
 * Utility functions for the application.
 * Add your helper functions below.
 */

/**
 * Example utility function: Capitalizes the first letter of a string.
 * @param {string} str
 * @returns {string}
 */
function capitalize(str) {
    if (typeof str !== 'string' || !str.length) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default {
    capitalize,
    // Add more utility functions here
};