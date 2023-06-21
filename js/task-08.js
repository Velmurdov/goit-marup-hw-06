
const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', findSubmit);
function findSubmit(evt) {
    evt.preventDefault();
    const {
        elements: {email, password}
    } = evt.currentTarget;

    if(email.value === ''|| password.value === '') {
        return alert('Все поля должны быть заполнены!');
    }

    const user = {
        email: email.value,
        password: password.value
    }
    console.log('user:', user);
    evt.currentTarget.reset();
}


