// const name = document.getElementById('name');
// const description = document.getElementById('description')
// const class

const cardForm = document.getElementById("form");
const nameDisplay = document.getElementById("name-display");
const imageDisplay = document.getElementById("image");
const descriptionDisplay = document.getElementById("description-display");
const displayBox = document.getElementById("display-box");

cardForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const oldClass = displayBox.classList;

  const data = new FormData(cardForm);

  const name = data.get("name");
  const description = data.get("description");
  const image = data.get("class-select");

  nameDisplay.textContent = name;
  imageDisplay.src = `./assets/${image}.png`;
  descriptionDisplay.textContent = description;
  displayBox.classList.replace(oldClass[0], image);
});
