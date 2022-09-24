function onTimeForExamTuning(input) {
    let hourOfExam = Number(input[0]);
    let minutesOfExam = Number(input[1]);
    let hourOfCooming = Number(input[2]);
    let minutesOfCooming = Number(input[3]);
  
    let timeOfExam = hourOfExam * 60 + minutesOfExam;
    let timeOfCooming = hourOfCooming * 60 + minutesOfCooming;
    let diference = timeOfCooming - timeOfExam;
    let difrX = timeOfExam - timeOfCooming;
  
    if (timeOfCooming > timeOfExam) {
      console.log(`Late`);
      if (diference < 60) {
        console.log(`${diference} minutes after the start`);
      } else if ((diference) % 60 >= 10) {
        console.log(
          `${Math.floor((diference) / 60)}:${
            (diference) % 60
          }  hours after the start`
        );
      } else if ((diference) % 60 < 10) {
        console.log(
          `${Math.floor((diference) / 60)}:0${
            (diference) % 60
          }  hours after the start`
        );
      }
    } else if (difrX <= 30) {
      console.log(`On time`);
      console.log(`${difrX} minutes before the start`);
    } else if (timeOfCooming === timeOfExam) {
      console.log(`On time`);
    } else if (timeOfCooming < timeOfExam) {
      console.log(`Early`);
  
      if (difrX < 60) {
        console.log(`${difrX} minutes before the start`);
      } else if ((difrX) % 60 >= 10) {
        console.log(
          `${Math.floor((difrX) / 60)}:${
            (difrX) % 60
          }  hours before the start`
        );
      } else if ((difrX) % 60 < 10) {
        console.log(
          `${Math.floor((difrX) / 60)}:0${
            (difrX) % 60
          }  hours before the start`
        );
      }
    }
  }
  onTimeForExamTuning(["9", "5", "11", "50"]);
  