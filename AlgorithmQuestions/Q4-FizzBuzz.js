function FizzBuzz(number) {
        if (number % 5 === 0 && number % 3 === 0) {
            return console.log('FizzBuzz');
        } 
        else if (number % 5 === 0) {
            return console.log('Buzz');
        } 
        else if (number % 3 === 0) {
            return console.log('Fizz');
        }
            return console.log('');
        
    }


function fizzbuzz2(num) {
    let word = '';

    if (num % 3 === 0) {
        word = word.concat('fizz');;
    }

    if (num % 5 === 0) {
        word = word.concat('buzz');
    }
    
    return word;
}