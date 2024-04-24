// I NEED TO DO A FILTER FUNCTION WHICH WILL COMPARE INPUT TO THE POKEMON NAMES


const awe = async () => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
    const data = await resp.json();



    console.log(data.results );
    const firstAbility = await fetch (`${data.abilities[0].ability.url}`)
    const fistAbilityData = await firstAbility.json();

    console.log(fistAbilityData);
} 

let input = document.getElementById('pokemonName')

input.addEventListener('keyup', filterFunc);


function filterFunc() {
    const main = document.querySelector(".main");
    const inputValue = document.querySelector("#pokemonName").value.toLowerCase();
    let pages = main.querySelectorAll('.pokemonPage');
    for(let i = 0; i < pages.length; i++) {
        let name = pages[i].querySelector(".pokemonName");

        if(name.innerHTML.toLowerCase().indexOf(inputValue) > -1) {
            pages[i].style.display = "initial";
        }else{
            pages[i].style.display = 'none';
        }
    } 
    // то есть мне нужно сравнить как-то имя покемона с инпута с именами в бд и вывести покемонов у которых чары совпадат. КАК? 
}


const pageLoad = async (data, main) => {
    for (let i = 0; i < data.results.length; i++) {

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
        name.textContent = secdata.name.toUpperCase();

        main.appendChild(page);
        page.appendChild(sprite);
        page.appendChild(name);
    }

}

async function PagesGenerator() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=60&offset=0`);
    const data = await response.json();
    const main = document.querySelector('.main');

    pageLoad(data, main);
    
}


const itemsCount =  60;
let itemsLoaded = 60;


async function loadmore() {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${itemsCount}&offset=${itemsLoaded}`);
    const data = await response.json();

    itemsLoaded += itemsCount;

    const main = document.querySelector('.main');

    pageLoad(data, main);

    console.log(itemsCount);
    console.log(itemsLoaded);

}


// awe();
// loadmore();
PagesGenerator();
// filterfunc();