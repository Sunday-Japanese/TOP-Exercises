const contains = function (object, searchValue) {
  const values = Object.values(object);

  
  if (values.includes(searchValue)) return true;

  const nestedObjects = values.filter(
    // typeof null === 'object' evaluates to true ¯\_(ツ)_/¯
    (value) => typeof value === "object" 
  );

  return nestedObjects.some((nestedObject) =>
    contains(nestedObject, searchValue)
  );
};


//console.log(typeof hi === "object");
console.log(contains({ji : {bi : "bi",di : "null",id : {fee : "tids"}}},"tids"));
// Do not edit below this line
module.exports = contains;
