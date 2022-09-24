function balls(input) {
  let numberOfBalls = Number(input[0]);

  let score = 0;
  let redCounter = 0;
  let orangeCounter = 0;
  let yellowCounter = 0;
  let whiteCounter = 0;
  let blackCounter = 0;
  let otherCounter = 0;

  for (let index = 1; index <= numberOfBalls; index++) {
    let currentBall = input[index];

    switch (currentBall) {
      case "red":
        score += 5;
        redCounter++;
        break;
      case "orange":
        score += 10;
        orangeCounter++;
        break;
      case "yellow":
        score += 15;
        yellowCounter++;
        break;
      case "white":
        score += 20;
        whiteCounter++;
        break;
      case "black":
        score = Math.floor(score * 0.5)
        blackCounter++;
        break;
      default:
        otherCounter++;
        break;
    }
  }
  console.log(`Total points: ${score}`);
  console.log(`Red balls: ${redCounter}`);
  console.log(`Orange balls: ${orangeCounter}`);
  console.log(`Yellow balls: ${yellowCounter}`);
  console.log(`White balls: ${whiteCounter}`);
  console.log(`Other colors picked: ${otherCounter}`);
  console.log(`Divides from black balls: ${blackCounter}`);
}
balls(["3", "white", "black", "pink"]);
