function worldSwimmingRecord(input){
    let recordInSeconds = Number (input[0]);
    let DestanceInMeters = Number (input[1]);
    let timeOneMeterSwim = Number (input[2]);
    
    let delay  = (Math.floor (DestanceInMeters / 15)) * 12.5;
    let allTimeOfSwim = (timeOneMeterSwim * DestanceInMeters) + delay;
    
    if (allTimeOfSwim < recordInSeconds) {
        console.log (`Yes, he succeeded! The new world record is ${(allTimeOfSwim).toFixed(2)} seconds.`);
    } else {
        console.log (`No, he failed! He was ${(allTimeOfSwim-recordInSeconds).toFixed(2)} seconds slower.`);
    }
    }
    worldSwimmingRecord (["55555.67","3017","5.03"])
    