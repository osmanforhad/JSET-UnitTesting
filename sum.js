// function sum(a, b) {
//   return a + b;
// }
// module.exports = sum;

//error throwing function
// function myFunction(input) {
//   if (typeof input !== "number") {
//     throw new Error("Invalid Input");
//   }
// }
// module.exports = myFunction;

//call back function
// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Mauntain Deu");
//   }, 1000);
// }
// module.exports = fetchData;

//function which return a promise
function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Mauntain Deu"), 1000);
  });
}
module.exports = fetchPromise;
