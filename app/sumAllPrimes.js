const sumPrimes = (num) => {
  let sum = 0;

  const check = (n) => {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let j = 2; j <= num; j++) {
    if (check(j)) {
      sum += j;
    }
  }

  return sum;
};

module.exports = sumPrimes;
