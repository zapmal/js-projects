const form = document.querySelector("[name='verify']");
const inputs = form.querySelectorAll(".inputs input");

function handleInput(e) {
  const input = e.target;

  if (input.nextElementSibling && input.value) {
    input.nextElementSibling.focus();
    input.nextElementSibling.select();
  }
}

function handlePaste(e) {
  const paste = e.clipboardData.getData("text");

  inputs.forEach((input, index) => {
    input.value = paste[index] || "";
  });

  const isFilled = [...inputs].every(input => input.value !== "");

  if (isFilled) {
    inputs.forEach(input => input.classList.add("correct"));
    setTimeout(() => form.submit(), 1000);
  }
}

inputs[0].addEventListener("paste", handlePaste);
form.addEventListener("input", handleInput);