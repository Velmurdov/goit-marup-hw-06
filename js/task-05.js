const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output')

inputEl.addEventListener('input', function(evt){
 const name = evt.target.value ; 
 outputEl.textContent = name ? name : 'Anonymous' ;
}
) ;

