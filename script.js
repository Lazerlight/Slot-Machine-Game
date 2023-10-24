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
