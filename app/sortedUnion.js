const uniteUnique = (...arr) => {
  return [...new Set([].concat(...arr))];
};

module.exports = uniteUnique;
