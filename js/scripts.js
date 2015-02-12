var baseChanger = function(number, base) {
  var conversion = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6,
  '7': 7, '8': 8, '9': 9, 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15};

  var digits = number.toUpperCase().split("").reverse();
  var total = 0;

  digits.forEach(function(digit, index) {

    total += conversion[digit] * Math.pow(base, index);
  });

  return total;
};

// ----------------------------------------------------

$(document).ready(function() {

  $("form#base-jumper").submit(function(event) {
    $("#decimal").text("");
    $("#result").hide();
    $("#error").hide();

    var num = $("input#number").val();
    var base = $("input#base").val();
    var dec = baseChanger(num, base);

    $("#decimal").text(dec)

    if (dec) {
      $("#result").show();
    } else {
      $("#error").show();
    }

    event.preventDefault();
  });

});
