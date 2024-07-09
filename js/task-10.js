function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const controls = document.getElementById("controls");
  const input = controls.querySelector("input");
  const createButton = controls.querySelector("[data-create]");
  const destroyButton = controls.querySelector("[data-destroy]");
  const boxesContainer = document.getElementById("boxes");

  function createBoxes(amount) {
    const boxesFragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesFragment.appendChild(box);
    }
    boxesContainer.appendChild(boxesFragment);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = "";
  }

  createButton.addEventListener("click", () => {
    const amount = Number(input.value);
    createBoxes(amount);
  });

  destroyButton.addEventListener("click", () => {
    destroyBoxes();
  });
});
