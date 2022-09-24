function addBags(input) {
  let priceBaggageAbove20 = Number(input[0]);
  let kiloBaggage = Number(input[1]);
  let dayTillTravelling = Number(input[2]);
  let numberOfBagage = Number(input[3]);

  let taxBaggage = 0;

  if (kiloBaggage < 10) {
    taxBaggage = 0.2 * priceBaggageAbove20;
  } else if (kiloBaggage >= 10 && kiloBaggage <= 20) {
    taxBaggage = 0.5 * priceBaggageAbove20;
  } else if (kiloBaggage > 20) {
    taxBaggage = priceBaggageAbove20;
  }

  if (dayTillTravelling < 7) {
    taxBaggage = taxBaggage * 1.4;
  } else if (dayTillTravelling >= 7 && dayTillTravelling <= 30) {
    taxBaggage = taxBaggage * 1.15;
  } else {
    taxBaggage = taxBaggage * 1.1;
  }

  console.log(
    `The total price of bags is: ${(taxBaggage * numberOfBagage).toFixed(
      2
    )} lv. `
  );
}
addBags(["30", "18", "15", "2"]);
