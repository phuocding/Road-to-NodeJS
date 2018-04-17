const sumFibs = (num) => {
  let stNum = 0;
  let ndNum = 1;
  let rs = 0;
  while (ndNum <= num) {
    if (ndNum % 2 !== 0) {
      rs += ndNum;
    }

    ndNum += stNum;
    stNum = ndNum - stNum;
  }

  return rs;
};

export default sumFibs;
