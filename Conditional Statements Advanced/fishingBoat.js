function fishingBoat(input) {
  let budjet = Number(input[0]);
  let season = input[1];
  let countFisher = input[2];
  let rent = 0;
  let allSum = 0;

  switch (season) {
    case "Spring":
      rent = 3000;
      break;
    case "Summer":
    case "Autumn":
      rent = 4200;
      break;
    case "Winter":
      rent = 2600;
      break;
  }

  if (countFisher % 2 === 0 && season != "Autumn") {
    rent = rent * 0.95;
  }

  if (countFisher <= 6) {
    allSum = rent * 0.9;
  } else if (countFisher <= 11) {
    allSum = rent * 0.85;
  } else if (countFisher >= 12) {
    allSum = rent * 0.75;
  }

  if (budjet >= allSum) {
    console.log(`Yes! You have ${(budjet - allSum).toFixed(2)} leva left.`);
  } else {
    console.log(
      `Not enough money! You need ${(allSum - budjet).toFixed(2)} leva.`
    );
  }
}
fishingBoat(["3600", "Autumn", "6"]);
