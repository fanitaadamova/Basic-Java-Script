function sumPay (input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let liters = Number(input[2]);
    let discount  = Number(input[3]);
    
    let moneyForPens = pens* 5.8;
    let moneyForMarkers = markers * 7.2;
    let moneyForPreparation = liters * 1.2;

    let totlCost = moneyForMarkers + moneyForPens + moneyForPreparation;
    let moneyAfterDiscount = totlCost - (totlCost * (discount/100));
    
    console.log (moneyAfterDiscount)
    
    
    }
    sumPay (["2 ","3 ","4 ","25 "]);
    


