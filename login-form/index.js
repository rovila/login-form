const lables = document.querySelectorAll(".form-control label");

lables.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letters, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letters}</span>`
    )
    .join("");
});
