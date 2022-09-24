function areaOfFigures(input){
let typeOfFigure = input[0];
let size = Number(input[1]);

if (typeOfFigure == "square"){
    console.log ((size*size).toFixed(3));
} else if (typeOfFigure == "rectangle"){
    let sizeSecond = Number(input[2]);
    console.log ((size*sizeSecond).toFixed(3));
} else if (typeOfFigure == "circle"){
    console.log ((Math.PI * Math.pow (size,2)).toFixed(3));
}else if (typeOfFigure == "triangle"){
    let sizeSecond = Number(input[2]);
    console.log ((size * sizeSecond/2).toFixed(3));
}

}
areaOfFigures(["triangle",
"4.5",
"20"])



