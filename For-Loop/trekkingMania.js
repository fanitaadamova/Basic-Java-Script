function trekkingMania(input) {
  let numOfPeople = Number(input[0]);
  let allPeople = 0;
  let allMusala = 0;
  let allMonblan = 0;
  let allKilim = 0;
  let allK2 = 0;
  let allEverest = 0;

  for (let i = 1; i <= numOfPeople; i++) {
    let peopleOfGroup = Number(input[i]);
    allPeople = allPeople + peopleOfGroup;

    if (peopleOfGroup <= 5) {
      allMusala = allMusala + peopleOfGroup;
    } else if (peopleOfGroup > 5 && peopleOfGroup <= 12) {
      allMonblan = allMonblan + peopleOfGroup;
    } else if (peopleOfGroup > 12 && peopleOfGroup <= 25) {
      allKilim = allKilim + peopleOfGroup;
    } else if (peopleOfGroup > 25 && peopleOfGroup <= 40) {
      allK2 = allK2 + peopleOfGroup;
    } else {
      allEverest = allEverest + peopleOfGroup;
    }
  }
  console.log(`${((allMusala / allPeople) * 100).toFixed(2)}%`);
  console.log(`${((allMonblan / allPeople) * 100).toFixed(2)}%`);
  console.log(`${((allKilim / allPeople) * 100).toFixed(2)}%`);
  console.log(`${((allK2 / allPeople) * 100).toFixed(2)}%`);
  console.log(`${((allEverest / allPeople) * 100).toFixed(2)}%`);
}
trekkingMania(["5", "25", "41", "31", "250", "6"]);
