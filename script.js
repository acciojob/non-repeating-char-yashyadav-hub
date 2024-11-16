function firstNonRepeatedChar(s) {
    
    const charCount = {};

   
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return s[i]; 
        }
    }

    
    return null;
}


// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
