function reverseString(word) {
    let reversedWord = word.split('').reverse().join('');
    return reversedWord;
}



console.log(reverseString("malayalam"));
console.log(reverseString("javaScript"));