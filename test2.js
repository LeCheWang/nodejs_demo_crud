const express = require("express");
const EventEmitter = require("events");

const app = express();
const eventEmitter = new EventEmitter();

app.get("/isprime", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const number = parseInt(req.query.number);

  // Emit the event to start the asynchronous task
  eventEmitter.emit("checkPrime", number);

  res.send({ message: "Checking for prime..." + number });
});

app.listen(8081, () => console.log("Listening on 8081"));

// Handling the asynchronous task with EventEmitter and process.nextTick
eventEmitter.on("checkPrime", (number) => { 
    console.log("chờ isPrime::" + number);
    const result = isPrime(number);
    console.log(number + " Prime check result:", result);

});

function isPrime(number) {
  let isPrime = true;

  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}
