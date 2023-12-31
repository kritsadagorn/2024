// Set the date we're counting down to (January 1, 2024, 00:00:00)
const countDownDate = new Date("2024-01-01T00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function () {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const distance = countDownDate - now;

  // Check if it's time to display the countdown
  if (distance > 0) {
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    // If it's past the countdown time, clear the interval and trigger fireworks
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Happy New Year 2024!";
    startFireworks();
  }
}, 1000);

function startFireworks() {
  // Trigger the fireworks effect
  particlesJS.load("particles-js", "particles-config.js");
}
