const counterValue = document.getElementById('value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let count = 0 ;

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);

function decrement(){
    count -= 1 ; 
 updateCounter()
}

function increment(){
    count += 1 ; 
 updateCounter()
}

function updateCounter(){
    counterValue.textContent = count;
}