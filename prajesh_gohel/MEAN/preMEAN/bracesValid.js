function bracesValid(str) {
  if (typeof str != "string") {
    return null;
  }
  var check = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  var arr = [];
  for (i = 0; i < str.length; i++) {
    if (str[i] == '(' || str[i] == '[' || str[i] == '{') {
      arr.push(str[i]);
    }
    else if (arr[arr.length - 1] == check[str[i]]) {
      arr.pop();
    }
    else {
      return false;
    }
  }
  return arr.length == 0;
}
console.log(bracesValid("{({}}[]"));
