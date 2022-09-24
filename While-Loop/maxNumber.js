function maxNumber(input) {
  let maxNumber = Number.MIN_SAFE_INTEGER;
  let index = 0;
  let x = input[index];
  index++;

  while (x !== "Stop") {
    let curentNumber = Number(x);
    if (curentNumber > maxNumber) {
      maxNumber = curentNumber;
    }
    x = input[index];
    index++;
  }
  console.log(maxNumber);
}
maxNumber(["100", "99", "80", "70", "Stop"]);
