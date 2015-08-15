var a = [3, 1, 6561, 81];

function sorting(a) {
  return a.sort(1, 7000);
  console.log(a);
};
//issues with unicode point order
//trying to pass in comparison operator?? rang
function greaterThanTwentyFive(a) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] > 25) {
      return a[i];
      console.log(a);
  } else {
  }
  }
};

//returning only largest integer

$(document).on("click", ".clicky", function() {
  var passed = $(input.value);
  console.log(passed);
  var newA = passed.toString().split(",");
  console.log(newA);
  greaterThanTwentyFive(newA);
  for (var i = 0; i <newA.length; i++) {
    sorting(newA[i]);
    $(section).append("<div class='number'>" + newA[i] + "</div>");
  }
  });
//this is actually working... until
//wait, it's already an array, not a string.
//hahaha, I'll just make it a string.
//getting typerror: line 24 is not a function
//corrected, now getting: ["[object Object]"] for newA...
//moving on.
// this function is getting a little unruly.





alert("done!")
