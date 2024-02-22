//your JS code here. If required.
// Declare a variable to store the counter value
let counter = 0;

// Get the counter paragraph element by its ID
let counterElement = document.getElementById("counter");

// Get the increment button element by its ID
let incrementBtn = document.getElementById("incrementBtn");

// Add a click event listener to the increment button
incrementBtn.addEventListener("click", function() {
  // Display an alert with the current counter value
  alert("The current counter value is " + counter);

  // Increment the counter value by 1
  counter++;

  // Update the counter paragraph element with the new counter value
  counterElement.textContent = counter;
});
