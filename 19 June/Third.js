let numbers = [2, 4, 6, 8, 10];

function checkEvenNumbers(numbers)
{
    return numbers.every(function(number)
    {
        return number % 2 === 0;
    });
}

console.log(checkEvenNumbers(numbers));