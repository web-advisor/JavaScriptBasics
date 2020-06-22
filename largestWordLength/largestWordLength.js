function largestWordLength(str) {
    let length = 0;
    let strArray = str.split(' ');
    for (let i = 0; i < strArray.length; i++) {
        if (length < strArray[i].length) {
            length = strArray[i];
        }
    }
    return length;
}
function longestWordLength(str) {
    let length;
    let strArray = str.split(' ').sort((word1, word2) => {
        return word2.length - word1.length;
    });
    return strArray[0].length;
}

console.log(largestWordLength("Blackout blood in your eyes"));
console.log(largestWordLength("supercalifragilisticexpialliducious"));
console.log(longestWordLength("I can't take you anymore !"));
