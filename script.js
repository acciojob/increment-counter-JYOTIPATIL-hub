// Get the counter element
const counterElement = document.getElementById('counter');

// Get the increment button
const incrementBtn = document.getElementById('incrementBtn');

// Add click event listener to the increment button
incrementBtn.addEventListener('click', function() {
    // Get the current value of the counter
    let counterValue = parseInt(counterElement.textContent);

    // Display the alert with the current value
    alert("Un-incremented value: " + counterValue);

    // Increment the counter value
    counterValue++;

    // Update the counter element with the new value
    counterElement.textContent = counterValue;
});
