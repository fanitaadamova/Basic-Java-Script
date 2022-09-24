function hourReading (input){
let pages = Number(input[0]);
let pagesForOneHour = Number(input[1]);
let days = Number(input[2]);
let finalTime = pages / pagesForOneHour;
let hourPerDay = finalTime/days;

console.log (hourPerDay)


}
hourReading (["212 ","20 ","2"]);

