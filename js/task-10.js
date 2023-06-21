function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector('[data-create]'); 
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);

function createBoxes(){
  const amount = parseInt(inputEl.value);
 
  let markup = '';

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    
    markup += `<div  style='width: ${size}px; height: ${size}px; background-color: ${color};'> </div>`;

  };
 
  boxesEl.innerHTML = markup;
} ;

function destroyBoxes(){
  boxesEl.innerHTML = '';
};