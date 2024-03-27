const buttons = document.querySelectorAll(".section__tab-button");
buttons.forEach((button) => {
  button.addEventListener("click", click);
});

function click(e) {
  if (!this.classList.contains("section__tab-button_active")) {
    buttons.forEach((button) => {
      button.classList.remove("section__tab-button_active");
    });
  }
  this.classList.add("section__tab-button_active");
}
