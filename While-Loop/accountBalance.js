function accountBalance(input) {
  let balans = 0;
  let index = 0;
  let deposit = input[index];
  index++;

  while (deposit !== "NoMoreMoney") {
    let amount = Number(deposit);
    if (amount < 0) {
      console.log(`Invalid operation!`);
      break;
    }

    balans = balans + amount;
    console.log(`Increase: ${amount.toFixed(2)}`);
    deposit = input[index];
    index++;
  }
  console.log(`Total: ${balans.toFixed(2)}`);
}
accountBalance(["120", "45.55", "-150"]);
