function text(num) {
    if ((num % 3 === 0) && (num % 5 === 0)) {
        return 'fizzbizz';
    } else if (num % 5 === 0) {
        return 'bizz';
    } else if (num % 3 === 0) {
        return 'fizz';
    } else {
        return '';
    }
}

function fizzbuzz(word) {
    let word = '';
    if (num % 3 === 0) {
        word = word.concat('fizz');
    }
    if (num % 5 === 0) {
        word = word.concat('bizz');
    }
    return word;
}

console.log(text(3));
console.log(text(5));
console.log(text(300));
console.log(text(8));