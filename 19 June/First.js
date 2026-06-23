let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

function sortArray(numbers)
{
    let sortedNumbers = numbers.slice().sort(function(a, b)
    {
        return a - b;
    });

    return sortedNumbers;
}

console.log("Original Array:", numbers);
console.log("The Sorted Array:", sortArray(numbers));