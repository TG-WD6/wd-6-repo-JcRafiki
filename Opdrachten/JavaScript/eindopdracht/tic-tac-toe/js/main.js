const board = document.querySelector('[data-board]');


const boardAr =
    ['', '', '',
        '', '', '',
        '', '', ''];

const children = Array.from(board.children);
children.forEach(div => {
    div.addEventListener('click', () => {
        play(div);
    })
})

let i = 0;
function play(div) {
    if (i % 2 == 0) {
        const pos = div.getAttribute('data-square') - 1;
        if (boardAr[pos] == "") {
            div.classList.add('checked')
            div.textContent = 'x';
            boardAr.splice(pos, 1, "p1");
        } else {
            console.log("Kies een ander vak");
            i--;
        }
    } else {
        const pos = div.getAttribute('data-square') - 1;
        if (boardAr[pos] == "") {
            div.classList.add('checked')
            div.textContent = '0';
            boardAr.splice(pos, 1, "p2");
        } else {
            console.log("Kies een ander vak");
            i--;
        }
    }
    //wincondition p1
    if ((boardAr[0] === "p1" && boardAr[1] === "p1" && boardAr[2] === "p1") ||
        (boardAr[3] === "p1" && boardAr[4] === "p1" && boardAr[5] === "p1") ||
        (boardAr[6] === "p1" && boardAr[7] === "p1" && boardAr[8] === "p1")) {
        console.log("player 1 wins horizontaal");
    } else if ((boardAr[0] === "p1" && boardAr[3] === "p1" && boardAr[6] === "p1") ||
        (boardAr[1] === "p1" && boardAr[4] === "p1" && boardAr[7] === "p1") ||
        (boardAr[2] === "p1" && boardAr[5] === "p1" && boardAr[8] === "p1") == "1") {
        console.log("player 1 wins verticaal");
    } else if ((boardAr[0] === "p1" && boardAr[4] === "p1" && boardAr[8] === "p1") ||
        (boardAr[2] === "p1" && boardAr[4] === "p1" && boardAr[6] === "p1")) {
        console.log("player 1 wins diagonaal");
    }
    //wincondition p2
    if ((boardAr[0] === "p2" && boardAr[2] === "p2" && boardAr[2] === "p2") ||
        (boardAr[3] === "p2" && boardAr[4] === "p2" && boardAr[5] === "p2") ||
        (boardAr[6] === "p2" && boardAr[7] === "p2" && boardAr[8] === "p2")) {
        console.log("player 2 wins horizontaal");
    } else if ((boardAr[0] === "p2" && boardAr[3] === "p2" && boardAr[6] === "p2") ||
        (boardAr[2] === "p2" && boardAr[4] === "p2" && boardAr[7] === "p2") ||
        (boardAr[2] === "p2" && boardAr[5] === "p2" && boardAr[8] === "p2") == "2") {
        console.log("player 2 wins verticaal");
    } else if ((boardAr[0] === "p2" && boardAr[4] === "p2" && boardAr[8] === "p2") ||
        (boardAr[2] === "p2" && boardAr[4] === "p2" && boardAr[6] === "p2")) {
        console.log("player 2 wins diagonaal");
    }
    i++;
    console.log(boardAr);
}

play();
