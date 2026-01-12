//==============================================
// DEFINITIONEN
//==============================================

// Definition Spielzuege: ein Spielzug, ist als Objekt innerhalb des Spielzuege Objektes angegeben.
// Jedes Objekt besitzt Die Eigenschaft “objectname”, die zur Ausgabe verwendet werden kann.
// Weitere Eigenschaften, wie zum Beispiel “imagename”, können bei Bedarf hinzugefügt werden
const Spielzuege = {
  rock: {
    objectname: "Rock",
  },
  paper: {
    objectname: "Paper",
  },
  scissor: {
    objectname: "Scissor",
  },
};

//Destrukturierung zu Verwendung:
const { rock, scissor, paper } = Spielzuege;

// Ergebnisse bestehen aus 3 Entscheidungssets (win, lose, draft)
// Jedes Set enthält 3 wertepaare, für die das Ergebnis zutrifft.
const Ergebnisse = {
  winsets: [
    {
      user: scissor,
      computer: paper,
    },
    {
      user: rock,
      computer: scissor,
    },
    {
      user: paper,
      computer: rock,
    },
  ],
  losesets: [
    {
      user: scissor,
      computer: rock,
    },
    {
      user: rock,
      computer: paper,
    },
    {
      user: paper,
      computer: scissor,
    },
  ],
  drawsets: [
    {
      user: scissor,
      computer: scissor,
    },
    {
      user: rock,
      computer: rock,
    },
    {
      user: paper,
      computer: paper,
    },
  ],
};

//Destrukturierung zu Verwendung:
const { winsets, losesets, drawsets } = Ergebnisse;

//==============================================
// INPUT
//==============================================

// Spielzugzuweisung durch index
function getSpielzugByIndex(indexval) {
  switch (indexval) {
    case 0:
      return paper;
    case 1:
      return scissor;
    case 2:
      return rock;
  }
}

// Zufalls Ganzzahl zwichen 0 und 2
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const { argv } = require("node:process");
const userinput = getSpielzugByIndex(Number(argv[2]));
const computerinput = getSpielzugByIndex(getRandomInt(3));

// if no valid input, then exit with message
if (userinput == undefined) {
  console.log(`rockPaperScissors.js can be only called with:
        0: to show Paper
        1: to show Scissor
        2: to show Rock
        Please use 'rockPaperScissors.js 0', 'rockPaperScissors.js 1' or 'rockPaperScissors.js 2'`);
  return;
}

//==============================================
// PROCESSING
//==============================================

// Compares uswer and computer input with item of a desision set
function compareZugPair(user, computer, result) {
  return result.user === user && result.computer === computer;
}

// Generates the reult and returns a result message
function gameresult(user, computer) {
  console.log();

  if (winsets.find((result) => compareZugPair(user, computer, result))) {
    return `You chose ${user.objectname}. Computer chose ${computer.objectname}. You WIN!`;
  } else if (
    losesets.find((result) => compareZugPair(user, computer, result))
  ) {
    return `You chose ${user.objectname}. Computer chose ${computer.objectname}. You LOSE!`;
  } else if (
    drawsets.find((result) => compareZugPair(user, computer, result))
  ) {
    return `You chose ${user.objectname}. Computer chose ${computer.objectname}. It's a DRAW!`;
  } else {
    return "Please use 'rockPaperScissors.js 0', 'rockPaperScissors.js 1' or 'rockPaperScissors.js 2'";
  }
}

//==============================================
// OUTPUT
//==============================================

console.log(gameresult(userinput, computerinput));
console.log();
