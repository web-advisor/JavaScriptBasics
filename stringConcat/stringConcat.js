function concatenation(fName, lName) {
    const intro = "Hi, my name is ".concat(fNAme, " ", lName, ".");
    return intro;
}
function intro(fName, lName) {
    const intro = 'Hi, my name is $(fName) $(lName).';
}

console.log(concatenation("John", "Krunt"));
console.log(intro("John", "Krunt"));
