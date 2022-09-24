function painting (input){
    let nailon = Number(input[0]);
    let pain = Number(input[1]);
    let thinner = Number(input[2]);
    let hours  = Number(input[3]);
    
    let  totalForNailnon = (nailon + 2) * 1.5
    let  totalForPain = (pain *1.1) * 14.5
    let  totalForThinner = thinner * 5
    let  bagPrice = 0.40

    let totalForMaterials = totalForNailnon + totalForPain + totalForThinner + bagPrice;
    let totalForWorker = (totalForMaterials *0.30) * hours;
    let totalMoney = totalForMaterials + totalForWorker;
    
    console.log (totalMoney)
    
    
    }
    painting (["10","11","4","8"]);



