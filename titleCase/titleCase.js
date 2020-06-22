function titleCase(str) {
    let titleUpperCase = str.split(' ');
    titleUpperCase = titleUpperCase.map((word) => {
        const firstLetter = word.charAt(0).toUpperCase();
        word = firstLetter.concat(word.slice(1, word.length));
        return word;
    });
    titleUpperCase = titleUpperCase.join('');
    return titleUpperCase;
}

console.log(titleCase("I would like to work at Google."));
console.log(titleCase("Lokking at my record i amm badd at love."));

