let countdown; // interval id

document.getElementById("startBtn").addEventListener("click", () => {
  const input = document.getElementById("targetDate").value;
  const message = document.getElementById("message");

  if (!input) {
    message.textContent = "⚠️ Please select a date and time!";
    return;
  }

  const targetDate = new Date(input).getTime();
  clearInterval(countdown);

  // immediate update (don't wait 1s for first tick)
  updateTimer(targetDate);

  countdown = setInterval(() => {
    updateTimer(targetDate);
  }, 1000);
});

function updateTimer(targetDate) {
  const now = Date.now();
  const distance = targetDate - now;
  const message = document.getElementById("message");

  if (distance <= 0) {
    clearInterval(countdown);
    message.textContent = "🎉 Countdown Complete!";
    setDisplay("00","00","00","00");
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  setDisplay(days, hours, minutes, seconds);
  message.textContent = "";
}

function setDisplay(d, h, m, s){
  document.getElementById("days").textContent = String(d).padStart(2, "0");
  document.getElementById("hours").textContent = String(h).padStart(2, "0");
  document.getElementById("minutes").textContent = String(m).padStart(2, "0");
  document.getElementById("seconds").textContent = String(s).padStart(2, "0");
}
