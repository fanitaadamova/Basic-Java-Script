function agencyProfit(input) {
  let nameOfCompany = input[0];
  let numAdultTickets = Number(input[1]);
  let numKidTickets = Number(input[2]);
  let priceForAdult = Number(input[3]);
  let priceSupport = Number(input[4]);

  let priceForKid = priceForAdult * 0.3;

  let TotalPriceAdult = priceForAdult + priceSupport;
  let TotalPriceKid = priceForKid + priceSupport;

  let TotalSale =
    TotalPriceAdult * numAdultTickets + TotalPriceKid * numKidTickets;
  let profit = (TotalSale * 0.2).toFixed(2);

  console.log(
    `The profit of your agency from ${nameOfCompany} tickets is ${profit} lv.`
  );
}
agencyProfit(["WizzAir", "15", "5", "120", "40"]);
