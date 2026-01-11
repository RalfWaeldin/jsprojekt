// shapes
const shapes = {
  paper: {
    objectname: "Paper",
  },
  scissor: {
    objectname: "Scissor",
  },
  stone: {
    objectname: "Stone",
  },
};
const { paper, scissor, stone } = shapes;

// rules
const winsets = [
  {
    user: scissor,
    computer: paper,
  },
  {
    user: stone,
    computer: scissor,
  },
  {
    user: paper,
    computer: stone,
  },
];
const loosesets = [
  {
    user: scissor,
    computer: stone,
  },
  {
    user: stone,
    computer: paper,
  },
  {
    user: paper,
    computer: scissor,
  },
];
const drawsets = [
  {
    user: scissor,
    computer: scissor,
  },
  {
    user: stone,
    computer: stone,
  },
  {
    user: paper,
    computer: paper,
  },
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getShapeByIndex(indexval) {
  switch (indexval) {
    case 0:
      return paper;
    case 1:
      return scissor;
    case 2:
      return stone;
  }
}

const { argv } = require("node:process");
const userinput = getShapeByIndex(Number(argv[2]));
const computerinput = getShapeByIndex(getRandomInt(3));

function gameresult(user, computer) {
  console.log();

  if (user == undefined) {
    console.log(`rockPaperScissors.js can be only called with:
        0: to show Paper
        1: to show Scissor
        2: to show Stone`);
  }

  if (
    winsets.find(
      (result) => result.user === user && result.computer === computer
    )
  ) {
    return `You chose ${user.objectname}. Computer chose ${computer.objectname}. You win!`;
  } else if (
    loosesets.find(
      (result) => result.user === user && result.computer === computer
    )
  ) {
    return `You chose ${user.objectname}. Computer chose ${computer.objectname}. You lose!`;
  } else if (
    drawsets.find(
      (result) => result.user === user && result.computer === computer
    )
  ) {
    return `You chose ${user.objectname}. Computer chose ${computer.objectname}. It's a draw!`;
  } else {
    return "Please use 'rockPaperScissors.js 0', 'rockPaperScissors.js 1' or 'rockPaperScissors.js 2'";
  }
}

console.log(gameresult(userinput, computerinput));

console.log();
