function footballResults(input) {
    let winCount = 0;
    let lostCount = 0;
    let drawnCount = 0;

    for (let i = 0; i < 3; i++) {
        let currentGame = input[i];
        let teamA = Number(currentGame[0]);
        let teamB = Number(currentGame[2]);

        if (teamA > teamB) {
            winCount++;
        } else if (teamA < teamB) {
            lostCount++;
        } else {
            drawnCount++;
        }
    }

    console.log(`Team won ${winCount} games`);
    console.log(`Team lost ${lostCount} games`);
    console.log(`Drawn games: ${drawnCount}`);
}
footballResults(["3:1", "0:2", "0:0"])


