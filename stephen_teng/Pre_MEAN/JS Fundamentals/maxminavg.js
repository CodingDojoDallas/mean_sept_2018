function maxMinAvg(arr){
    if (arr.length == 0){
        return "No values found";
    }
    var sum = arr[0]; var max = arr[0]; var min = arr[0]; var l = arr.length;
    for (var i = 1; i < l; i++){
        if (arr[i] > max){
            max = arr[i]; 
        }
        if (arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
    }
    return `The minimum is ${min}, The maximum is ${max}, The average is ${sum/l}`;
}