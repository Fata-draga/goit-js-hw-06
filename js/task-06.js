document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("validation-input");
  const dataLength = parseInt(input.getAttribute("data-length"), 10);

  input.addEventListener("blur", () => {
    if (input.value.length === dataLength) {
      input.classList.remove("invalid");
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
      input.classList.add("invalid");
    }
  });
});
