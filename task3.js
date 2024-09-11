function checkDigitsInName(name) {
    const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    
    if (typeof name === 'string') {
        for (const char of name) {
           if (digits.includes(char)) {
            return true;
           }
        }
        return false;
    } else {
        return "Invalid Input";
    }
}

console.log(checkDigitsInName("Suman"))