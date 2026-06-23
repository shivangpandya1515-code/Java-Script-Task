// - Create an empty array `queue`. Use `push` and `shift` to simulate a queue where you add elements `1`, `2`, and `3` in sequence, and then remove them one by one.

let queue = [];

queue.push(1);
queue.push(2);
queue.push(3);

console.log("Queue after add numbers:" +queue);

console.log("Removed:",queue.shift());
console.log("Removed:",queue.shift());
console.log("Removed:",queue.shift());

console.log("Queue after Remove numbers:" +queue);
