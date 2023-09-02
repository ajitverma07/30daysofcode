const str = "ajit";
const reversedString = str.split("").reduce((acc, char) => char + acc, "");
console.log(reversedString);