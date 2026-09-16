const contains = function(object,searchValues) {
  if (Object.values(object).includes(searchValues)) return true;

  let nestedObj = Object.values(object).filter((nestObj) => typeof nestObj === 'object');
  
    return nestedObj.some((e) => contains(e,searchValues));
};

console.log(contains({a : "a", b : "b" , c : {d : "d",e:{f:"f"}}},"f"));
  
// Do not edit below this line
module.exports = contains;
