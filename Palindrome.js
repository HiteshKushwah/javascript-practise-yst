function Palindrome(str) {
    let firstContainer = "";
    let secondContainer = ""

    for (let i = 0; i < str.length; i++) {
        firstContainer += str[i];
    }

    
    for (let j = str.length - 1; j >= 0; j--) {
        secondContainer += str[j];
    }

    if (firstContainer === secondContainer) {
        console.log("this is the palindrome ");
        return true;
      
        
    } else {
        console.log("this is not the palindome");
        return false;
    
        
    }
}

console.log(Palindrome("nadam")); 

