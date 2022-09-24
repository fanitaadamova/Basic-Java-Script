function graduation(input) {
  let index = 0;
  let name = input[index];
  index++;

  let isExcluded = false;
  let badGrade = 0;
  let sumGrade = 0;
  let counterClass = 1;

  while (counterClass <= 12) {
    let tempGrade = Number(input[index]);
    index++;
    if (tempGrade < 4) {
      badGrade++;

      if (badGrade > 1) {
        isExcluded = true;
        console.log(`${name} has been excluded at ${counterClass} grade`);
        break;
      }
      continue;
    }
    sumGrade += tempGrade;
    counterClass++;
  }
  if (!isExcluded) {
    console.log(
      `${name} graduated. Average grade: ${(sumGrade / 12).toFixed(2)}`
    );
  }
}
graduation(["Gosho","5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5",
]);
