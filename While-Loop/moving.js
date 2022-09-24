function moving(input) {
  let width = Number(input[0]);
  let length = Number(input[1]);
  let height = Number(input[2]);
  let freeSpace = width * length * height;

  let index = 3;
  let comand = input[index];
  let noFreeSpace = false;

  while (comand !== "Done") {
    let numOfBox = Number(comand);
    freeSpace -= numOfBox;
    if (freeSpace < 0) {
      console.log(
        `No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`
      );
      noFreeSpace = true;
      break;
    }
    index++;
    comand = input[index];
  }
  if (!noFreeSpace) {
    console.log(`${freeSpace} Cubic meters left.`);
  }
}
moving(["10", "1", "2", "4", "6", "Done"]);
