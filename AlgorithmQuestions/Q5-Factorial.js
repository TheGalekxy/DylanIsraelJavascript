function factorial(number) {
    var finalMultiplication = []
    var i;
    for (i = 1; i <= number; i++) {
        finalMultiplication.push(i);
    }
finalMultiplication = finalMultiplication.reduce(
        (currentTotal, currentValue) => {
            console.log(currentTotal);
            
            return currentTotal * currentValue;
        }
    );
    
    return finalMultiplication;
}


function factorializeNumber(num) {
    let product = 1; 

    for ( let i = 1; i <= num; i++) {
        product = product * i;
    }
    return product;
}