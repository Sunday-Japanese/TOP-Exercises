

/*  Aim To Calculate Salateries of Emplopies present in different departments many kinds of multiple loops should exist */


const addSalaries = function(n) {


    let objectValues = Object.values(n);
   return sumData(objectValues);

   let filterr = objectValues.filter((e) => {typeof e === 'object'});
   filterr.forEach((e) => addSalaries(e));


}



const sumData = function(m) {
    let length = m.length;
    let sum = 0;
        for(let i = 0; i < length; i++) {
        sum += m[i];
    }
    
    
return sum;
}

//console.log(sumData([3,4]))
console.log(addSalaries({"a" : 20 , "b" : 40, "c" : 45, d : {e : "40"}}));
