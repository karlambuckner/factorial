// business logic
var integers = function(integer) {
  if (integer * 2 < 100) {
    return true;
  } else {
    return false;
  }
};

// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {

    var integer = parseInt($("input#integer").val());
    console.log(integer);
    var result = integers(integer);

    $("#result").text(result);
    event.preventDefault();
    // business logic

  });
});
