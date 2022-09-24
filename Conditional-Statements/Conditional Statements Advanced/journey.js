function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let sumSpent = 0;

  if (budget <= 100) {
    console.log("Somewhere in Bulgaria");
    if (season == "summer") {
      sumSpent = budget * 0.3;
      console.log(`Camp - ${sumSpent.toFixed(2)}`);
    } else if (season == "winter") {
      sumSpent = budget * 0.7;
      console.log(`Hotel - ${sumSpent.toFixed(2)}`);
    }
  } else if (budget <= 1000) {
    console.log("Somewhere in Balkans");
    if (season == "summer") {
      sumSpent = budget * 0.4;
      console.log(`Camp - ${sumSpent.toFixed(2)}`);
    } else if (season == "winter") {
      sumSpent = budget * 0.8;
      console.log(`Hotel - ${sumSpent.toFixed(2)}`);
    }
  } else if (budget > 1000) {
    console.log("Somewhere in Europe");
    console.log(`Hotel - ${(sumSpent = budget * 0.9).toFixed(2)}`);
  }
}
journey(["678.53", "winter"]);
