function footballKit(input) {
  let priceOfTishirt = Number(input[0]);
  let SumOfTargetWin = Number(input[1]);

  let priceOfShorts = priceOfTishirt * 0.75;
  let priceOfSocks = priceOfShorts * 0.2;
  let priceOfBuds = (priceOfTishirt + priceOfShorts) * 2;

  let priceOfAll =
    (priceOfTishirt + priceOfShorts + priceOfSocks + priceOfBuds) * 0.85;

  if (priceOfAll >= SumOfTargetWin) {
    console.log(`Yes, he will earn the world-cup replica ball!`);
    console.log(`His sum is ${priceOfAll.toFixed(2)} lv.`);
  } else {
    console.log(`No, he will not earn the world-cup replica ball.`);
    console.log(
      `He needs ${(SumOfTargetWin - priceOfAll).toFixed(2)} lv. more.`
    );
  }
}
footballKit(["55", "310"]);
