// var searchArray = [2, 8, 11, 13, 17, 21, 29, 30, 35, 42, 58, 61, 65, 66, 70, 71, 73, 78, 90];
// var searchArray = [1, 2, 3, 4, 7, 8, 9];
var searchArray = [1];

// function binarySearchNonRecursion(arr, targetValue, currentIndex = Math.floor(arr.length/2), minimumindex = 0, maximumindex = arr.length-1){
function binarySearchNonRecursion(arr, targetValue){
    console.log("This is the number we are searching for " + targetValue);
    if(arr.length == 0){
        return -1;
    }
    else if(arr.length == 1){
        console.log("This is the current index being searched 0");
        console.log("This is the current number at the index being searched " + arr[0]);
        if(arr[0] == targetValue){
            return 0;
        }
        else{
            return -1;
        }
    }
    var currentIndex = Math.floor(arr.length/2)
    var minimumindex = 0;
    var maximumindex = arr.length-1
    console.log("The minimum index is " + minimumindex);
    console.log("The maximum index is " + maximumindex);
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    while(minimumindex < maximumindex){
        currentValue = arr[currentIndex];
        console.log("This is the current index being searched " + currentIndex);
        console.log("This is the current number at the index being searched " + currentValue);
        if(currentValue === targetValue){
            return currentIndex;
        }
        else if(currentValue > targetValue){
            maximumindex = currentIndex;
            console.log("The minimum index is still " + minimumindex);
            console.log("The maximum index is now " + maximumindex);
            currentIndex -= Math.floor((maximumindex - minimumindex)/2);
            console.log("The new index will drop to " + currentIndex);
        }
        else if(currentValue < targetValue){
            minimumindex = currentIndex;
            console.log("The minimum index is now " + minimumindex);
            console.log("The maximum index is still " + maximumindex);
            currentIndex += Math.ceil((maximumindex - minimumindex)/2)
            console.log("The new index will rise to " + currentIndex);
        }
        if ((maximumindex- minimumindex) <= 1){
            console.log("%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%")
            currentValue = arr[currentIndex];
            console.log("This is the current index being searched " + currentIndex);
            console.log("This is the current number at the index being searched " + currentValue);
            if(arr[currentIndex] === targetValue){
                return currentIndex;
            }
            else if(arr[currentIndex-1] === targetValue){
                console.log("ffffffffffffffffffffffffffffffffffffffffff")
                currentValue = arr[currentIndex-1];
                console.log("This is the current index being searched " + (currentIndex-1));
                console.log("This is the current number at the index being searched " + currentValue);
                return currentIndex-1;
            }
            else{
                return -1;
            }
        }
        console.log("*************************************")
    }
    return(-1);

}

// function binarySearchNonRecursion(arr, searchvalue){
    //console.log(arr);
// 

// console.log("This is the current array " + searchArray);
// console.log(binarySearchNonRecursion(searchArray, 1));
// var testArray = []

for(var i = 0, l = searchArray[searchArray.length-1]; i <= l; i++){
    testArray.push(binarySearchNonRecursion(searchArray, i));
}
console.log(testArray);