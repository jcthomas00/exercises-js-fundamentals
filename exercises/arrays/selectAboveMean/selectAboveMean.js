/**
 * Given an array of numbers, returns a new array consisting of every
 * number in the input array strictly greater than the mean.
 *
 * Return an empty array if no such numbers exist.
 *
 * @example
 * selectAboveMean([1, 1, 1]); // => []
 * selectAboveMean([-10, -10, 0, 10]); // => [0, 10]
 * selectAboveMean([1, 2, 3, 4, 5]); // => [4, 5]
 * selectAboveMean([100, 0, 100, 200, 100, 0]); // => [100, 100, 200, 100]
 *
 * @param {number[]} array - An array of numbers
 * @returns {number[]} A new array consisting of all numbers in the input array
 *   greater than the mean.
 */
function selectAboveMean(array) {
  // This is your job. :)

  //looked up reduce function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  const mean = array.reduce((prevVal,current) => prevVal + current)/array.length;

  let aboveArray = array.filter((val) => val > mean)
  
  console.log(`\nThe original array: [${array}]`);
  console.log(`The mean: ${mean}`)
  console.log(`Values above mean: [${aboveArray}]\n`);
}

if (require.main === module) {
  console.log('Running sanity checks for selectAboveMean:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  selectAboveMean([1, 1, 1])
  selectAboveMean([-10, -10, 0, 10]); // => [0, 10]
  selectAboveMean([1, 2, 3, 4, 5]); // => [4, 5]
  selectAboveMean([100, 0, 100, 200, 100, 0]); // => [100, 100, 200, 100]
}

module.exports = selectAboveMean;
