const fs = require("fs");

let coffee = {
  type: "Latte",
  orders: 2
};

const coffeeJson = JSON.stringify(coffee);

console.log(coffeeJson);

fs.writeFileSync("coffee.json", coffeeJson);

const dataBuffer = fs.readFileSync("coffee.json");

console.log(dataBuffer);

const dataJSON = dataBuffer.toString();

const data = JSON.parse(dataJSON);

console.log(data);
