let itemsCounter = 0; //For appear clearAll button

function addItem() {

    if (document.getElementById('item-input').value.length == 0) {
        document.getElementById('item-input').setAttribute('placeholder', 'Type your text here');
    } else {
        document.getElementById('item-input').setAttribute('placeholder', '')    

        let newItem = document.getElementById('item-input').value;
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
                <div class="item-text"><span>${newItem}</span></div>
                <button class="btn-done" type="button"><i class="icofont-verification-check"></i></button>`;

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

