function excursion(input) {
 
    let numOfPeople = Number(input[0]);
    let numOfNights = Number(input[1]);
    let numOfCards = Number(input[2]);
    let numOfTickets = Number(input[3]);

    let moneyForNights = numOfNights * 20;
    let moneyForCards = numOfCards * 1.60;
    let moneyForTickets = numOfTickets * 6;
    let totalMoneyOfPerson = moneyForNights + moneyForCards + moneyForTickets;

    let totalMoneyOfAllPeople = totalMoneyOfPerson * numOfPeople;
    let finalSumOfMoney = totalMoneyOfAllPeople * 1.25
    
    console.log(finalSumOfMoney.toFixed(2));
}
excursion(["131",
"9",
"33",
"46"])

