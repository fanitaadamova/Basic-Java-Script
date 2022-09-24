function exam(input) {
  let numberOfStudent = Number(input[0]);
  let sumOfGrades = 0;
  let counterTopStudent = 0;
  let counterBetterStudent = 0;
  let conterGoodStudent = 0;
  let counterFailStudent = 0;

  for (let index = 1; index <= numberOfStudent; index++) {
    let currentGrade = Number(input[index]);

    sumOfGrades += currentGrade;

    if (currentGrade >= 5.0) {
      counterTopStudent++;
    } else if (currentGrade >= 4 && currentGrade <= 4.99) {
      counterBetterStudent++;
    } else if (currentGrade >= 3 && currentGrade <= 3.99) {
      conterGoodStudent++;
    } else if (currentGrade < 3) {
      counterFailStudent++;
    }
  }

  console.log(
    `Top students: ${((counterTopStudent / numberOfStudent) * 100).toFixed(2)}%`
  );
  console.log(
    `Between 4.00 and 4.99: ${(
      (counterBetterStudent / numberOfStudent) *
      100
    ).toFixed(2)}%`
  );
  console.log(
    `Between 3.00 and 3.99: ${(
      (conterGoodStudent / numberOfStudent) *
      100
    ).toFixed(2)}%`
  );
  console.log(
    `Fail: ${((counterFailStudent / numberOfStudent) * 100).toFixed(2)}%`
  );
  console.log(`Average: ${(sumOfGrades / numberOfStudent).toFixed(2)}`);
}
exam(["6", "2", "3", "4", "5", "6", "2.2"]);
