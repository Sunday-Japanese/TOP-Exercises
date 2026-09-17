const totalIntegers = function(object) {
    if (typeof object !== 'object' && !Array.isArray(object)) return 'undefined NOT Arry nor Object' // guard clause

  let objectValues = Object.values(object);
  let intergers = 0;

  const objCondition = typeof object === 'object' && object !== 'null';
  const aryCondition = Array.isArray(object);

  const objLengthCondition = (typeof object === 'object' && object !== 'null' ) ? objectValues.length : object.length; 

  for (let i = 0; i < objLengthCondition ; i++) {                                                           // Here it is base part
    if ( objCondition && Number.isInteger(objectValues[i]) ) {
        intergers++;
    } else if ( aryCondition &&  Number.isInteger(object[i])) {
        intergers++;
    } else if (objCondition) {                                                                               // Here is recursive part
        intergers += totalIntegers(objectValues[i]);
    } else if (aryCondition) {
        intergers += totalIntegers(object[i]);
    }
  }

  
  return intergers;
};
  
const test = [2,3,4,3,2,3,3,{a:3 , b : {c:4, e : [23,4324,23,3,23]}}];
console.log(totalIntegers(test));
// Do not edit below this line
module.exports = totalIntegers;
//  if (objCondition && typeof objectValues[i] === 'object' || Array.isArray(object))