function smallShop(input) {
  let product = input[0];
  let town = input[1];
  let quanity = Number(input[2]);
  let price = 0;

  switch (town) {
    case "Sofia":
      switch (product) {
        case "coffee":
          console.log((price = quanity * 0.5));
          break;
        case "water":
          console.log((price = quanity * 0.8));
          break;
        case "beer":
          console.log((price = quanity * 1.2));
          break;
        case "sweets":
          console.log((price = quanity * 1.45));
          break;
        case "peanuts":
          console.log((price = quanity * 1.6));
          break;
      }
      break;
    case "Plovdiv":
      switch (product) {
        case "coffee":
          console.log((price = quanity * 0.4));
          break;
        case "water":
          console.log((price = quanity * 0.7));
          break;
        case "beer":
          console.log((price = quanity * 1.15));
          break;
        case "sweets":
          console.log((price = quanity * 1.3));
          break;
        case "peanuts":
          console.log((price = quanity * 1.5));
          break;
      }
      break;
    case "Varna":
      switch (product) {
        case "coffee":
          console.log((price = quanity * 0.45));
          break;
        case "water":
          console.log((price = quanity * 0.7));
          break;
        case "beer":
          console.log((price = quanity * 1.1));
          break;
        case "sweets":
          console.log((price = quanity * 1.35));
          break;
        case "peanuts":
          console.log((price = quanity * 1.55));
          break;
      }

      break;
  }
}
smallShop(["coffee", "Sofia", "2"]);
