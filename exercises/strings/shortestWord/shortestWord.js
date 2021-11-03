/**
 * Given an input string, returns the shortest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The shortest word in the input string
 */

function shortestWord(string) {
  // This is your job. :)

  var sepString = string.split(' ');
  var shortword = sepString[0];

  console.log(sepString)

  for (let i = 0; i < sepString.length; i++){
    if(sepString[i].length < shortword.length){
      shortword = sepString[i];
    }
  }
  return shortword;
}

if (require.main === module) {
  console.log('Running sanity checks for shortestWord:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(shortestWord('this is a bug') === 'a')
  console.log(shortestWord('slow trucks on the freeway') === 'on')
  console.log(shortestWord('its raining') === 'its')
  console.log(shortestWord('coding is fun') === 'is')
}

module.exports = shortestWord;
