const addButton = document.getElementById("add-btn");
const input = document.getElementById("grocery-input");
const list = document.getElementById("grocery-list");

addButton.addEventListener("click", function () {
  const itemText = input.value.trim();

  if (itemText === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = itemText;
  list.appendChild(li);

  input.value = "";
});
