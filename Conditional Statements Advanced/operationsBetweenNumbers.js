function operationsBetweenNumbers(input) {
  let N1 = Number(input[0]);
  let N2 = Number(input[1]);
  let mathOperation = input[2];
  let result = 0;

  if (mathOperation == "+") {
    result = N1 + N2;
  } else if (mathOperation == "-") {
    result = N1 - N2;
  } else if (mathOperation == "*") {
    result = N1 * N2;
  } else if (mathOperation == "/" && N2 !== 0) {
    result = N1 / N2;
  } else if (mathOperation == "%" && N2 !== 0) {
    result = N1 % N2;
  } else if ((mathOperation == "%" || mathOperation == "/") && N2 == 0) {
    console.log(`Cannot divide ${N1} by zero`);
  }

  if (mathOperation == "+" || mathOperation == "-" || mathOperation == "*") {
    if (result % 2 == 0) {
      console.log(`${N1} ${mathOperation} ${N2} = ${result} - even`);
    } else {
      console.log(`${N1} ${mathOperation} ${N2} = ${result} - odd`);
    }
  } else if (mathOperation == "/" && N2 !== 0) {
    console.log(`${N1} ${mathOperation} ${N2} = ${result.toFixed(2)}`);
  } else if (mathOperation == "%" && N2 !== 0) {
    console.log(`${N1} ${mathOperation} ${N2} = ${result}`);
  }
}
operationsBetweenNumbers(["10", "3", "%"]);
