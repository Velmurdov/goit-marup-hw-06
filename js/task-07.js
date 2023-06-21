const inputChangeEl = document.getElementById('font-size-control');
const inputSpanEl = document.getElementById('text');

inputChangeEl.addEventListener('input', () =>{
 inputSpanEl.style.fontSize = `${Number(inputChangeEl.value)}px` ;
});

