const express = require("express");
const app = express();

app.get("/isprime", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const jsonResponse = await isPrime(parseInt(req.query.number));
    res.send(jsonResponse);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

app.listen(8081, () => console.log("Listening on 8081"));

async function isPrime(number) {
  let startTime = new Date();
  let endTime = new Date();
  let isPrime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      endTime = new Date();
      isPrime = false;
      break;
    }
  }

  if (isPrime) endTime = new Date();

  return {
    number: number,
    isPrime: isPrime,
    time: endTime.getTime() - startTime.getTime(),
  };
}
