function zooFoodPrice(input){
let numberDog = Number(input[0]);
let numberCat = Number(input[1]);
let totalPrice = (2.5 * numberDog) + (4 * numberCat);
// "{крайната сума} lv."
let result = `${totalPrice} lv`;
console.log (result)

}
zooFoodPrice([`5`,`4`]);


