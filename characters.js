export default class Char {
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
