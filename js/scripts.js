var baseChanger = function(decimal) {
  var digits = decimal.split("").reverse();
  var total = 0;

  digits.forEach(function(digit, index) {
    total += parseInt(digit) * Math.pow(2, index);
  });

  return total;
};
