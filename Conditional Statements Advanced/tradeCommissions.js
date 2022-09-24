function tradeCommissions(input){
let town = input [0];
let volume = Number(input[1]);


if (0 <= volume && volume <= 500){
    switch(town){
     case "Sofia": console.log ((0.05 * volume).toFixed(2)) ;break;
     case "Varna": console.log ((0.045 * volume).toFixed(2)) ;break;
     case "Plovdiv": console.log ((0.055 * volume).toFixed(2)) ;break;
    default: console.log ("error");
    }
} else if (500 < volume && volume <= 1000){
    switch(town){
        case "Sofia": console.log ((0.07 * volume).toFixed(2)) ;break;
        case "Varna": console.log ((0.075 * volume).toFixed(2)) ;break;
        case "Plovdiv": console.log ((0.08 * volume).toFixed(2)) ;break;
       default: console.log ("error");
       }
} else if (1000 < volume && volume <= 10000){
    switch(town){
        case "Sofia": console.log ((0.08 * volume).toFixed(2)) ;break;
        case "Varna": console.log ((0.1 * volume).toFixed(2)) ;break;
        case "Plovdiv": console.log ((0.12 * volume).toFixed(2)) ;break;
       default: console.log ("error");
       }
} else if(volume > 10000){
    switch(town){
        case "Sofia": console.log ((0.12 * volume).toFixed(2)) ;break;
        case "Varna": console.log ((0.13 * volume).toFixed(2)) ;break;
        case "Plovdiv": console.log ((0.145 * volume).toFixed(2)) ;break;
       default: console.log ("error");
       }
}else { 
    console.log ("error");
}

}
tradeCommissions(["Sofia","1500"])
