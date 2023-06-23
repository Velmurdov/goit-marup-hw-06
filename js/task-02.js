const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector("#ingredients");

const markup = function(array){
  array.map(elem=>{
    const liEl = document.createElement('li');
    liEl.textContent = elem ;
    liEl.classList.add('item');
    return listEl.append(liEl);
  });
}(ingredients);