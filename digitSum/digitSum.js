function digitSum(str) {
    const nums = str.match(/\d+/g) || [];
    let sum = 0;
    nums.forEach((num) => {
        sum += Number(sum);
    });
    return sum;1
}

console.log(digitSum('2 apples 12 orangess'));
console.log(digitSum('123450'));
console.log(digitSum("onwdfmef"));
