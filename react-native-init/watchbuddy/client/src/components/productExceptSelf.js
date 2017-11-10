/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * I: array of numbers
 * O: array of products where product at each index is all 
 *    numbers except number at index in input array
 * C: O(N) Time, no division
 * E: Empty array, array with one element
 *
 * INVALID SOLUTION: O(N) Time, O(1) Space
 * Find product of all numbers
 * For each index of input array...
 *   Set value at that index to product of all numbers / value

  var product = nums.reduce((product, num) => product * num, 1);
  for (let i = 0; i < nums.length; i++) {
      nums[i] = product % nums[i];
  }
  return nums;
 
 *
 * NAIVE SOLUTION: O(N^2) Time, O(N) Space
 * Create empty output array
 * For each element in input...
 *   For each index not equal to index of element...
 *      Multiply element in input by each element already in output
 *      If no element exists at selected index in output, set it to 1

  var output = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        output[j] = (output[j] || 1) * nums[i];
      }
    }
  }
  return output;

 *
 * BETTER SOLUTION: O(N) Time, O(1) Space
 * Create upper and lower arrays that track product over input array backwards and forwards
 * Shift upper array and lower array
 *
 */
var productExceptSelf = function(nums) {
  var upper = [];
  var lower = [];
  var productUpper = 1;
  var productLower = 1;
  
  for (var i = 0; i < nums.length; i++) {
    upper.push(productUpper * nums[i]);
  }
  for (var i = nums.length - 1; i >= 0; i--) {
    lower.push(productLower * nums[i]);
  }

  var output = 0;
  for (var i = 0; i < nums.length; i++) {
    output[i] = 
  }
};