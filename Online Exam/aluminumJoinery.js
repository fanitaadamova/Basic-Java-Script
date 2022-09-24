function aluminumJoinery(input) {
  let numOfJoinery = Number(input[0]);
  let typeOfJoinery = input[1];
  let typeOfRecive = input[2];

  let price = 0;

  if (numOfJoinery <= 10) {
    console.log(`Invalid order`);
  } else if(numOfJoinery > 10) {
    switch (typeOfJoinery) {
      case "90X130":
          if (numOfJoinery > 60) {
          price = 110 * 0.92 * numOfJoinery;
        }else if (numOfJoinery > 30) {
            price = 110 * 0.95 * numOfJoinery;
          }
        break;
      case "100X150":
         if (numOfJoinery > 80) {
          price = 140 * 0.90 * numOfJoinery;
        }else if (numOfJoinery > 40) {
            price = 140 * 0.94 * numOfJoinery;
          }
        break;
      case "130X180":
        if (numOfJoinery > 50) {
          price = 190 * 0.88 * numOfJoinery;
        }else if (numOfJoinery > 20) {
            price = 190 * 0.93 * numOfJoinery;
          } 
        break;
      case "200X300":
         if (numOfJoinery > 50) {
          price = 250 * 0.8 * numOfJoinery;
        } else if (numOfJoinery > 25 && numOfJoinery < 50) {
            price = 250 * 0.91 * numOfJoinery;
          } 
        break;
    }

    if (numOfJoinery > 99 && typeOfRecive == "With delivery") {
      price = (price + 60) * 0.96;
      console.log(`${price.toFixed(2)} BGN`);
    } else {
      console.log(`${price.toFixed(2)} BGN`);
    }
  }
}
aluminumJoinery(["105",
"100X150",
"With delivery"])







