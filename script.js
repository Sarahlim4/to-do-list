const toDoField = document.querySelector('.to-do-field');
const toDoSend = document.querySelector('.to-do-send');
const toDolist = document.querySelector('.to-do-list');

function createList() {
    const li = document.createElement('li');
    const buttonClear = document.createElement('button')
    buttonClear.setAttribute('class', 'button-clear bi bi-trash3-fill');
    li.innerText = toDoField.value;
    li.appendChild(buttonClear)
    toDolist.appendChild(li);
    toDoField.value = ' '
    return li;

}

toDoSend.addEventListener('click', function(e){
    createList()
})



addEventListener('keyup', (e) => {
    console.log(e.key)
    if (e.key == 'Enter') {
        createList();
    }
})

addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('button-clear')){
        el.parentElement.remove();
    }
})