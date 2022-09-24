function vowelsSum(input) {
  let text = input[0];
  let totalPoints = 0;

  for (let index = 0; index < text.length; index++) {
    let ch = text[index];
    switch (ch) {
      case "a":
        totalPoints += 1;
        break;
      case "e":
        totalPoints += 2;
        break;
      case "i":
        totalPoints += 3;
        break;
      case "o":
        totalPoints += 4;
        break;
      case "u":
        totalPoints += 5;
        break;
    }
  }
  console.log(totalPoints);
}
vowelsSum(["beer"]);
