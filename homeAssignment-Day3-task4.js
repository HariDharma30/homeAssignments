function getUserData(callback) {
  setTimeout(function () {
    callback("Call Back Function");
  }, 3000);
}

getUserData(function(message) {
  console.log(message);
});



/* 
Explanation

1. function getUserData(callback)
This creates a function named getUserData.

callback means another function is passed inside it
so this function can call that function later

2. setTimeout(function () { ... }, 3000);
This waits for 3 seconds.
3000 milliseconds = 3 seconds

3. callback("Call Back Function");
After 3 seconds, it calls the callback function
and sends this text:

"Call Back Function"


4. getUserData(function(message) { ... })
Here we are calling getUserData
and passing an anonymous function as callback.

function(message) {
  console.log(message);
}
javascript

This callback receives the message and prints it.

Very simple meaning
getUserData waits for 3 seconds
after that it calls another function
that other function prints the message
Short understanding
setTimeout = wait
callback = function called later
console.log(message) = print the message


one line idea
getUserData says:

“Wait 3 seconds, then run this function.”

*/