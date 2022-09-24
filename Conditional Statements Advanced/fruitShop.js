function fruitShop(input) {
  let fruit = input[0];
  let dayOfWeek = input[1];
  let quanity = Number(input[2]);
  let price = 0;

  if (
    dayOfWeek == "Monday" ||
    dayOfWeek == "Tuesday" ||
    dayOfWeek == "Wednesday" ||
    dayOfWeek == "Thursday" ||
    dayOfWeek == "Friday"
  ) {
    switch (fruit) {
      case "banana":
        console.log((price = quanity * 2.5).toFixed(2));
        break;
      case "apple":
        console.log((price = quanity * 1.2).toFixed(2));
        break;
      case "orange":
        console.log((price = quanity * 0.85).toFixed(2));
        break;
      case "grapefruit":
        console.log((price = quanity * 1.45).toFixed(2));
        break;
      case "kiwi":
        console.log((price = quanity * 2.7).toFixed(2));
        break;
      case "pineapple":
        console.log((price = quanity * 5.5).toFixed(2));
        break;
      case "grapes":
        console.log((price = quanity * 3.85).toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  } else if (dayOfWeek == "Saturday" || dayOfWeek == "Sunday") {
    switch (fruit) {
      case "banana":
        console.log((price = quanity * 2.7).toFixed(2));
        break;
      case "apple":
        console.log((price = quanity * 1.25).toFixed(2));
        break;
      case "orange":
        console.log((price = quanity * 0.9).toFixed(2));
        break;
      case "grapefruit":
        console.log((price = quanity * 1.6).toFixed(2));
        break;
      case "kiwi":
        console.log((price = quanity * 3.0).toFixed(2));
        break;
      case "pineapple":
        console.log((price = quanity * 5.6).toFixed(2));
        break;
      case "grapes":
        console.log((price = quanity * 4.2).toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  } else {
    console.log("error");
  }
}
fruitShop(["grapes","Saturday","0.5"])



