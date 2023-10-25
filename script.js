const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};
const SYMBOLS_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const depositValue = parseFloat(depositAmount);

    if (isNaN(depositValue) || depositValue <= 0) {
      console.log("Invalid deposit amout, please try again!");
    } else {
      return depositValue;
    }
  }
};
const getLinesCount = () => {
  while (true) {
    const linesAmount = prompt("Enter the number of lines to bet on (1-3): ");
    const linesValue = parseFloat(linesAmount);

    if (isNaN(linesValue) || linesValue <= 0 || linesValue > 3) {
      console.log("Invalid number of lines, please try again!");
    } else {
      return linesValue;
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const betAmount = prompt("Enter total bet per line: ");
    const betValue = parseFloat(betAmount);

    if (isNaN(betValue) || betValue <= 0 || betValue > balance / lines) {
      console.log("Invalid bet, please try again!");
    } else {
      return betValue;
    }
  }
};

const spin = () => {};

let balance = deposit();
const linesCount = getLinesCount();
const bet = getBet(balance, linesCount);
