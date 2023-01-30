// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  //... your code goes here
  const price = document.querySelector(".price span").textContent;
  const quantity = document.querySelector("input").value;
  let subTotalPrice = price * quantity;
  console.log(subTotalPrice);
  document.querySelector(".subtotal span").textContent = subTotalPrice;
  return subTotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // end of test

  // ITERATION 2
  //... your code goes here
  const anotherProduct = document.querySelectorAll(".product");
  //console.log(anotherProduct);

  //updateSubtotal(otherProduct);
  let subTotalPrice = 0;
  anotherProduct.forEach((element) => {
    subTotalPrice += updateSubtotal(element);
  });

  anotherProduct.textContent = subTotalPrice;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
