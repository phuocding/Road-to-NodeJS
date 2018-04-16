const spinalCase = (str) => {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return String(str)
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/ /g, '-')
    .replace(/_/g, '-')
    .toLowerCase();
};

console.log(spinalCase("thisIsSpinalTap"));

module.exports = spinalCase;
