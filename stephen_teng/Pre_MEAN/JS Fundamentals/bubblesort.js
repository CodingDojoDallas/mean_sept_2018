//Bubble Sort

// The bubble encompasses two neighboring values. 
// If the larger number is to the left, we swap those values. 
// Then we slide the bubble over one position. 
// Once the bubble reaches the end of the array, we know that the largest value is in its proper position. 
// We can then repeat the process for all the values except for the last value, since we know that it is already in place. 
// And then we'll do it again, and again, and again, until we know all values are in their proper positions.
// BONUS 1: Imagine you had to watch the gif above sort an array with 8000 elements - 1000x more elements than it currently has. How long would that take? Would it take 1000 times longer? No, much much worse! It would take 1000^2 times longer, or 1,000,000 times longer! But what if the array was already sorted, or very close to sorted? Bubble sort has the advantage that we may simultaneously detect whether the array is already sorted as we're sorting. If so, we may terminate the algorithm early. This is known as a fast exit. Implement a fast exit in your bubble sort.

// BONUS 2: Big O Notation is how we express the time and space complexities of our algorithms. Big O is used to describe the worst case scenario of the algorithm - for example, the absolute maximum amount of time required to run the algorithm. However, we cannot put a number on how long the algorithm would take. The actual time required would be dependent on the inputs provided and the hardware being used to run the algorithm. What we can do is describe how the time or space required would change depending on the inputs. The Big O Time complexity of this algorithm is O(n^2) (read as "O of n squared"). This means that as the array provided gets longer, the amount of time required will experience quadratic growth. That's not very good and is why the bubble sort is often scorned. Only under special circumstances may we do a fast exit and possibly complete in just O(n) time, meaning the time required only increases linearly with the length of the array provided. Take some time to research O(1), O(n), O(n^2), and O(log n). 

function bubbleSort(arr){
    
    if (arr <= 1){
        return arr;
    }
    for(var l= arr.length; l >=0 ; l--){
      let sort = false;
        for(let i = 0; i < l-1; i++){
            if(arr[i] > arr[i+1]){
                console.log(`${arr[i]} switched with ${arr[i+1]}`)
                temp = arr[i+1];
                arr[i+1] = arr[i]; 
                arr[i] = temp;
                sort = true;
            }
//           console.log(sort);
        }
//         console.log("round" + (arr.length-l+1).toString() + " complete")
        if(sort == false){
            return arr;
        }
    }
    return arr;
}

console.log(bubbleSort([-1,-2,-3,4,5,-6,1]))
