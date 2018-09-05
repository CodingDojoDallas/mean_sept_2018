function bubbleSort(arr) {
  if(arr.length == 0){
    return false;
  }
  if(arr.length == 1){
    return arr;
  }
  for(i = arr.length - 1; i >= 0; i--){
    var count = 0;
    for(j = 0; j < i; j++){
      if(arr[j] > arr[j+1] ){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        count += 1;
      }
    }
    if (count == 0) {
      return arr;
    }
  }
  return arr;
}
console.log(bubbleSort([1, 5, 3, 2, 0, 8]));

// function printArray(arr){
//     for(var i=0; i<arr.length; i++){
//         console.log(arr[i]);
//     }
// } // O(n)

// function findNth(arr, n){
//     console.log(arr[n]);
// } // O(1)

// function halving(n){
//     var count = 0;
//     while(n > 1){
//         n = n/2;
//         count++;
//     }
//     return count;
// } // O(n)

// function identityMatrix(n){
//     var matrix = [];
//     for(var i=0; i < n; i++){
//         var row = [];
//         for(var j=0; j < n; j++){
//             if(j == i){
//                 row.push(1);
//             }
//             else{
//                 row.push(0);
//             }
//         }
//         matrix.push(row);
//     }
//     return matrix;
// } // O(n^2)
