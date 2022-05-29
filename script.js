

let input = document.getElementById('item-input');

function AddItem() {
    let newItem = document.getElementById('item-input').value;
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = `
            <button class="btn-done" type="button">DONE</button>
            <span class="item-text" >${newItem}</span>`;
    document.getElementById('todo-items').append(itemDiv);

    addListenerDoneButtons();
};

function addListenerDoneButtons() {
    let doneButtons = document.getElementsByClassName('btn-done');
    console.log(doneButtons);


    for(i = 0; i < doneButtons.length; i++) {
        let button = doneButtons[i];
        button.addEventListener('click', function(event) {
            let buttonClicked = event.target;
        buttonClicked.parentElement.classList.add('item-done');    
        });
    }
}

function clearAllItems() {
    let item = document.getElementsByClassName('btn-done');

    console.log('item ' + item);

    for (i = 0; i < item.length; i++) {
        let button = item[i];
        console.log(button);
        button.addEventListener('click', function (event) {
            let buttonClicked = event.target;
            buttonClicked.parentElement.remove();
        });
    }

}
