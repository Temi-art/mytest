function checkNumber(num) {
    if (typeof num !== "number") return "Not a number";
    if (num > 0) return "Positive";
    else if (num < 0) return "Negative";
    else return "Zero";
}

console.log(checkNumber(-10));
console.log(checkNumber("abc"));