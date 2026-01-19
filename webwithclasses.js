const caesarbutton = document.getElementById("caesarbutton");
const piglatinbutton = document.getElementById("piglatinbutton");
const input = document.getElementById("input");
const caesaroutput = document.getElementById("caesaroutput");
const caesarshift = document.getElementById("caesarshift");
const piglatinoutput = document.getElementById("piglatinoutput");

caesarbutton.addEventListener("click", () => doCesarCyper());
piglatinbutton.addEventListener("click", () => doPigLatin());

class Char {
  // private fields
  #charcode;

  constructor(stringOrNumber, index) {
    if (index === null) {
      if (!isNaN(stringOrNumber)) {
        this.#charcode = Number(stringOrNumber);
        //console.log(`input(${stringOrNumber})=>charcode(${this.#charcode})`);
      } else {
        this.#charcode = stringOrNumber.charCodeAt(0);
        //console.log(`input(${stringOrNumber})=>charcode(${this.#charcode})`);
      }
    } else {
      if (stringOrNumber != "") {
        this.#charcode = stringOrNumber.charCodeAt(index);
        //console.log(`input(${stringOrNumber},${index})=>charcode(${this.#charcode})`);
      }
    }
  }

  getCharAsCode() {
    return this.#charcode;
  }

  getCharAsString() {
    const result = String.fromCharCode(this.#charcode);
    //console.log(`getCharAsString(${this.#charcode}) => char(${result})`);
    return result;
  }

  toUpperCase() {
    return this.getCharAsString().toUpperCase();
  }

  toLowerCase() {
    return this.getCharAsString().toLowerCase();
  }

  isUpperCase() {
    return this.getCharAsString() == this.getCharAsString().toUpperCase();
  }

  isLowerCase() {
    return !this.isUpperCase();
  }

  isVowel() {
    const char = this.getCharAsString().toLowerCase();
    const vowels = ["a", "e", "i", "o", "u"];

    return vowels.includes(char);
  }

  isConsonant() {
    const char = this.getCharAsString().toLowerCase();
    const consonants = [
      "b",
      "c",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "m",
      "n",
      "p",
      "q",
      "r",
      "s",
      "t",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    return consonants.includes(char);
  }

  isDigit() {
    const char = this.getCharAsString();
    const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    return digits.includes(char);
  }

  isOtherType() {
    return !this.isVowel() && !this.isConsonant() && !this.isDigit();
  }

  shift(number) {
    const calcshift = Number(this.#charcode) + Number(number);
    const result = String.fromCharCode(calcshift);
    //console.log(`shift(${this.#charcode},${number}) => (${this.#charcode} + ${number}) = ${calcshift} =>char(${result})`);
    return result;
  }
}

class FancyWordArray {
  // private fields
  #wordarray = [];

  // private methods
  #doCipher(word, shift) {
    if (word == undefined) return "";

    let cypherword = "";

    for (let charindex = 0; charindex < word.length; charindex++) {
      const c = new Char(word, charindex);
      const cc = c.shift(shift);
      cypherword += cc;
    }
    return cypherword;
  }

  #doPigLatinWord(word) {
    const firstcharacter = new Char(word, 0);
    let resultword;

    if (firstcharacter.isVowel()) {
      // Vowel start
      resultword = word + "way";
    } else {
      // Consonant start

      const secondcharacter = new Char(word, 1);

      if (secondcharacter.isVowel()) {
        // Consonant-Vowel start

        const restword = word.substring(2);
        if (firstcharacter.isUpperCase()) {
          //console.log("UC-Consonant-Vowel start");
          resultword =
            secondcharacter.toUpperCase() +
            restword +
            firstcharacter.toLowerCase() +
            "ay";
        } else {
          //console.log("lc-Consonant-Vowel start");
          resultword =
            secondcharacter.toLowerCase() +
            restword +
            firstcharacter.toLowerCase() +
            "ay";
        }
      } else {
        // Consonant-Consonant start
        const thirdcharacter = new Char(word, 2);

        const restword = word.substring(3);
        if (firstcharacter.isUpperCase()) {
          //console.log("UC-Consonant start");
          resultword =
            thirdcharacter.toUpperCase() +
            restword +
            firstcharacter.toLowerCase() +
            secondcharacter.toLowerCase() +
            "ay";
        } else {
          //console.log("lc-Consonant start");
          resultword =
            thirdcharacter.toLowerCase() +
            restword +
            firstcharacter.toLowerCase() +
            secondcharacter.toLowerCase() +
            "ay";
        }
      }
    }

    return resultword;
  }

  constructor(text) {
    if (text === null) {
      this.#wordarray = [];
    } else {
      if (typeof text == "string") {
        this.#wordarray = text.split(" ");
      } else {
        this.#wordarray = [];
      }
    }
  }

  length = this.#wordarray.length;

  value = this.#wordarray;

  getCaesarCypherWord(index, shift) {
    return this.#doCipher(this.#wordarray[index], shift);
  }

  getCaesarCipherText(shift) {
    const result = this.#wordarray
      .map((element) => this.#doCipher(element, shift))
      .join(" ");
    return result;
  }

  getPigLatinText() {
    const result = this.#wordarray
      .map((element) => this.#doPigLatinWord(element))
      .join(" ");
    return result;
  }
}

function doCesarCyper() {
  const text = input.value;
  const cyperarray = new FancyWordArray(text);
  const cyphershift = caesarshift.value;
  caesaroutput.value = cyperarray.getCaesarCipherText(cyphershift);
}

function doPigLatin() {
  const text = input.value;
  const piglatinarray = new FancyWordArray(text);
  piglatinoutput.value = piglatinarray.getPigLatinText();
}
