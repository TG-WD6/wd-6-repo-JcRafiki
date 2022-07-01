let input = document.querySelector('[data-keywords]');

input.oninput = handleInput;

function handleInput(e) {
    let search = e.target.value
    const keywords = Object.values(localStorage); 

    const form = document.querySelector('[data-form]');
    form.lastElementChild.remove(); //remove previous matched keywords
    
    let keywordDiv = document.createElement('div');
    keywordDiv.classList.add('searchResult');
    
    if(search === ''){
        keywordDiv.style.visibility = 'hidden';
        input.style.borderBottom = '1px solid black';
        input.style.borderRadius = '.5rem';
    }else if (search.length > 0) {
        input.style.borderBottom = '0px solid black';
        input.style.borderBottomLeftRadius = '0rem';
        input.style.borderBottomRightRadius = '0rem';
        for (let x = 0; x < keywords.length; x++) {
            const result = document.createElement('span');
            if (keywords[x].includes(search) == true) {
                result.textContent = keywords[x];
                keywordDiv.appendChild(result);
            }
        }
    }
    form.appendChild(keywordDiv);

}

const button = document.querySelector('[data-submit-button]')
button.addEventListener('click', () => {
    let input = document.querySelector('[data-keywords]');
    addLocalStorage(input.value);
});


function addLocalStorage(input) {
    const key = localStorage.length + 1;
    if (localStorage.length === 0) {
        localStorage.setItem(key, input);
    } else {
        for(const index in localStorage){
            if(localStorage[index] === input){
                return;
            }else{
                localStorage.setItem(key, input)
            } 
        }
    }
}


