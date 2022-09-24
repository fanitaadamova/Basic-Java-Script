function minNumer(input) {
  let minNumber = Number.MAX_SAFE_INTEGER;
  let index = 0;
  let x = input[index];
  index++;

  while (x !== "Stop") {
    let curentNumber = Number(x);
    if (curentNumber < minNumber) {
      minNumber = curentNumber;
    }
    x = input[index];
    index++;
  }
  console.log(minNumber);
}
minNumer(["-1", "-2", "Stop"]);
