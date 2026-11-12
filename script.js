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