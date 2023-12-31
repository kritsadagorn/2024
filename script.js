// Set the date we're counting down to
const countDownDate = new Date("January 1, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  const countdownElement = document.getElementById("countdown");
  if (distance > 0) {
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    clearInterval(x);
    countdownElement.innerHTML = "Happy New Year 2024! Thank you for this year na babe";
  }
}, 1000);

function startFireworks() {
  // Trigger the fireworks effect
  particlesJS.load("particles-js", "particles-config.js");
}
