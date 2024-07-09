document.addEventListener("DOMContentLoaded", () => {
  const counterValue = 0;
  const counterDisplay = document.getElementById("value");
  const incrementButton = document.querySelector('[data-action="increment"]');
  const decrementButton = document.querySelector('[data-action="decrement"]');

  let currentCounterValue = counterValue;

  const updateCounterDisplay = () => {
    counterDisplay.textContent = currentCounterValue;
  };

  incrementButton.addEventListener("click", () => {
    currentCounterValue += 1;
    updateCounterDisplay();
  });

  decrementButton.addEventListener("click", () => {
    currentCounterValue -= 1;
    updateCounterDisplay();
  });

  updateCounterDisplay();
});
