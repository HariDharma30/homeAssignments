setTimeout(function() {
  console.log("This message is delayed by 2 seconds");
}, 2000);

/* 
Explanation
setTimeout(...)
This is used to run something after some time.

function() { ... }
This is an anonymous function.

anonymous means function without a name
it is used directly inside setTimeout
console.log("This message is delayed by 2 seconds");
This prints the message.

2000
This means 2000 milliseconds

1000 milliseconds = 1 second
2000 milliseconds = 2 seconds
So after 2 seconds, the message will print.

Output after 2 seconds
This message is delayed by 2 seconds

simple Explanation
wait for 2 seconds
then print the message
One-line idea
setTimeout = “do this later” 
*/