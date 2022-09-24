function sumSeconds(input) {
  let tripPrice = Number(input[0]);
  let puzzles = Number(input[1]);
  let dolls = Number(input[2]);
  let bears = Number(input[3]);
  let minions = Number(input[4]);
  let trucks = Number(input[5]);

  let puzzlesTotal = puzzles * 2.6;
  let dollsTotals = dolls * 3;
  let bearsTotal = bears * 4.1;
  let minionsTotal = minions * 8.2;
  let trucksTotal = trucks * 2;

  let totalSum =
    puzzlesTotal + dollsTotals + bearsTotal + minionsTotal + trucksTotal;
  let toysCont = puzzles + dolls + bears + minions + trucks;

  if (toysCont >= 50) {
    totalSum = totalSum * 0.75;
  }
  totalSum = totalSum * 0.9;

  if (totalSum >= tripPrice) {
    console.log(`Yes! ${(totalSum - tripPrice).toFixed(2)} lv left.`);
  } else if (totalSum < tripPrice) {
    console.log(
      `Not enough money! ${(tripPrice - totalSum).toFixed(2)} lv needed.`
    );
  }
}
sumSeconds(["40.8", "20", "25", "30", "50", "10"]);
