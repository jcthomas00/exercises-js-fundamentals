/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

function longestWord(string) {
  // This is your job. :)
  var sepString = string.split(' ');
  var longword = sepString[0];

  console.log(sepString)

  for (let i = 0; i < sepString.length; i++){
    if(sepString[i].length > longword.length){
      longword = sepString[i];
    }
  }
  return longword;
}

if (require.main === module) {
  console.log('Running sanity checks for longestWord:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(longestWord('this is a bug') === 'this')
  console.log(longestWord('slow trucks on the freeway') === 'freeway')
  console.log(longestWord('it is raining') === 'raining')
  console.log(longestWord('coding is fun') === 'coding')

}

module.exports = longestWord;
