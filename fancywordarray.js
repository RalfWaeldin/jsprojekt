import Char from "./characters.js";

export default class FancyWordArray {
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
