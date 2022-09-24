function calculateDepozit(input) {
let sum = Number(input[0]);
let term = Number(input[1]);
let percentage = Number(input[2]);

// сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

let result = sum + term * ((sum*percentage/100)/12);
console.log(result)
}
calculateDepozit([`200`,`3`,`5.7`]);

