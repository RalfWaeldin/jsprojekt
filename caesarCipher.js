import FancyWordArray from "./fancywordarray.js";

let shift;
let text;

function importdata() {
  const importarray = process.argv;

  if (importarray.length < 4) {
    console.log(`Must be called with "node caesarCipher.js <shift> "<text>"`);
    return false;
  }

  shift = importarray[2];
  text = importarray[3];

  return true;
}

function doCaesarCipher() {
  if (importdata()) {
    const data = new FancyWordArray(text);

    console.log(`CeasarCipher[${shift}]: `);
    console.log("==========================");
    const result = data.getCaesarCipherText(shift);

    console.log(result);

    const recipher = new FancyWordArray(result);
    const reshift = -shift;
    console.log(`Re-CeasarCipher[${reshift}]: `);
    console.log("==========================");
    console.log(recipher.getCaesarCipherText(reshift));
  }
}

doCaesarCipher();
