function basketballTax (input) {
    let taxPerYear = Number(input[0]);
    
    let snickersPrice  = taxPerYear * 0.60
    let outFitPrice = snickersPrice * 0.80
    let ballPrice = outFitPrice / 4
    let bonusAccessoriesPrice = ballPrice / 5
   
    let finalPrice = taxPerYear + snickersPrice + outFitPrice + ballPrice + bonusAccessoriesPrice
    
    console.log (finalPrice)
    
    }
    basketballTax (["365"] );

