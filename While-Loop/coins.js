function coins(input) {
  let change = Number(input[0]);
  let inCoints = Math.floor(change * 100);
  let counter = 0;

  while (inCoints > 0) {
    if (inCoints >= 200) {
      inCoints -= 200;
      counter++;
    } else if (inCoints >= 100) {
      inCoints -= 100;
      counter++;
    } else if (inCoints >= 50) {
      inCoints -= 50;
      counter++;
    } else if (inCoints >= 20) {
      inCoints -= 20;
      counter++;
    } else if (inCoints >= 10) {
      inCoints -= 10;
      counter++;
    } else if (inCoints >= 5) {
      inCoints -= 5;
      counter++;
    } else if (inCoints >= 2) {
      inCoints -= 2;
      counter++;
    } else if (inCoints >= 1) {
      inCoints -= 1;
      counter++;
    }
  }
  console.log(counter);
}
coins(["2.73"])
