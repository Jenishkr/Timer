const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let timerInterval;
let remainingTime = 0;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateDisplay() {
  if (remainingTime === 0) {
    clearInterval(timerInterval);
    alert("Time's up!");
  }
  
  timeDisplay.textContent = formatTime(remainingTime);
  remainingTime--;

  if (remainingTime < 0) {
    clearInterval(timerInterval);
    timeDisplay.textContent = formatTime(0);
  }
}

startBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  const inputSeconds = parseInt(prompt('Enter time in seconds:'));
  if (!isNaN(inputSeconds) && inputSeconds > 0) {
    remainingTime = inputSeconds;
    updateDisplay();
    timerInterval = setInterval(updateDisplay, 1000);
  }
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
});

resetBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  remainingTime = 0;
  timeDisplay.textContent = formatTime(remainingTime);
});
