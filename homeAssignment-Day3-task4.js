function getUserData(callback) {
  setTimeout(function () {
    callback("Call Back Function");
  }, 3000);
}

getUserData(function(message) {
  console.log(message);
});
