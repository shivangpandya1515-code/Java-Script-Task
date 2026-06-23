// - Create an array `original` with values `[1, 2, 3, 4, 5]`. Use `pop` and `unshift` to reverse the elements in place (without creating a new array).

let original = [1,2,3,4,5];

console.log(original);

original.pop();
original.pop();
original.pop();
original.pop();
original.pop();
console.log(original);

original.unshift(1);
original.unshift(2);
original.unshift(3);
original.unshift(4);
original.unshift(5);
console.log(original);