/**
 * Given an array of numbers, return their product.
 *
 * @example
 * product([2, 4, 6]); // => 48 (i.e., 2 * 4 * 6)
 * product([-10, 10]); // => -100 (i.e., -10 * 10)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The product of the numbers in the array
 */
function product(array) {
  // This is your job. :)

  var productOfArray = 1;
  for (let i = 0; i < array.length; i++){
  productOfArray *= array[i];
}

return productOfArray;
}

if (require.main === module) {
  console.log('Running sanity checks for product:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(product([1,2,3,4,5])===120);
  console.log(product([1,2,3,4,])===24);
  console.log(product([1,100, -3])===-300);
  console.log(product([1,-4,-7])===28);
}

module.exports = product;
