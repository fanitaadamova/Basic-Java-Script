function skiTrip(input) {
  let days = Number(input[0]);
  let typeOfRoom = input[1];
  let feedback = input[2];

  let nights = days - 1;
  let spentMoney = 0;

  if (days < 10) {
    switch (typeOfRoom) {
      case "room for one person":
        spentMoney = nights * 18;
        break;
      case "apartment":
        spentMoney = nights * 25 * 0.7;
        break;
      case "president apartment":
        spentMoney = nights * 35 * 0.9;
        break;
    }
  } else if (days >= 10 && days <= 15) {
    switch (typeOfRoom) {
      case "room for one person":
        spentMoney = nights * 18;
        break;
      case "apartment":
        spentMoney = nights * 25 * 0.65;
        break;
      case "president apartment":
        spentMoney = nights * 35 * 0.85;
        break;
    }
  } else if (days > 15) {
    switch (typeOfRoom) {
      case "room for one person":
        spentMoney = nights * 18;
        break;
      case "apartment":
        spentMoney = nights * 25 * 0.5;
        break;
      case "president apartment":
        spentMoney = nights * 35 * 0.8;
        break;
    }
  }

  switch (feedback) {
    case "positive":
      spentMoney = (spentMoney * 1.25).toFixed(2);
      console.log(spentMoney);
      break;
    case "negative":
      spentMoney = (spentMoney * 0.9).toFixed(2);
      console.log(spentMoney);
      break;
  }
}
skiTrip(["12", "room for one person", "positive"]);
