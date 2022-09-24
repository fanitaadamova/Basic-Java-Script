function traveling(input) {
  let index = 0;
  let name = input[index];

  while (name !== "End") {
    index++;
    let needMoney = Number(input[index]);

    while (needMoney > 0) {
      index++;
      let spendMoney = Number(input[index]);
      needMoney -= spendMoney;
    }
    console.log(`Going to ${name}!`);

    index++;
    name = input[index];
  }
}
traveling([
  "Greece","1000","200","200","300","100","150","240","Spain","1200","300","500","193","423","End",
]);
