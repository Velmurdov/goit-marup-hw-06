const itemsEl = document.querySelectorAll("#categories, item");
console.log(`Number of categories ${itemsEl.length} `);

items = forEach (item => {
    const categoryTitile = item.querySelector("h2").textContent ;
    const elementsCount = item.querySelector("li").length ; 

    console.log(`Categories: ${categoryTitile}`)
    console.log(`Elements count: ${elementsCount}`)

})

