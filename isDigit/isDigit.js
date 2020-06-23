function isDigit(str) {
    const digitArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return digitArray.includes(str);
}

console.log(isDigit("4443"));
console.log(isDigit("689Doobaddoo68"));
console.log(isDigit("Astlavista"));
