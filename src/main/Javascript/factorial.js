function factorial(number) {
    // checking if number is negative
    if (number < 0) {
        console.log('Error! Factorial for negative number does not exist.');
        return -1;
    }

    // if number is 0
    if (number === 0) {
        console.log(`The factorial of ${number} is 1.`);
        return 1;
    }

    // if number is positive
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
    return fact;
}