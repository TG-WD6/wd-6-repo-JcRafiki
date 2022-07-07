const board = document.querySelector('[data-board]');
const children = Array.from(board.children);

const boardAr = ['', '', '',
                '', '', '',
                '', '', ''];

children.forEach(div =>{
    div.addEventListener('click', ()=>{
        console.log(div);
        div.classList.add('checked')
        div.textContent ='x';
        console.log(div.classList);
    })
})

