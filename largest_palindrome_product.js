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
  let f1Arr = [];
  let f2Arr = [];
  let palArr = [];
  // do your work here
  if (digits === 2) {
    for (let i = 99; i >= 10; i--) {
      factor_0 = i;
      for (let j = 99; j >= 10; j--) {
        factor_1 = j;
        let result = factor_0 * factor_1 + "";
        if (
          result ===
          result
            .split("")
            .reverse()
            .join("")
        ) {
          f1Arr.push(i);
          f2Arr.push(j);
          palArr.push(result);
        }
      }
    }
    factor_0 = f1Arr[0];
    factor_1 = f2Arr[0];
    let palArrNum = palArr.map(Number);
    palindromeNumber = palArrNum[0];
  }

  if (digits === 3) {
    for (let i = 999; i >= 100; i--) {
      factor_0 = i;
      for (let j = 999; j >= 100; j--) {
        factor_1 = j;
        let result = factor_0 * factor_1 + "";
        if (
          result ===
          result
            .split("")
            .reverse()
            .join("")
        ) {
          f1Arr.push(i);
          f2Arr.push(j);
          palArr.push(result);
        }
      }
    }
    let palArrNum = palArr.map(Number);
    let maxPalArr = Math.max(...palArrNum); //gives max number in the array since, for ex, 999*583 will be evaluated before 999*997
    palindromeNumber = maxPalArr;
  }

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};
