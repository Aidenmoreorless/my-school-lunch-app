// VARIABLES:
// These store the user's chosen food item and how they want it prepared.
let selectedFood = "";
let foodPrep = "";

// HTML ELEMENTS:
// Connect JavaScript to the dropdown and text input using their IDs.
const foodSelect = document.getElementById("food-item");
const prepInput = document.getElementById("food-prep");

// EVENT LISTENERS:
// Update variables whenever the user makes a choice.
foodSelect.addEventListener("change", function () {
  selectedFood = foodSelect.value;
});

prepInput.addEventListener("input", function () {
  foodPrep = prepInput.value;
});
// VARIABLE:
// Stores the time the user selects for their food.
let selectedTime = "";

// HTML ELEMENT:
// Connects JavaScript to the time input.
const timeInput = document.getElementById("order-time");

// EVENT LISTENER:
// Updates the variable when the user picks a time.
timeInput.addEventListener("change", function () {
  selectedTime = timeInput.value;
});
// HTML ELEMENTS:
// Connects JavaScript to the order button and confirmation box.
const orderBtn = document.getElementById("place-order-btn");
const confirmationBox = document.getElementById("order-confirmation");

// EVENT LISTENER:
// Runs when the user clicks the "Place Order" button.
orderBtn.addEventListener("click", function () {
  // Check if the user selected a food item and a time
  if (selectedFood === "" || selectedTime === "") {
    confirmationBox.textContent = "Please choose a food item and a time before ordering!";
    return;
  }

  // Use a default note if the user left customization blank
  let prepNote = foodPrep !== "" ? foodPrep : "Standard preparation";

  // OUTPUT:
  // Displays the complete order summary on the screen.
  confirmationBox.textContent =
    "Order Placed! " + selectedFood + " (" + prepNote + ") will be ready for " + selectedTime + ".";
});