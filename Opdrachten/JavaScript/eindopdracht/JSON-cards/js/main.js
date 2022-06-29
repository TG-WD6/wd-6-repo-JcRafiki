const json_url = "../JSON-cards/pokemon-json/pokedex.json";

fetch(json_url)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (pokemon) {
        getPokemon(pokemon);
    }).catch(() =>{
        console.log('Failed to load json');
    })

function getPokemon(pokemon) {
    //pokeGens
    const genOne = 151;
    const genTwo = 251;
    const genThree = 368;
    const genFour = 493;
    const genFive = 649;
    const genSix = 721;
    const genSeven = 809;
    let genPicked = 'Pick a Generation';

    const pokeThumbSrc = './pokemon-json/thumbnails/';
    const pokeBgSrc = './pokemon-json/images/';

    //get search paras
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const pokeGen = urlParams.get('pokeGen');

    const dex = document.querySelector('.dex');
    //create docfragment
    const docFrag = document.createDocumentFragment();

    //set chosen gen
    if (pokeGen != '') {
        switch (pokeGen) {
            case 'gen1':
                genPicked = 151;
                break;
            case 'gen2':
                genPicked = 251;
                break;
            case 'gen3':
                genPicked = 368;
                break;
            case 'gen4':
                genPicked = 493;
                break;
            case 'gen5':
                genPicked = 649;
                break;
            case 'gen6':
                genPicked = 729;
                break;
            case 'gen7':
                genPicked = 809;
                break;
            default:
                break;
        }
    }

    const current = document.getElementById('current');
    current.value = genPicked;

    //poke stats generation
    for (let i = 0; i < genPicked; i++) {

        //create tile
        let tile = document.createElement('div');
        tile.classList.add('tile');
        tile.style.backgroundImage = 'url(' + pokeBgSrc + pokeImgGen(i) + ')';

        //create data container
        let pokeContainer = document.createElement('div');
        pokeContainer.classList.add('pokeContainer');
        tile.appendChild(pokeContainer);

        let pokeNameContainer = document.createElement('div');
        pokeNameContainer.classList.add('pokeNameContainer');
        pokeContainer.appendChild(pokeNameContainer);

        let pokeName = document.createElement('span');
        pokeName.classList.add('pokeName');
        pokeName.textContent = pokemon[i].name.english;
        pokeNameContainer.appendChild(pokeName);

        let pokeImg = document.createElement('img');
        pokeImg.classList.add('pokeImg');
        pokeImg.src = pokeThumbSrc + pokeImgGen(i);
        pokeNameContainer.appendChild(pokeImg);

        let pokeId = document.createElement('span');
        pokeId.classList.add('pokeId');
        pokeId.textContent = '#' + pokemon[i].id;
        pokeNameContainer.appendChild(pokeId);

        let pokeTypeContainer = document.createElement('div');
        pokeTypeContainer.classList.add('pokeTypeContainer');
        pokeContainer.appendChild(pokeTypeContainer);

        pokeTypeGen(pokemon, pokeTypeContainer, i);


        let pokeStatsLeft = document.createElement('div');
        pokeStatsLeft.classList.add('pokeStatsLeft');

        let pokeStatsRight = document.createElement('div');
        pokeStatsRight.classList.add('pokeStatsRight');
        // pokeStatsLeft.textContent = pokemon[i].base;
        // pokeContainer.appendChild(pokeStatsLeft);

        pokeStatsGen(pokemon, pokeStatsLeft, pokeStatsRight, i);
        pokeContainer.appendChild(pokeStatsLeft)
        pokeContainer.appendChild(pokeStatsRight);
        
        // pokeStatsRight.textContent = pokemon[i].base.HP;
        

        docFrag.appendChild(tile);
    }
    dex.appendChild(docFrag);

    //clear button
    document.getElementById('clear').addEventListener('click', () => {
        const dex = document.querySelector('.dex');
        dex.textContent = '';
        const current = document.getElementById('current');
        current.value = 'Pick a Generation';
    });

    //create mouseOverEvent for bg-img
    const pokeStats = document.querySelectorAll('.tile');

    pokeStats.forEach((tile) => {
        tile.addEventListener('mouseenter', () => {
            resetBG(tile.style.backgroundImage);
            tile.style.backgroundImage = 'none';
            tile.childNodes[0].style.opacity = '1';
        });
    });
    //reset bg img after mouseleave
    function resetBG(url) {
        pokeStats.forEach((tile) => {
            tile.addEventListener('mouseleave', () => {
                tile.style.backgroundImage = url;
                tile.childNodes[0].style.opacity = '0';
            });
        });
    }
}

//img url generation
function pokeImgGen(i) {
    i = i + 1;
    if (i.toString().length == 1) {
        i = '00' + i + '.png';
    } else if (i.toString().length == 2) {
        i = '0' + i + '.png';
    } else {
        i = i + '.png';
    }
    return i;
}

//type css generation
function pokeTypeGen(pokemon, pokeTypeContainer, i) {

    for (let t = 0; t < pokemon[i].type.length; t++) {
        let pokeType = document.createElement('span');
        pokeType.classList.add('type');
        pokeType.classList.add(pokemon[i].type[t]);
        pokeType.textContent = pokemon[i].type[t];
        pokeTypeContainer.appendChild(pokeType);
    }

}

//stats generation
function pokeStatsGen(pokemon, pokeStatsLeft, pokeStatsRight, i) {
    for (let t = 0; t < Object.keys(pokemon[i].base).length; t++) {
        if (t < 3) {
            let ability = Object.keys(pokemon[i].base);
            let pokeStats = document.createElement('span');
            pokeStats.classList.add('stats')
            pokeStats.textContent = ability[t];
            let pokeStatsVal = document.createElement('span');
            pokeStatsVal.classList.add('statsVal');
            pokeStatsVal.textContent = pokemon[i].base[ability[t]];
            pokeStatsLeft.appendChild(pokeStats);
            pokeStatsLeft.appendChild(pokeStatsVal);
        } else if (t >= 3) {
            let ability = Object.keys(pokemon[i].base);
            let pokeStats = document.createElement('span');
            pokeStats.classList.add('stats')
            pokeStats.textContent = ability[t];
            let pokeStatsVal = document.createElement('span');
            pokeStatsVal.classList.add('statsVal');
            pokeStatsVal.textContent = pokemon[i].base[ability[t]];
            pokeStatsRight.appendChild(pokeStats);
            pokeStatsRight.appendChild(pokeStatsVal);
        }
    }
}