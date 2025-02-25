/**
 * Given an input string and a target letter, returns the number of times
 * the target letter appears in the string.
 *
 * Note:
 * 1. You can use a `for...of` loop to iterate through the characters
 *    of a string one letter at a time.
 * 2. You can access a specific character using string[i], as
 *    if the string were an array.
 *
 * Both of these are enough to complete this exercise.
 *
 * @example
 * countLetter('hello', 'l'); // => 2
 * countLetter('Mississippi', 's'); // => 4
 * countLetter('Mississippi', 'x'); // => 0
 * countLetter('Mississippi', 'm'); // => 0 (no lower-case m's)
 *
 * @param {string} string - The string to search
 * @param {string} letter - The target letter
 * @returns {string} The number of times target letter appears in input string
 */

function countLetter(string, letter) {
  //got replaceAll syntax from here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
  let newString = string.toLowerCase().replaceAll(letter.toLowerCase(), '');
  console.log(`There are ${string.length - newString.length} ${letter}'s in "${string}"`);
  return(string.length - newString.length);
}

if (require.main === module) {
  console.log('Running sanity checks for countLetter:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  countLetter('hello', 'L'); // => 2
  countLetter('Mississippi', 's'); // => 4
  countLetter('Mississippi', 'x'); // => 0
  countLetter('Mississippi', 'm');
}

module.exports = countLetter;
