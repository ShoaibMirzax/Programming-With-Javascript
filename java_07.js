/**
 * The `letterFinder` function accepts two parameters: `word` and `match`.
 * It iterates through each character in the `word` and checks if it matches the `match` parameter.
 * If a match is found, it logs a message indicating the position of the match.
 * If no match is found, it logs a message indicating that no match was found at that position.
 *
 * @param {string} word - The word to search for matches.
 * @param {string} match - The character to search for within the `word`.
 * @returns {void} - This function does not return anything.
 *
 * @example
 * // Example usage:
 * letterFinder("hello", "l");
 * // Expected Output:
 * // ---No match found at 0
 * // ---No match found at 1
 * // Found the l at 2
 * // ---No match found at 3
 * // ---No match found at 4
 */
function letterFinder(word, match) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}
letterFinder("test", 's')