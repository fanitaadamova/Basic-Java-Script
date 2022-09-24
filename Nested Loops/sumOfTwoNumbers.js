function sumOfTwoNumbers(input) {
  let startNumber = Number(input[0]);
  let endNumber = Number(input[1]);
  let magicNumber = Number(input[2]);

  let isFound = false;
  let counter = 0;
  for (let x = startNumber; x <= endNumber; x++) {
    for (let y = startNumber; y <= endNumber; y++) {
        counter++;
      if (x + y === magicNumber) {
        console.log(`Combination N:${counter} (${x} + ${y} = ${magicNumber})`);
        isFound = true;
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  if (!isFound){
console.log(`${counter} combinations - neither equals ${magicNumber}`);
  }
}

sumOfTwoNumbers(["88",
"888",
"1000"])

