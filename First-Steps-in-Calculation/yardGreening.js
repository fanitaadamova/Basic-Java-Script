function yardGreening(input){
let metraKv = Number(input[0]);
let price = metraKv * 7.61;
let discount = 0.18 * price;
let finalPrice = price - discount;
// "The final price is: {крайна цена на услугата} lv."
//"The discount is: {отстъпка} lv."

let result = `The final price is: ${finalPrice} lv.
The discount is: ${discount} lv.`
console.log(result)

}
yardGreening(['550'])

