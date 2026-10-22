// Target wedding date: 11 November 2026, 10:00 AM IST (+05:30)
const weddingDate = new Date("2026-11-11T10:00:00+05:30").getTime();
let countdown;

function updateCountdown() {
  const distance = weddingDate - Date.now();
  const timerElement = document.querySelector(".timer");

  if (distance <= 0) {
    if (countdown) clearInterval(countdown);
    if (timerElement) {
      timerElement.innerHTML = "<h3>🎉 The Wedding Day Has Arrived! 🎉</h3>";
    }
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (daysEl) daysEl.innerText = days;
  if (hoursEl) hoursEl.innerText = hours;
  if (minutesEl) minutesEl.innerText = minutes;
  if (secondsEl) secondsEl.innerText = seconds;
}

// Function to show current UTC time if present
function showTime() {
  const currentTime = document.getElementById("currentTime");
  if (currentTime) {
    currentTime.textContent = new Date().toUTCString();
  }
}

// Initialize countdown and clock
countdown = setInterval(updateCountdown, 1000);
updateCountdown();

showTime();
setInterval(showTime, 1000);
