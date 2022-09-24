function building(input) {
    let y = Number(input[0]);
    let x = Number(input[1]);

    for (let  i= y; i > 0; i--) {
    let bufer = "";
      for (let z = 0; z < x; z++) {
        if(i===y){
            bufer += `L${i}${z} `
        }else if(i%2===0){
            bufer += `O${i}${z} `

        }else{
            bufer += `A${i}${z} `
        }
        
      }
       console.log(bufer) 
    }
    
}
building(["6", "4"])
