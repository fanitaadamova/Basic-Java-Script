function sumPrimeNonPrime(input) {

    let index = 0;
    let command = input[index];

    let primeNum = 0;
    let nonPrimeNum = 0;
    let currentNum = 0;
    

    while (command !== "stop") {
      currentNum = Number(command);
      let isPrime = true;
      if (currentNum < 0) {
        console.log("Number is negative.");
        index++;
        command = input[index];
        continue; 
      } else {
        for (let i = 2; i < currentNum; i++) {
          if (currentNum % i == 0) {
            isPrime = false;
            nonPrimeNum += currentNum;
            break;
          }
        }
        if (isPrime) {
          primeNum += currentNum;
        }
      }
      index++;
      command = input[index];
    }
    console.log(`Sum of all prime numbers is: ${primeNum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNum}`);
  }
  
  sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);

