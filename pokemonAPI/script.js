
let input = document.getElementById('pokemonName')
input.addEventListener('keyup', filterFunc);

window.onload= () => {input.value = ''};

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
}


const pageLoad = async (data, main) => {
    for (let i = 0; i < data.results.length; i++) {

        const resp = await fetch(`${data.results[i].url}`);
        const secdata = await resp.json();
        const stats = secdata.stats;


        const page = document.createElement("a");
        page.className ='pokemonPage';
        
        const frontSide = document.createElement("div");
        frontSide.className = "front";


        const sprite = document.createElement("img");
        sprite.className ='pokemonSprite';
        sprite.src = secdata.sprites.front_default;        


        const name = document.createElement("p");
        name.className ='pokemonName';
        name.textContent = secdata.name.toUpperCase();


        const backSide = document.createElement("div");
        backSide.className = "back";
        
        const hp = document.createElement('p')
        hp.className = 'hp';
        hp.textContent = "HP " + stats[0].base_stat;

        const defense = document.createElement('p')
        defense.className = 'def';
        defense.textContent = "DEFENSE " + stats[2].base_stat;

        const damage = document.createElement('p')
        damage.className = 'dmg';
        damage.textContent = 'DAMAGE ' + stats[1].base_stat;


        const speed = document.createElement('p')
        speed.className = 'speed';
        speed.textContent = 'SPEED ' + stats[5].base_stat;


        page.addEventListener('click', () => {
            page.classList.toggle('flipcard');
        })


        for(let i = 0; i < secdata.stats.length; i++) {
            console.log(stats[i].stat.name + ":" + stats[i].base_stat);
        }

        console.log(stats);

        main.appendChild(page);
        page.appendChild(frontSide);
        frontSide.appendChild(sprite);
        frontSide.appendChild(name);

        page.appendChild(backSide);
        backSide.appendChild(hp);
        backSide.appendChild(defense);
        backSide.appendChild(damage);
        backSide.appendChild(speed);
    }

}

async function PagesGenerator() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`);
    const data = await response.json();
    const main = document.querySelector('.main');

    pageLoad(data, main);
    
}


const itemsCount =  30;
let itemsLoaded = 30;


async function loadmore() {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${itemsCount}&offset=${itemsLoaded}`);
    const data = await response.json();

    itemsLoaded += itemsCount;

    const main = document.querySelector('.main');

    pageLoad(data, main);

}


PagesGenerator();
filterfunc();