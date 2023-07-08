let button = document.querySelector('.btn-primary');
let input = document.querySelector('.form-control');
let showAge = document.querySelector('.show-age');


let thisYear = new Date().getFullYear();

button.addEventListener('click', displayAge);

function displayAge() {

    let age = thisYear-input.value;
    
    if ( age >= 18) {

        showAge.innerHTML = `<h2>Your age is <span class="green">${age}</span></h2>
        <h2>You are Young</h2>`;
    }
    else {
        showAge.innerHTML = `<h2>Your age is <span class="green">${age}</span></h2>
        <h2>You are Kid</h2>`;
    }
    for (let i=1; i<=age ; i++) {
        showAge.innerHTML += '<span class="h2">*</span>';
    }
}


