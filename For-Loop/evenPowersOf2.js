function evenPowersOf2(input) {
  let n = Number(input[0]);
  let result = 0;

  for (i = 0; i <= n; i++) {
    result = Math.pow(2, i);
    if (i % 2 === 0) {
      console.log(result);
    }
  }
}
evenPowersOf2(["4"]);
