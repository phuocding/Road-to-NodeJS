const dropElements = (arr, func) => {
  let newArr = [];
  for (let i in arr) {
    if (func(arr[i])) return newArr = arr.slice(i);
  }

  return newArr;
};

module.exports = dropElements;
