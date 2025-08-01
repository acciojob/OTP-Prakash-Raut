//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

document.addEventListener('DOMContentLoaded', () => {
  inputs.forEach((input, index) => {
    input.addEventListener('input', () => handleInput(input, index));
    input.addEventListener('keydown', (e) => handleBackspace(e, index));
  });
  focusFirstInput();
});

function handleInput(input, index) {
  if (input.value.length > 1) {
    input.value = input.value.charAt(0);
  }
  if (input.value && index < inputs.length - 1) {
    inputs[index + 1].focus(); // Move to next field
  }
}

function handleBackspace(e, index) {
  const input = inputs[index];
  if (e.key === 'Backspace' && !input.value && index > 0) {
    inputs[index - 1].focus(); // Move to previous field
  }
}

function focusFirstInput() {
  inputs[0].focus();
}