function priceOfOrder(input) {
    let numOfChickenMenu = Number(input[0]);
    let numOfFishMenu = Number(input[1]);
    let numOfVeganMenu = Number(input[2]);
    
    //Цена на десерта: 20% от 94.75 = 18.95
    //Цена на доставка: 2.50 (по условие)
    //Обща цена на поръчката: 94.75 + 18.95 + 2.50 = 116.20
    
    let priceOfChickenOrder = numOfChickenMenu * 10.35;
    let priceOfFishOrder = numOfFishMenu * 12.40;
    let priceOfVeganOrder = numOfVeganMenu * 8.15;
    let totalPriceAllMenu = priceOfChickenOrder + priceOfFishOrder + priceOfVeganOrder;
    let priceOfDessert = totalPriceAllMenu * 0.20
    let priceOfDelivery = 2.50;
    let totalPriceOfOrder = totalPriceAllMenu + priceOfDessert + priceOfDelivery;

    console.log(totalPriceOfOrder)
    }
    priceOfOrder(["2","4","3"]);
