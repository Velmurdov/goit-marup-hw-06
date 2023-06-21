const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length == inputEl.dataset.length) {
        inputEl.classList='valid';
    } 
       else  inputEl.classList='invalid';
    
});
