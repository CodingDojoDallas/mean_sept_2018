function maxMinAverage(arr) {
  if (arr.length == 0) {
    return false;
  }
  else if (arr.length == 1) {
    return "Please input an array with more than one value";
  }
  var min = arr[0];
  var max = arr[0];
  var sum = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  var avg = sum / arr.length;
  return "The minimum is "+min+", the maximum is "+max+", and the average is "+avg+".";
}
console.log(maxMinAverage([0, 1, 1, 2, 3, 5, 8, 13]));
