function tennisRanklist(input) {
  let numberOfTurnirs = Number(input[0]);
  let startPoins = Number(input[1]);
  let points = 0;
  let numOfwin = 0;
  let sumOfPoints = 0;
  let p = 0;

  for (let index = 2; index <= numberOfTurnirs + 1; index++) {
    let positionOfTurnir = input[index];
    switch (positionOfTurnir) {
      case "W":
        points += 2000;
        break;
      case "F":
        points += 1200;
        break;
      case "SF":
        points += 720;
        break;
    }
  }
  console.log(`Final points: ${points + startPoins}`);

  for (let index = 2; index <= numberOfTurnirs + 1; index++) {
    let positionOfTurnir = input[index];
    switch (positionOfTurnir) {
      case "W":
        p += 2000;
        break;
      case "F":
        p += 1200;
        break;
      case "SF":
        p += 720;
        break;
    }
  }
  console.log(`Average points: ${Math.floor(p / numberOfTurnirs)}`);

  for (let index = 2; index <= numberOfTurnirs + 1; index++) {
    let positionOfTurnir = input[index];
    switch (positionOfTurnir) {
      case "W":
        numOfwin += 1;
        break;
    }
  }
  console.log(`${((numOfwin / numberOfTurnirs) * 100).toFixed(2)}%`);
}
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);

