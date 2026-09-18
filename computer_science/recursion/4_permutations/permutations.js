const permutations = function(arry) {
    if (!Array.isArray(arry)) return "undefined";           // guard clause
    let result = [];

    let prmuLength = 1;
    for (let i = 1; i <= arry.length; i++) {
        prmuLength *= i;
    }

    let temp;
    for (let i = 0; i < prmuLength; i++) {
        
        if (arry[i] !== arry[i - 1] && i > 0 ) {
            temp = arry[i - 1];
            arry[i - 1] = arry[i];
            arry[i] = temp;
        }
       
    }
     result.push(arry);

    /*if (arry.length > 2) {
            result.push(permutations(arry));  
        }*/

return result;
  
};

const test = [2,3];

console.log(permutations([3,2]));
  
// Do not edit below this line
module.exports = permutations;
