function numbersDivisibleBy9(input) {
    let number1 = Number(input[0]);
    let numbrer2 = Number(input[1]);
    let sum = 0;
    let buffer = ""
  
    for (let i = number1; i <= numbrer2; i++) {
      if (i % 9 === 0) {
        sum += i;
        buffer += `${i}\n`
      }
    }
    console.log(`The sum: ${sum}`);
    console.log(buffer);
  

  }
  numbersDivisibleBy9(["100", "200"]);