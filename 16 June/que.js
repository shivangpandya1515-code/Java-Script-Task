// // Q1. Write a named function to print "Hello World".

// function displayHello(){
//     console.log("Hello World!");
// }

// displayHello();

// Q4. Write a named function that prints the multiplication table of a given number.

// function multiplicationTable(number){
//     for(let i = 1; i <= 10; i++){
//         console.log(number +"x"+ i +"="+ (number*i));
//     }
// }

// multiplicationTable(15);

// Q6. Write a named function that returns a random number between 1 and 100.

// function randNum(){
//     return parseInt(Math.random() *100 ) + 1
// }

// console.log(randNum());

// // Q7. Write a named function that returns the sum of two numbers.

// function sumTwoNumbers(num1,num2){
//     return num1 + num2;
// }

// console.log(sumTwoNumbers(10,20));

// // Q9. Write a named function that returns the factorial of a number.

function fact(num){

    let factorial=1;

    for(let i = 1; i <= num; i++){
        factorial *= 1;
    }
    return factorial;
}

console.log(fact(5));