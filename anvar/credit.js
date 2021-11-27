// File to calculate avarage load for customer
const price = document.getElementById("price");
const payment = document.getElementById("payment");
const month = document.getElementById("month");
const interest = document.getElementById("interest");
const creditForm = document.querySelector(".credit-form");
const calc = document.querySelector(".calc");

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
calc.addEventListener("click", (e) => {
  e.preventDefault();
  const priceCar = parseInt(price.value);
  const paymentCar = parseInt(payment.value);
  const monthCar = parseInt(month.value);
  const interestCar = parseInt(interest.value);
  let sum;
  sum = ((priceCar + paymentCar) / monthCar) * interestCar;
  console.log(sum);
  const load = document.createElement("span");
  load.style.cssText = "margin-left:3rem; font-size: 2rem;";
  load.innerText = sum + " - your approximate estimation";
  insertAfter(calc, load);
});
