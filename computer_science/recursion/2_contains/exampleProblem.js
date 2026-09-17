const addSalaries = function(n) {
    // Guard clause: if n is null or not an object, it can't have properties
    if (typeof n !== 'object' || n === null) return 0;

    let objectValues = Object.values(n);
    let sum = 0;

    for (let i = 0; i < objectValues.length; i++) {

        if (typeof objectValues[i] === 'number') {
            // Base case: add numbers directly
            sum += objectValues[i];
        } else {
            // Recursive case: add the sum of the nested object to the current sum
            sum += addSalaries(objectValues[i]);
        }
    }

    return sum; 
};

// Example usage:
const company = {
    sales: 1000,
    development: {
        sites: 2000,
        internals: {
            hr: 500
        }
    }
};

console.log(addSalaries()); // Output: 3500
