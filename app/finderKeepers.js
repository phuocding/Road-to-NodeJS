const findElement = (arr, func) => {
  let num = [];
  num = arr.filter(func);
  return num[0];
};

export default findElement;
