function typeWriter(elementId, text, speed = 100, callback = null) {
  let index = 0;
  const el = document.getElementById(elementId);
  el.textContent = "";

  function type() {
    if (index < text.length) {
      el.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }

  type();
}