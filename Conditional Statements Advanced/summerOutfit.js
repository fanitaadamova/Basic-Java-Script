function summerOutfit(input) {
  let degrees = Number(input[0]);
  let partOfDay = input[1];
  let outfit;
  let shoes;

  if (10 <= degrees && degrees <= 18) {
    switch (partOfDay) {
      case "Morning":
        outfit = "Sweatshirt";
        shoes = "Sneakers";
        break;
      case "Afternoon":
      case "Evening":
        outfit = "Shirt";
        shoes = "Moccasins";
        break;
    }
  } else if (18 < degrees && degrees <= 24) {
    switch (partOfDay) {
      case "Afternoon":
        outfit = "T-Shirt";
        shoes = "Sandals";
        break;
      case "Morning":
      case "Evening":
        outfit = "Shirt";
        shoes = "Moccasins";
        break;
    }
  } else if (degrees >= 25) {
    switch (partOfDay) {
      case "Morning":
        outfit = "T-Shirt";
        shoes = "Sandals";
        break;
      case "Afternoon":
        outfit = "Swim Suit";
        shoes = "Barefoot";
        break;
      case "Evening":
        outfit = "Shirt";
        shoes = "Moccasins";
        break;
    }
  }
  console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["22", "Afternoon"]);
