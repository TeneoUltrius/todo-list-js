// Listen to button click on "Return"
document.getElementById("item-input").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("addBtn").click();
    }
});

// Add new task
function addItem() {
    let itemInput = document.getElementById('item-input');
    if (itemInput.value.length == 0) {
        itemInput.classList.add('required');
        itemInput.focus();
    } else {
        itemInput.classList.remove('required');
        let newItem = document.getElementById('item-input').value;
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <div class="item-text"><span>${newItem}</span></div>
            <button id="btn-done" class="btn-done" type="button" onclick="itemDone()"><i class="icofont-verification-check"></i></button>`;
        document.getElementById('todo-items').append(itemDiv);
        clearButtonVisible();
        clearText();  
    }
}

// Task switch to done
function itemDone() {
    if (event.target.closest("div").classList.contains('item-done')) {
        event.target.closest("div").classList.remove('item-done');
        event.target.closest("#btn-done").innerHTML = `
            <i class="icofont-verification-check"></i>`;
    } else {
        event.target.closest("div").classList.add('item-done');
        event.target.closest("#btn-done").innerHTML = `
            <i class="icofont-redo"></i>`;
    }
}


// Show or hide clear all button
function clearButtonVisible () {
    document.getElementById('clearAll').closest("section").classList.remove('hide');
}

// Remove all tasks
function clearAll () {
    let items = document.getElementsByClassName('item');

    items[0].remove();
    while (items.length > 0) {
        clearAll();
    }

    if (items.length == 0) {
        document.getElementById('clearAll').closest("section").classList.add('hide');
    }
}

// Clear input text
function clearText () {
    document.getElementById('item-input').value = "";
}

// Dynamic font-size
function sizeFont() {
    let x = document.getElementById("item-input");
    let initialSize = 1.2 - x.value.length/200;
    initialSize = initialSize <= 1 ? 0.9 : initialSize;
    x.style.fontSize = initialSize + "em";
}