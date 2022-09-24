function examPreparation(input) {
  let index = 0;
  let maxBadGrade = Number(input[index]);
  index++;
  let nameOfGrade = input[index];

  let numberOfBadGrade = 0;
  let numberOfGoodGrade = 0;
  let sumGrade = 0;
  let mark = 0;

  while (numberOfBadGrade !== maxBadGrade) {
    nameOfGrade = input[index];

    if (nameOfGrade === "Enough") {
      nameOfGrade = input[index - 2];
      sumGrade = sumGrade;
      break;
    }

    index++;
    mark = Number(input[index]);

    if (mark <= 4) {
      numberOfBadGrade++;
      numberOfGoodGrade -= 1;
    }
    sumGrade += mark;
    numberOfGoodGrade++;
    index++;
  }

  if (numberOfBadGrade === maxBadGrade) {
    console.log(`You need a break, ${maxBadGrade} poor grades.`);
  } else {
    console.log(
      `Average score: ${(
        sumGrade /
        (numberOfBadGrade + numberOfGoodGrade)
      ).toFixed(2)}`
    );
    console.log(`Number of problems: ${numberOfBadGrade + numberOfGoodGrade}`);
    console.log(`Last problem: ${nameOfGrade}`);
  }
}
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
