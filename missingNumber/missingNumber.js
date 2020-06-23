function missingNumber(numArr) {
    const numberArray = numArr.sort((num1, num2) => {
        return num1 - num2;
    });
    for (let i = 0; i < numberArray.length; i++) {
        if (i !== numberArray[i]) {
            return i;
        }
    }
}
console.log(missingNumber([0, 5, 4, 3, 1, 6, 8, 7]));
console.log(missingNumber([5, 3, 2, 1, 6, 7, 0, 8]));
