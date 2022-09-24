function aluminumJoinery(input){
    let joineryCount = Number(input[0]);
    let joineryType = input[1];
    let deliveryType = input[2];
 
    let totalPrice = 0;
 
    if (joineryCount <= 10) {
        console.log("Invalid order");
        return;
    }
 
    switch (joineryType) {
        case "90X130":
            totalPrice = totalPrice + (joineryCount * 110);
            if (joineryCount > 30 && joineryCount <= 60) {
                totalPrice *= 0.95;
            } else if (joineryCount > 60) {
                totalPrice *= 0.92;
            }
            break;
        case "100X150":
            totalPrice = totalPrice + (joineryCount * 140);
            if (joineryCount > 40 && joineryCount <= 80) {
                totalPrice *= 0.94;
            } else if (joineryCount > 80) {
                totalPrice = totalPrice * 0.90;
            }
            break;
        case "130X180":
            totalPrice = totalPrice + (joineryCount * 190);
            if (joineryCount > 20 && joineryCount <= 50) {
                totalPrice *= 0.93;
            } else if (joineryCount > 50) {
                totalPrice *= 0.88;
            }
            break;
        case "200X300":
            totalPrice = totalPrice + (joineryCount * 250);
            if (joineryCount > 25 && joineryCount <= 50) {
                totalPrice *= 0.91;
            } else if (joineryCount > 50) {
                totalPrice *= 0.86;
            }
            break;
    }
    
    if (deliveryType === "With delivery") {
        totalPrice += 60;
    } 
 
    if (joineryCount > 99) {
        totalPrice *= 0.96;
    }
 
    console.log(`${totalPrice.toFixed(2)} BGN`);
 
}
aluminumJoinery(["105",
"100X150",
"With delivery"])
