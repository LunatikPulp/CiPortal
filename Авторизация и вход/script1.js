const notificationSound = document.getElementById('notificationSound');

function countUp(element, targetValue) {
  const currentValue = parseInt(element.innerText);
  const increment = Math.ceil(targetValue / 100);

  if (currentValue < targetValue) {
    element.innerText = Math.min(currentValue + increment, targetValue);
    setTimeout(() => countUp(element, targetValue), 10);
    playNotificationSound();
  }
}

function playNotificationSound() {
  notificationSound.currentTime = 0;
  notificationSound.play();
}

const allSpan = document.getElementById('all');
const doneSpan = document.getElementById('done');

allSpan.addEventListener('click', () => {
  const currentValue = parseInt(allSpan.innerText);
  allSpan.innerText = currentValue + 1;
  playNotificationSound();
});

doneSpan.addEventListener('click', () => {
  const currentValue = parseInt(doneSpan.innerText);
  doneSpan.innerText = currentValue + 1;
});

// Пример использования:
const targetValue = 0; // Новое значение счетчика
countUp(allSpan, targetValue);
