function walking(input) {
  let targetSteps = 10000;
  let sum = 0;
  let index = 0;
  let comand = input[index];

  while (comand !== `Going home`) {
    let currentSteps = Number(comand);
    sum += currentSteps;
    if (sum >= targetSteps) {
      console.log(`Goal reached! Good job!`);
      console.log(`${sum - targetSteps} steps over the goal!`);
      break;
    }
    index++;
    comand = input[index];
  }

  if (comand === `Going home`) {
    let stepsToHome = Number(input[index + 1]);
    sum += stepsToHome;
    if (sum >= targetSteps) {
      console.log(`Goal reached! Good job!`);
      console.log(`${sum - targetSteps} steps over the goal!`);
    } else {
      console.log(`${targetSteps - sum} more steps to reach goal.`);
    }
  }
}
walking(["125","250","4000","30","2678","4682"])



