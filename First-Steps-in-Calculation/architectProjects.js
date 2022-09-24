function architectProjects (input){
let name = input[0];
let project = Number(input[1]);
let hour = 3 * project;
//"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."
let result = `The architect ${name} will need ${hour} hours to complete ${project} project/s.`
console.log(result)

}
architectProjects ([`George`,`4`]);

