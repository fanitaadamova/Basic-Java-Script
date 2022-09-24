function cake(input) {
  let lenght = Number(input[0]);
  let height = Number(input[1]);
  let numberOfPeaces = lenght * height;

  let index = 2;
  let comand = input[index];

  while (comand !== "STOP") {
    let currentPeaces = Number(comand);
    numberOfPeaces -= currentPeaces;

    if (numberOfPeaces < 0) {
      console.log(
        `No more cake left! You need ${Math.abs(numberOfPeaces)} pieces more.`
      );
      break;
    }
    index++;
    comand = input[index];
  }
  if (comand === "STOP" && numberOfPeaces > 0) {
    console.log(`${numberOfPeaces} pieces are left.`);
  }
}
cake(["10", "2", "2", "4", "6", "STOP"]);
