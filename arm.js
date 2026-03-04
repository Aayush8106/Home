const input = document.getElementById("in");
const btn = document.getElementById("ck");
const dis = document.getElementById("dis");

function arm() {
    let val = Number(input.value);  // Get the value from the input field
    if (isNaN(val) || input.value === '') {
        dis.innerText = "❌Must be a Number❌";  // Check if input is not a valid number or is empty
        btn.disabled = true;  // Disable the button if invalid
        return;  // Exit function early
    }

    // Enable button if input is valid
    btn.disabled = false;

    let temp = val;
    let digits = 0;
    
    // Calculate the number of digits in the number
    while (temp != 0) {
        temp = Math.floor(temp / 10);  // Remove the last digit
        digits++;
    }

    temp = val;
    let arm = 0;  // Initialize arm to store the Armstrong sum

    // Calculate Armstrong number
    while (temp != 0) {
        let ld = temp % 10;  // Get the last digit
        arm += ld ** digits;  // Add the digit raised to the power of the number of digits
        temp = Math.floor(temp / 10);  // Remove the last digit
    }

    // Check if the number is an Armstrong number
    if (val === arm) {
        dis.innerText = "✅Armstrong✅";
    } else {
        dis.innerText = "❌Not an Armstrong❌";
    }
}

// Event listener for button click
btn.addEventListener("click", arm);

// Enable button and reset display when the input changes
input.addEventListener("input", function() {
    btn.disabled = false;  // Enable the button again when the user starts typing
    dis.innerText = '';  // Clear the message
});