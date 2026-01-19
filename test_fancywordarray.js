import FancyWordArray from "./fancywordarray.js";

console.log("=================================");
console.log("Class FancyWordArray Test");
console.log("=================================");

function fancywordarraytest(text) {
  console.log("");
  console.log(`Input: "${text}"`);

  const fwa = new FancyWordArray(text);

  console.log("Cypher Word 1 shift 5: ", fwa.getCaesarCypherWord(0, 5));
  console.log("Cypher Word 1 shift -5: ", fwa.getCaesarCypherWord(0, -5));
  console.log("As Cyphertext 3: ", fwa.getCaesarCipherText(3));
}

fancywordarraytest("hello world");

fancywordarraytest(
  "A programming paradigm is a fundamental style or approach to programming and problem-solving in software development. It provides a way to think about and structure code, guiding how programmers write and organize their programs.",
);
