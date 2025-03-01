// Select the theme button
const themeBtn = document.getElementById("theme-btn");

// Check if the button is found
if (themeBtn) {
  // Add click event listener
  themeBtn.addEventListener("click", function(event) {
      // Generate random RGB values between 0 and 255
      const num1 = Math.floor(Math.random() * 256);  // Random number between 0 and 255
      const num2 = Math.floor(Math.random() * 256);  // Random number between 0 and 255
      const num3 = Math.floor(Math.random() * 256);  // Random number between 0 and 255

      // Set the background color to the generated RGB values
      document.body.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
  });
} else {
  console.log("Theme button not found!");
};
