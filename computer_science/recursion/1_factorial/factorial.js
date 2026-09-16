const factorial = function(n) {
    if (n === 0) 
        return 1;
    else {
        let result = n;
        result *= factorial(n - 1);
        return result;
    }
};

console.log(factorial(3));

// Do not edit below this line
module.exports = factorial;