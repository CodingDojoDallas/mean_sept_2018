//Can we make this into a method of an object?
function each(arr, callback) {
    // loop through the array
    for(var i = 0; i < arr.length; i++) {
      callback(arr[i]); // invoking the callback many times... delegation!
    }
  }

var _ = {
    map: function(arr, callback) {
      //code here;
      let newArr =[];
      for(var i in arr) {
        newArr.push(callback(arr[i]));
      }
      return newArr;
    },
    reduce: function(arr, callback, memo) { 
        total = memo;
        for(var i in arr) {
          total = callback(total, arr[i]); 
        }
        return total;
    },
    find: function(arr, callback) {   
      // code here;
      for(var i = 0; i < arr.length; i++) {
        if (callback(arr[i])){
            return arr[i];
        }
      }
      return undefined;
    },
    filter: function(arr, callback) { 
        // code here;
        let newArr =[];
        for(var i = 0; i < arr.length; i++) {
            if (callback(arr[i])){
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },
    reject: function(arr, callback) { 
        //code here;
        let newArr =[];
        for(var i = 0; i < arr.length; i++) {
            if (!(callback(arr[i]))){
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
}
 // you just created a library with 5 methods!

var testeach = each([1, 2, 3, 4, 5, 6], function(num){ console.log(num)});

//Test map
var testmap = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(testmap);
// [3, 6, 9]

var testmap2 =_.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
console.log(testmap2);
// [3, 6, 9]

//Test Reduce
var testreduce = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(testreduce);
// 6

//Test Find
var testfind = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(testfind);
// 2

//Test Filter
var testfilter = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(testfilter); 
// [2,4,6].

//Test Reject
var testreject = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(testreject); 
// [1,3,5].