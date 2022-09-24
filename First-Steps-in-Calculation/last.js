function last (input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let high = Number(input[2]);
    let percentage = Number(input[3]);

    let volume = lenght * width * high
    let vl = volume/1000
    let finalResult = vl * (1- (percentage/100))
    
    console.log (finalResult)
    
    }
    last (["85","75","47","17"] );
    

