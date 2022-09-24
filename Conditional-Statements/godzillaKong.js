function godzillaKong(input) {
  let budjet = Number(input[0]);
  let NumberOfStatists = Number(input[1]);
  let priceOfSuit = Number(input[2]);

  let totalPriceStatisticSuits = NumberOfStatists * priceOfSuit;
  let decor = budjet * 0.1;

  if (NumberOfStatists > 150) {
    totalPriceStatisticSuits = totalPriceStatisticSuits * 0.9;
  }
  let totalCost = decor + totalPriceStatisticSuits;

  if (totalCost <= budjet) {
    console.log("Action!");
    console.log(`Wingard starts filming with ${(budjet - totalCost).toFixed(2)} leva left.`);
  } else {
    console.log("Not enough money!");
    console.log(`Wingard needs ${(totalCost - budjet).toFixed(2)} leva more.`);
  }
}
godzillaKong(["9587.88", "222", "55.68"]);
