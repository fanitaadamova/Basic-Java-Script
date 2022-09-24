function salary(input) {
  let numTabs = Number(input[0]);
  let salary = Number(input[1]);

  for (let index = 2; index < input.length; index++) {
    let curentTab = input[index];
    switch (curentTab) {
      case "Facebook":
        salary = salary - 150;
        break;
      case "Instagram":
        salary = salary - 100;
        break;
      case "Reddit":
        salary = salary - 50;
        break;
    }
    if (salary <= 0) {
      console.log(`You have lost your salary.`);
      break;
    }
  }
  if (salary > 0) {
    console.log(`${salary}`);
  }
}
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);

