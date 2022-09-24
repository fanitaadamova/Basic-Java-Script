function specialNumbers(input) {
  let number = Number(input[0]);

  let bufer = "";

  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      for (let k = 0; k <= 9; k++) {
        for (let l = 0; l <= 9; l++) {
          if (number % i === 0 &&
            number % j === 0 &&
            number % k === 0 &&
            number % l === 0) {
            bufer += `${i}${j}${k}${l} `;
          }
        }
      }
    }
  }
  console.log(bufer);
}
specialNumbers(["3"]);
