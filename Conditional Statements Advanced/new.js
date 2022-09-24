function fruitShop(input) {
 
    let fruit = input[0];
    let day = input[1];
    let quantity = input[2];
    
    if (day === "Saturday" || day === "Sunday") {
        switch (fruit) {
            case "banana": price = quantity * 2.70; break;
            case "apple": price = quantity * 1.25; break;
            case "orange": price = quantity * 0.90; break;
            case "grapefruit": price = quantity * 1.60; break;
            case "kiwi": price = quantity * 3.00; break;
            case "pineapple": price = quantity * 5.60; break;
            case "grapes": price = quantity * 4.20; break;
            default: console.log("error"); break;
        }
        console.log((price).toFixed(2));
 
    } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch (fruit) {
            case "banana": console.log((quantity * 2.50).toFixed(2)); break;
            case "apple": console.log((quantity * 1.20).toFixed(2)); break;
            case "orange": console.log((quantity * 0.85).toFixed(2)); break;
            case "grapefruit": console.log((quantity * 1.45).toFixed(2)); break;
            case "kiwi": console.log((quantity * 2.70).toFixed(2)); break;
            case "pineapple": console.log((quantity * 5.50).toFixed(2)); break;
            case "grapes": console.log((quantity * 3.85).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else {
        console.log("error");
    }
 
}