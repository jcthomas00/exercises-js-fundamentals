/**
 * Given an array of numbers, return their sum.
 *
 * @example
 * sum([1, 2, 3]); // => 6 (i.e., 1 + 2 + 3)
 * sum([-10, 10]); // => 0 (i.e., -10 + 10)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum of the numbers in the array
 */
function sum(array) {
  // This is your job. :)
  var sumOfArray = 0;
for (let i = 0; i < array.length; i++){
  sumOfArray += array[i];
}

return sumOfArray;
}

if (require.main === module) {
  console.log('Running sanity checks for sum:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(sum([1,2,3,4,5])===15);
  console.log(sum([1,2,3,4,])===10);
  console.log(sum([1,100, -3])===98);
  console.log(sum([1,-4,-7])===-10);
}

module.exports = sum;
