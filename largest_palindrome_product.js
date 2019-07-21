/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  let palArr = [];
  // do your work here
  let f1Arr = [];
  let f2Arr = [];
  let num = Math.pow(10, digits) - 1;
  let num2 = Math.pow(10, digits - 1);

  for (let i = num; i > num2; i--) {
    for (let j = num; j > num2; j--) {
      let result = i * j + "";
      if (
        result ===
        result
          .split("")
          .reverse()
          .join("")
      ) {
        palArr.push(result);
        f1Arr.push(i);
        f2Arr.push(j);
      }
    }
  }
  let highNum = Math.max(...palArr);
  factor_0 = f1Arr[0];
  factor_1 = f2Arr[0];
  palindromeNumber = highNum;

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};
