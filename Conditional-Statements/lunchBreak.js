function lunchBreak (input){
    let nameOfMovie = input[0];
    let movieTime = Number(input[1]);
    let breakTime = Number (input[2]);
    
    let lunchTime = 0.125 * breakTime;
    let restTime = 0.25 * breakTime;
    let freeTime = breakTime - (lunchTime+restTime);
    
    if (movieTime<=freeTime){
    console.log (`You have enough time to watch ${nameOfMovie} and left with ${Math.ceil(freeTime-movieTime)} minutes free time.`)
    }
    else {
        console.log (`You don't have enough time to watch ${nameOfMovie}, you need ${Math.ceil(movieTime-freeTime)} more minutes.`)
    }
    
    }
    lunchBreak(["Teen Wolf","48","60"])
    