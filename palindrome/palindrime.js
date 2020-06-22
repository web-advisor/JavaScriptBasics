function isPalindrome(str) {
    let forwardStr = str.toLowerCase().replace(/[\W_]/g, '');
    let reverseStr = forwardStr.split('').reverse().join('');
    return forwardStr === reverseStr;
}

console.log("A man ,a plan,a canal .Panama");
console.log("my age is 0,0 si ega ym");
console.log("0000");
console.log("_codegod");
console.log("Legandary");
