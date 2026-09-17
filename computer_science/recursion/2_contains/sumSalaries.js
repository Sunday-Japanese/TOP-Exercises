

/*  Aim To Calculate Salateries of Emplopies present in different departments many kinds of multiple loops should exist */


const addSalaries = function(n) {

    //if (typeof n !== 'object' || n === null) return 0; // lol here guard clause is not even necessaruy , i got so fucking consufed here :<

    
    let objectValues = Object.values(n);
    let sum = 0;

    const length = objectValues.length;

        for(let i = 0; i < length; i++) {


        if (typeof objectValues[i] === 'number') {
            sum += objectValues[i];
        } else {
            sum += addSalaries(objectValues[i]);
            
        }
    }

    

return sum;
console.log(sum);
    
    
    /*for(let i = 0; i < length; i ++) {
        if (objectValues[i])
        return sum;
    }*/
}

const company = {
    sales: 1000,
    development: {
        sites: 2000,
        internals: {
            hr: 500
        }
    }
};


let mycompany = {a : 20 , b : 40, d : {e : 40}, c : 45, f : {f : 50}}


//console.log(sumData([3,4]))
console.log(addSalaries(mycompany));
