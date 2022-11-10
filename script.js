const toDoField = document.querySelector('.to-do-field');
const toDoSend = document.querySelector('.to-do-send');
const toDolist = document.querySelector('.to-do-list');

toDoSend.addEventListener('click', function(e){
    console.log(toDoField.value);
    const li = document.createElement('li');
    const buttonClear = document.createElement ('button');
    buttonClear.setAttribute('class', 'button-clear');
    buttonClear.innerText = 'Apagar';
    li.innerText = toDoField.value;
    li.appendChild(buttonClear);
    toDolist.appendChild(li);
})
   
addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('button-clear')){
        el.parentElement.remove();
    }
})