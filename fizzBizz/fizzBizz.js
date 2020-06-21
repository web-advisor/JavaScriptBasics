function text(num) {
    if (num % 3 == 0) {
        console.log("'fizz'");
    } else if (num % 5 == 0) {
        console.log("'bizz'");
    } else if ((num % 3 == 0) && (num % 5 == 0)) {
        console.log("'fizzbizz'");
    }
}

console.log(text(3));
console.log(text(5));
console.log(text(300));
console.log(text(8));