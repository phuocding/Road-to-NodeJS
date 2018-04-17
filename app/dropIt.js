const dropElements = (arr, func) => {
  let newArr = [];
  let i;
  for (i in arr) {
    if (func(arr[i])) return newArr = arr.slice(i);
  }

  return newArr;
};

export default dropElements;
