import FancyWordArray from "./fancywordarray.js";

let text;

function importdata() {
  const importarray = process.argv;

  if (importarray.length < 3) {
    console.log(`Must be called with:
         node piglatin.js "<text>" or
         node piglatin.js <word>`);
    return false;
  }

  text = importarray[2];

  return true;
}

function doPigLatin() {
  if (importdata()) {
    const data = new FancyWordArray(text);

    console.log(`PigLatin: `);
    console.log("==========================");
    const result = data.getPigLatinText();

    console.log(result);
  }
}

doPigLatin();
