import Char from "./characters.js";

console.log("=================================");
console.log("Class Char Test");
console.log("=================================");

function chartest(text, number = null) {
  console.log("");
  console.log(`Input: ${text} ${number}`);

  const c = new Char(text, number);

  console.log("As String: ", c.getCharAsString());
  console.log("As charcode: ", c.getCharAsCode());
  console.log("To Upper: ", c.toUpperCase());
  console.log("To Lower: ", c.toLowerCase());
  console.log("Is Vowel: ", c.isVowel());
  console.log("Is Consonant: ", c.isConsonant());
  console.log("Is Digit: ", c.isDigit());
  console.log("Is Other Type: ", c.isOtherType());
  console.log("Shift 5: ", c.shift(5));
  console.log("Shift -5: ", c.shift(-5));
}

chartest("hello world", 3);
chartest("x");
chartest(45);
