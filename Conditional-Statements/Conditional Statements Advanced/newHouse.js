function newHouse(input) {
  let flowerType = input[0];
  let flowersCount = Number(input[1]);
  let budget = Number(input[2]);
  let finalSum = 0;

  switch (flowerType) {
    case "Roses":
      finalSum = flowersCount * 5;
      if (flowersCount > 80) {
        finalSum = finalSum * 0.9;
      }
      break;
    case "Dahlias":
      finalSum = flowersCount * 3.8;
      if (flowersCount > 90) {
        finalSum = finalSum * 0.85;
      }
      break;
    case "Tulips":
      finalSum = flowersCount * 2.8;
      if (flowersCount > 80) {
        finalSum = finalSum * 0.85;
      }

      break;
    case "Narcissus":
      finalSum = flowersCount * 3;
      if (flowersCount < 120) {
        finalSum = finalSum * 1.15;
      }
      break;
    case "Gladiolus":
      finalSum = flowersCount * 2.5;
      if (flowersCount < 80) {
        finalSum = finalSum * 1.2;
      }
      break;
  }

  if (budget >= finalSum) {
    console.log(
      `Hey, you have a great garden with ${flowersCount} ${flowerType} and ${(
        budget - finalSum
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${(finalSum - budget).toFixed(2)} leva more.`
    );
  }
}
newHouse(["Tulips", "88", "260"]);
