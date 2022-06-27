const json_url = "../JSON-cards/pokemon-json/pokedex.json";

fetch(json_url)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(pokemon){
        getPokemon(pokemon);
    })

    
function getPokemon(pokemon){
    //pokeGens
    const genOne = 151;
    const genTwo = 251;
    const genThree = 368;
    const genFour = 493;
    const genFive = 649;
    const genSix = 721;
    const genSeven = 809;
    let genPicked = 0;

    //get search paras
    const url =window.location.search;
   
    const urlParams = new URLSearchParams(url);
    const pokeGen = urlParams.get('pokeGen');
    
    const dex = document.querySelector('.dex');
    //create docfragment
    const docFrag = document.createDocumentFragment();

    //set chosen gen
    if(pokeGen != ''){
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

    console.log(pokeGen);
    for(let i=0; i<genPicked; i++){
        //create tile
        let tile = document.createElement('div');
        tile.classList.add('tile');

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

        let pokeImg = document.createElement('span');
        pokeImg.classList.add('pokeImg');
        pokeImg.textContent = pokemon[i].id;
        pokeNameContainer.appendChild(pokeImg);

        let pokeId = document.createElement('span');
        pokeId.classList.add('pokeId');
        pokeId.textContent = pokemon[i].id;
        pokeNameContainer.appendChild(pokeId);

        let pokeTypeContainer = document.createElement('div');
        pokeTypeContainer.classList.add('pokeTypeContainer');
        pokeTypeContainer.textContent = pokemon[i].name.english;
        pokeContainer.appendChild(pokeTypeContainer);
        
        let pokeTypeGrass = document.createElement('span');
        pokeTypeGrass.classList.add('pokeTypeGrass');
        pokeTypeGrass.textContent = pokemon[i].type;
        pokeTypeContainer.appendChild(pokeTypeGrass);
        
        let pokeStatsLeft = document.createElement('div');
        pokeStatsLeft.classList.add('pokeStatsLeft');
        pokeStatsLeft.textContent = pokemon[i].base.HP;
        pokeContainer.appendChild(pokeStatsLeft);

        let pokeStatsRight = document.createElement('div');
        pokeStatsRight.classList.add('pokeStatsRight');
        pokeStatsRight.textContent = pokemon[i].base.HP;
        pokeContainer.appendChild(pokeStatsRight);


        docFrag.appendChild(tile);
    }
    console.log(docFrag);
    dex.appendChild(docFrag);
 


    console.log(pokemon[0]);
}





//clear button
const clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click', () => {
    const dex = document.querySelector('.dex');
    dex.textContent='';
});