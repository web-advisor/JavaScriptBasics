function duplicateNumbers(numArr) {
    const numberArray = numArr.sort((num1, num2) => {
        return num1 - num2;
    });
    for (let i = 0; i < numberArray.length-1; i++){
        if (numberArray[i] === numberArray[i + 1]) {
            return numberArray[i];
        }
    }
    return false;
}

console.log([1, 3, 4, 4]);
console.log([1, 3, 5, 89, 7, 5, 3]);