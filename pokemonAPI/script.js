// I NEED TO DO A FILTER FUNCTION WHICH WILL COMPARE INPUT TO THE POKEMON NAMES

async function filterfunc() {
    
    const pokemonSearch = document.querySelector("#pokemonName").value.toLowerCase();        
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=0&offset=0`);

    if(!response.ok){
        throw new Error("Could not fetch resource")
    }

    const data = await response.json();
    let blah = [];

    for(let i = 0; i < data.results.length; i++){
        blah.push(data.results[i].name)
    }
    let blah1 = blah.sort();
    alert(blah1.reverse())
    // то есть мне нужно сравнить как-то имя покемона с инпута с именами в бд и вывести покемонов у которых чары совпадат. КАК? 
}


async function PagesGenerator() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=0&offset=0`);
    const data = await response.json();
    const main = document.querySelector('.main');

    for(let i = 0; i < data.results.length; i++) {
        const resp = await fetch(`${data.results[i].url}`);
        const secdata = await resp.json();

        const page = document.createElement("a");
        page.className ='pokemonPage';
        page.href = "#";
        

        const sprite = document.createElement("img");
        sprite.className ='pokemonSprite';
        sprite.src = secdata.sprites.front_default; 
        

        const name = document.createElement("p");
        name.className ='pokemonName';
        name.textContent = secdata.name.toUpperCase(); // + secdata.name.slice(1);


        const id = document.createElement("p");
        id.className ='pokemonId';
        id.textContent = secdata.id;

        main.appendChild(page);
        page.appendChild(sprite);
        page.appendChild(name);

        // console.log(data.results.length);
        // page.appendChild(id);
        // console.log(secdata);
    }
    
}


const itemsCount =  60;
let itemsLoaded = 0;


async function loadmore() {

    let currentItems = 0
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${itemsCount}&offset=${itemsLoaded}`);
    const data = await response.json();

    itemsLoaded += itemsCount;



    const loadmore = document.querySelector(".loadmore");

    currentItems = data.results.length;

    for(let i = currentItems; i < currentItems + 9; i++) {
        console.log(i)
    }
    // response = fetch(`https://pokeapi.co/api/v2/pokemon?limit=${currentItems}&offset=0`)

    // data = response.json;

    // currentItems = data.results.length + 8;
    
    // console.log(currentItems);

}

// loadmore();
PagesGenerator();
// filterfunc();