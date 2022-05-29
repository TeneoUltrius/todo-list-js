let itemsCounter = 0; //For appear clearAll button

function AddItem() {

    if (document.getElementById('item-input').value.length == 0) {
        document.getElementById('item-input').setAttribute('placeholder', 'Type your text here');
    } else {
        document.getElementById('item-input').setAttribute('placeholder', '')    

        let input = document.getElementById('item-input');
        let newItem = document.getElementById('item-input').value;
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
                <button class="btn-done" type="button">DONE</button>
                <span class="item-text" >${newItem}</span>`;

        document.getElementById('todo-items').append(itemDiv);

        addListenerDoneButtons();
        clearButtonVisible();
        clearText();  
    }
};

function addListenerDoneButtons() {
    let doneButtons = document.getElementsByClassName('btn-done');

    for(let i = 0; i < doneButtons.length; i++) {
        let button = doneButtons[i];
        button.addEventListener('click', function(event) {
            let buttonClicked = event.target;
            buttonClicked.parentElement.classList.add('item-done');   
        });
    }
}

function createButtonClearAll () {
    let clearButtonText = "CLEAR";
    let createButton = document.createElement('button');

    document.getElementById('container').append(createButton);
    createButton.setAttribute('id', 'clearAll');
    createButton.setAttribute('onclick', 'clearAllItems()');
    createButton.setAttribute('type', 'button');
    createButton.innerHTML = clearButtonText;
}

function clearButtonVisible () {
    let showClearButton = document.getElementById('clearAll').classList.remove('invisible');

    if (itemsCounter == 0) {
        showClearButton;
    }
}

function clearAll () {
    let items = document.getElementsByClassName('item');

    items[0].remove();
    while (items.length > 0) {
        clearAll();
    }

    if (items.length == 0) {
        document.getElementById('clearAll').classList.add('invisible');
    }
    itemsCounter = items.length;
}

function clearText () {
    document.getElementById('item-input').value = "";
}

