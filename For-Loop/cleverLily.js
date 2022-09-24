function cleverLily(input) {
  let lilisAges = Number(input[0]);
  let washingPrice = Number(input[1]);
  let singleToyPrice = Number(input[2]);

  let toysConter = 0;
  let savedMoney = 0;
  let stolenMoney = 0;
  let addMoney = 10;

  for (currentAge = 1; currentAge <= lilisAges; currentAge++) {
    if (currentAge % 2 === 0) {
      savedMoney = savedMoney + addMoney;
      addMoney = addMoney + 10;
      stolenMoney++;
    } else {
      toysConter++;
    }
  }
  let totalMonyyFromToys = singleToyPrice * toysConter;

  let totalSavedMoney = totalMonyyFromToys + savedMoney - stolenMoney;

  if (totalSavedMoney >= washingPrice) {
    console.log(`Yes! ${(totalSavedMoney - washingPrice).toFixed(2)}`);
  } else {
    console.log(`No! ${(washingPrice - totalSavedMoney).toFixed(2)}`);
  }
}
cleverLily(["10", "170.00", "6"]);
