// Add event listener for the "Return" key
const itemInput = document.getElementById("item-input");
itemInput.addEventListener("keyup", (event) => {
  event.preventDefault();
  if (event.key === "Enter") {
    addItem();
  }
});

// Add new task
function addItem() {
  const itemInput = document.getElementById("item-input");
  const newItem = itemInput.value.trim();
  if (newItem.length === 0) {
    itemInput.classList.add("required");
    itemInput.focus();
    return;
  }
  itemInput.classList.remove("required");
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("item");
  itemDiv.innerHTML = `
    <div class="item-text"><span>${newItem}</span></div>
    <button class="btn-done" type="button"><i class="icofont-verification-check"></i></button>`;
  const btnDone = itemDiv.querySelector(".btn-done");
  btnDone.addEventListener("click", () => {
    itemDone(btnDone);
  });
  document.getElementById("todo-items").appendChild(itemDiv);
  clearButtonVisible();
  clearText();
}

// Task switch to done
function itemDone(btnDone) {
  const itemDiv = btnDone.closest(".item");
  itemDiv.classList.toggle("item-done");
  const icon = btnDone.querySelector("i");
  icon.classList.toggle("icofont-verification-check");
  icon.classList.toggle("icofont-redo");
}

// Show or hide clear all button
function clearButtonVisible() {
  const clearAll = document.getElementById("clearAll");
  const todoItems = document.getElementById("todo-items");
  if (todoItems.children.length > 0) {
    clearAll.closest("section").classList.remove("hide");
  } else {
    clearAll.closest("section").classList.add("hide");
  }
}

// Remove all tasks
function clearAll() {
  const todoItems = document.getElementById("todo-items");
  todoItems.innerHTML = "";
  clearButtonVisible();
}

// Clear input text
function clearText() {
  document.getElementById("item-input").value = "";
}

// Dynamic font-size
function sizeFont() {
  const itemInput = document.getElementById("item-input");
  const initialSize = 1.2 - itemInput.value.length / 200;
  itemInput.style.fontSize = Math.max(initialSize, 0.9) + "em";
}