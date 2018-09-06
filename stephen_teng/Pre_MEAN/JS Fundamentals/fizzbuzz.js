// Create a function called fizzbuzz that accepts a parameter n. Have the function log all the numbers from 1 to n in order with the following exceptions:

// If the number is divisible by both 3 and 5, log "FizzBuzz" instead of the number
// If the number is divisible by 3 but not by 5, log "Fizz" instead of the number
// If the number is divisible by 5 but not by 3, log "Buzz" instead of the number
function fizzbuzz(n){
    if (n ==1){
        return "1"
    }
    if (n >= 1){
        var output = "";
        for(var i = 1; i <= n; i++){
            if (i == n){
                output += "and "
            }

            if (i%3 == 0 && i%5 == 0){
                output += "FizzBuzz";
            }
            else if(i%3 == 0){
                output += "Fizz";
            }
            else if(i%5 == 0){
                output += "Buzz";
            }
            else{
                output += i.toString();
            }
        
            if (i == n){
                output += "."
            }
            else{
                output += ", "
            }

        }
        return output;
    }
    return ("Parameter must be a positive number")
}

console.log(fizzbuzz(1));