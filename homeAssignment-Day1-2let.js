const browserName = "Chrome";

function getBrowserName() {
  if (browserName === "Chrome") {
    let browserName = "Edge";
    console.log("Inside block:", browserName);
  }

  console.log("Outside block:", browserName);
}

getBrowserName();