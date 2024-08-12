// Creating variables
// INPUT SECTION
let form = document.querySelector('form');
let input = document.getElementById('input');
let createBtn = document.getElementsByClassName('btn-create');

// PENDING SECTION
let pendingContainer = document.querySelector('#container-pendingTasks');

// LINKS SECTION
let icons = document.querySelectorAll('a');



// Creating events - INPUT SECTION
form.addEventListener('submit', (e) => {
    e.preventDefault();
    createPendingTasks();
    cleanInputValue();
});



// Creating function to show the pending tasks after the form submit
function createPendingTasks() {

    let ul = document.createElement('ul');
    ul.classList.add('pending-ul');
    pendingContainer.appendChild(ul);

    let li = document.createElement('li');
    li.innerHTML = input.value;

    ul.appendChild(li);
    
    let pendingBtn = document.createElement('button');
    pendingBtn.classList.add('pending-btn');
    pendingBtn.innerHTML = 'Pending';
    ul.appendChild(pendingBtn);

    pendingBtn.addEventListener('click', () => {
        pendingBtn.innerHTML = 'Completed';
        pendingBtn.style.backgroundColor = 'lightGreen';
    })

}



// Creating function to clean up the input value after submit the form
function cleanInputValue () {
    input.value = '';
}



// Using forEach to change the icons color and size
icons.forEach( (icon) => {
    icon.style.color = 'black';
    icon.style.fontSize = '20px';
})