function bonusScore(input) {
  let num = Number(input[0]);
  let bonus = 0.0;

  if (num <= 100) {
    bonus = 5;
  } else if (num > 1000) {
    bonus = 0.1 * num;
  } else if (num > 100) {
    bonus = 0.2 * num;
  }

  if (num % 2 === 0) {
    bonus = bonus + 1;
  } else if (num % 10 === 5) {
    bonus = bonus + 2;
  }
  console.log(bonus);
  console.log(num + bonus);
}
bonusScore(["2703"]);
