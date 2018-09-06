function coinChange(cash){
    total = {"dollars": 0, "quarters": 0, "dimes": 0, "nickels": 0, "pennies": 0};
    if(typeof cash === "object"){
        cash = totalCash(cash);
    }
    else if (typeof cash != "number"){
        console.log("Please input a number");
        return total;
    }
    else if (cash % 1 != 0){
        console.log("Please input an int (whole number");
        return total;
    }
    while (cash > 0){
        if(cash >= 100){
            cash -=100;
            total["dollars"]+=1;
        }
        else if(cash >= 25){
            cash -=25;
            total["quarters"]+=1;
        }
        else if(cash >= 10){
            cash -=10;
            total["dimes"]+=1;
        }
        else if(cash >= 5){
            cash -=5;
            total["nickels"]+=1;
        }
        else if(cash >= 1){
            cash -=1;
            total["pennies"]+=1;
        }
    }
    return total;
}

function totalCash(cashObject){
    let cashtotal = 0; 
    if ("dollars" in cashObject){
        while(cashObject["dollars"] > 0){
            cashtotal += 100;
            cashObject["dollars"]-=1;
        }
    }
    if ("quarters" in cashObject){
        while(cashObject["quarters"] > 0){
            cashtotal += 25;
            cashObject["quarters"]-=1;
        }
    }
    if ("dimes" in cashObject){
        while(cashObject["dimes"] > 0){
            cashtotal += 10;
            cashObject["dimes"]-=1;
        }
    }
    if ("nickels" in cashObject){
        while(cashObject["nickels"] > 0){
            cashtotal += 5;
            cashObject["nickels"]-=1;
        }
    }
    if ("pennies" in cashObject){
        while(cashObject["pennies"] > 0){
            cashtotal += 1;
            cashObject["pennies"]-=1;
        }
    }
    return cashtotal;
}

// {"dollars": 0, "quarters": 0, "dimes": 0, "nickels": 0, "pennies": 0}