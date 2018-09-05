function coinChange(variable) {
  function createObject(param) {
    var dollars = 0;
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;
    var money = {}

    while (param != 0) {
      if (param >= 100) {
        param -= 100;
        dollars += 1;
      }
      else if (param >= 25) {
        param -= 25;
        quarters += 1;
      }
      else if (param >= 10) {
        param -= 10;
        dimes += 1;
      }
      else if (param >= 5) {
        param -= 5;
        nickels += 1;
      }
      else if (param >= 1) {
        param -= 1;
        pennies += 1;
      }
    }
    if (dollars != 0) {
      money.dollars = dollars;
    }
    if (quarters != 0) {
      money.quarters = quarters;
    }
    if (dimes != 0) {
      money.dimes = dimes;
    }
    if (nickels != 0) {
      money.nickels = nickels;
    }
    if (pennies != 0) {
      money.pennies = pennies;
    }
    return money;
  }
  if (typeof variable == "number") {
    var x = createObject(variable);
    return x;
  }

  else if (typeof variable == "object") {
    var num = 0;
    if (variable.dollars != null) {
      num += variable.dollars * 100;
    }
    if (variable.quarters != null) {
      num += variable.quarters * 25;
    }
    if (variable.dimes != null) {
      num += variable.dimes * 10;
    }
    if (variable.nickels != null) {
      num += variable.nickels * 5;
    }
    if (variable.pennies != null) {
      num += variable.pennies;
    }
    var x = createObject(num);
    return x;
  }
  else {
    return null;
  }
}
console.log(coinChange(312));
console.log(coinChange({dollars: 2, quarters: 10, nickels: 7}));
console.log(coinChange("not a number or object"));
