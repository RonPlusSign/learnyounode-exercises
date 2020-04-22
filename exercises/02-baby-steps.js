/*
// Simple Version
let sum = 0;
for (let index = 2; index < process.argv.length; index++) {
  sum += +process.argv[index];
}
console.log(sum);
*/

/* ES6 Version */
console.log(
  process.argv
    .filter((elem) => Number.parseInt(elem)) // Filter the args to take only the numbers
    .map((elem) => Number.parseInt(elem)) // Convert the args from strings to numbers
    .reduce((sum, currentValue) => sum + currentValue) // Sum the value of the numbers
);
