function fizzBuzz(num) {
  if (num < 1) {
    return null;
  }
  else if (typeof num != "number") {
    return null;
  }
  var str = "";
  for (var i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 != 0 && i == num) {
      str += "and Fizz.";
    }
    else if (i % 3 == 0 && i % 5 != 0) {
      // console.log("Fizz")
      str += "Fizz, ";
    }
    else if (i % 5 == 0 && i % 3 != 0 && i == num) {
      str += "and Buzz.";
    }
    else if (i % 5 == 0 && i % 3 != 0) {
      // console.log("Buzz");
      str += "Buzz, ";
    }
    else if (i % 3 == 0 && i % 5 == 0 && i == num) {
      str += "and FizzBuzz."
    }
    else if (i % 3 == 0 && i % 5 == 0) {
      // console.log("FizzBuzz");
      str += "FizzBuzz, ";
    }
    else if (i == num) {
      str += "and "+i+"."
    }
    else {
      // console.log(i);
      str += i+", ";
    }
  }
  return str
}
console.log(fizzBuzz(20));
