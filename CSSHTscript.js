
function copyBereich(button) {
  const codeBlock = button.closest(".code-block").querySelector(".code");
  const text = codeBlock.innerText;

  navigator.clipboard.writeText(text).then(() => {
    const original = button.innerHTML;
    button.innerHTML = '<span class="check">✓</span>';
    button.disabled = true;

    setTimeout(() => {
      button.innerHTML = original;
      button.disabled = false;
    }, 1500);
  });
}
