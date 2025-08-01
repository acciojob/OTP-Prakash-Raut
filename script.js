const inputs = document.querySelectorAll('.code');

document.addEventListener('DOMContentLoaded', () => {
  inputs.forEach((input) => {
    input.addEventListener('input', () => handleInput(input));
    input.addEventListener('keydown', (e) => handleBackspace(e, input));
  });
  focusFirstInput();
});

function getInputIndex(input) {
  return parseInt(input.id.split('-')[1]);
}

function handleInput(input) {
  const index = getInputIndex(input);
  if (input.value.length > 1) {
    input.value = input.value.charAt(0);
  }
  const next = document.querySelector(`#code-${index + 1}`);
  if (input.value && next) {
    next.focus();
  }
}

function handleBackspace(e, input) {
  const index = getInputIndex(input);
  if (e.key === 'Backspace' && !input.value) {
    const prev = document.querySelector(`#code-${index - 1}`);
    if (prev) prev.focus();
  }
}

function focusFirstInput() {
  const first = document.querySelector('#code-1');
  if (first) first.focus();
}