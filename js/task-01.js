const categoriesEl = document.querySelector('#categories');

const numberOfCategories = categoriesEl.children.length ;

console.log('Number of Categories:', numberOfCategories);

[...categoriesEl.children].forEach(elem =>{
const categoryTitleEl = elem.firstElementChild.textContent;
const elementsCountEl = elem.firstElementChild.nextElementSibling.children.length ;

console.log(`
    Category: ${categoryTitleEl};
    Elements: ${elementsCountEl}
    `
);
});