const json_url = "../JSON-cards/pokemon-json/pokedex.json";

fetch(json_url)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data){
        console.log(data[0].name);
    })



  

