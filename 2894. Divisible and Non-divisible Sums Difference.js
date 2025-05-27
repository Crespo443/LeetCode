const differenceOfSums = (n, m) => {
  num1 = 0;
  num2 = 0;

  for (let i = 1; i <= n; i++) {
    if (i % m !== 0) {
      num1 += 1;
    } else {
      num2 += 1;
    }
  }

  return num1 - num2;
};