function vacantion(input) {
  let needMoneyForVacantion = Number(input[0]);
  let balans = Number(input[1]);
  let index = 2;
  let comand = input[index];

  let spendDays = 0;
  let allDays = 0;
  let currentMoney = 0;

  while (balans < needMoneyForVacantion) {
    allDays++;
    index++;

    if (comand === "spend") {
      spendDays++;

      if (spendDays === 5) {
        console.log(`You can't save the money.`);
        console.log(`${allDays}`);
        break;
      }
      let moneyToSpend = Number(input[index]);
      balans -= moneyToSpend;

      if (balans < 0) {
        balans = 0;
      }
    } else if (comand === "save") {
      spendDays = 0;

      let moneyToSave = Number(input[index]);
      balans += moneyToSave;
    }
    index++;
    comand = input[index];
  }
  if (balans >= needMoneyForVacantion) {
    console.log(`You saved the money for ${allDays} days.`);
  }
}
vacantion(["110","60","spend","10","spend","10","spend","10","spend","10","spend","10",]);
