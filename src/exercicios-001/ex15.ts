const arr: (number | string)[] = ["Layza", 2, 3, 4, "Banana"];

let numbers = arr
  .filter(item => typeof item === "number")
  .map(item => <number>item);

let characters = arr
  .filter(item => typeof item === "string")
  .map(item => <string>item);

console.log("Números:", numbers);
console.log("Strings:", characters);