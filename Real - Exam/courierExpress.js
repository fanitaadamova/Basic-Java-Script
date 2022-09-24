function courierExpress(input) {
    
let weightKg = Number(input[0]);
let typeOfService = input[1];
let distanceKm = Number(input[2]);

let priceOfStotinki = 0
let totalPriceOfDeliveryLv = 0;

switch (typeOfService) {
    case "standard":
     if (weightKg <= 1) {
        priceOfStotinki = distanceKm * 3;
     }else if(weightKg > 1 && weightKg < 10){
        priceOfStotinki = distanceKm * 5; 
     }else if(weightKg >= 10 && weightKg < 40){
        priceOfStotinki = distanceKm * 10;
     }else if(weightKg >= 40 && weightKg < 90){
        priceOfStotinki = distanceKm * 15;
    }else if(weightKg >= 90 && weightKg < 150){
        priceOfStotinki = distanceKm * 20
    }            
    
    break;
    case "express":
        if (weightKg <= 1) {
            priceOfStotinki = (distanceKm * 3) + (0.80 * 3 * weightKg * distanceKm);   
         }else if(weightKg > 1 && weightKg < 10){
            priceOfStotinki = (distanceKm * 5)  + (0.40 * 5 * weightKg * distanceKm); 
         }else if(weightKg >= 10 && weightKg < 40){
            priceOfStotinki = (distanceKm * 10) + (0.05 * 10 * weightKg * distanceKm);
         }else if(weightKg >= 40 && weightKg < 90){
            priceOfStotinki = (distanceKm * 15) + (0.02 * 15 * weightKg * distanceKm);  
        }else if(weightKg >= 90 && weightKg < 150){
            priceOfStotinki = (distanceKm * 20) + (0.01 * 20 * weightKg * distanceKm) ;
        }                
    
    break;   
}

totalPriceOfDeliveryLv = (priceOfStotinki/100)

console.log(`The delivery of your shipment with weight of ${(weightKg.toFixed(3))} kg. would cost ${(totalPriceOfDeliveryLv.toFixed(2))} lv.`);

}
courierExpress(["87",
"express",
"130"])

