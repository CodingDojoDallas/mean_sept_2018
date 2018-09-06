// Given a string, write a function that will determine whether the braces  - including parentheses (), square brackets [], and curly brackets {} - within the string are valid. That means that any braces within other braces must close before the outer set closes.
// HINT: Keep in mind that you may use arrays and objects to keep your information organized!
// Example: bracesValid("{{()}}[]") returns true because the inner braces close before the outer braces. Each opening brace has a matching closing brace.
// Example:  bracesValid("{(})") returns false because the curly braces close before the parentheses, which starts within the curly braces, had a chance to close.

function bracesValid(str){
    if (str.length == 0){
        console.log("String Empty");
        return true;
    }
    else if(str.length == 1){
        console.log("String has only one value");
        return false;
    }
    var squarebracket = 0; var parentheses = 0; var curlybraces = 0; var currentbracket = []; 
    
    for(var i = 0, l = str.length; i < l; i++){
        switch(str[i]){
            case("["):
                squarebracket++;
                currentbracket.push("Square");
                break;
            case("]"):
                squarebracket--;
                if (squarebracket < 0){
                    console.log("Must open bracket first");
                    return false;
                }
                else if(currentbracket[currentbracket.length-1] !="Square"){
                    console.log("Must close previous bracket first");
                    return false;
                }
                else{
                    currentbracket.pop();
                }
                break;
            case("("):
                parentheses++;
                currentbracket.push("Parentheses");
                break;
            case(")"):
                parentheses--;
                if (parentheses < 0){
                    console.log("Must open bracket first");
                    return false;
                }
                else if(currentbracket[currentbracket.length-1] !="Parentheses"){
                    console.log("Must close previous bracket first");
                    return false;
                }
                else{
                    currentbracket.pop();
                }
                break;
            case("{"):
                curlybraces++;
                currentbracket.push("Curlybraces");
                break;
            case("}"):
                curlybraces--;
                if (curlybraces < 0){
                    console.log("Must open bracket first");
                    return false;
                }
                else if(currentbracket[currentbracket.length-1] !="Curlybraces"){
                    console.log("Must close previous bracket first");
                    return false;
                }
                else{
                    currentbracket.pop();
                }
                break;
            default:
                continue;
        }
        console.log(str[i]);
        console.log(currentbracket);
        console.log(`squarebracket= ${squarebracket} parentheses= ${parentheses} curlybraces= ${curlybraces}`)
    }
    if(squarebracket != 0 || parentheses != 0 || curlybraces != 0){
        console.log("Did not close a bracket at end")
        return false;
    }
    return true;
}

console.log(bracesValid("{{()}}[]"))