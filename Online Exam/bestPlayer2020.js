function bestPlayer(input) {
  index = 0;
  let comand = input[index];

  let nameWin = "";

  let winScore = 0;

  while (comand !== "END") {
    comand = input[index];
    index++;

    let score = Number(input[index]);

    if (score >= 10) {
      winScore = score;
      nameWin = comand;
      break;
    } else if (score < 10) {
      if (score > winScore) {
        winScore = score;
        nameWin = comand;
      }
    }
    index++;
    comand = input[index];
  }
  console.log(`${nameWin} is the best player!`);

  if (winScore >= 3) {
    console.log(`He has scored ${winScore} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${winScore} goals.`);
  }
}
bestPlayer(["Petrov", "2", "Drogba", "11"]);
