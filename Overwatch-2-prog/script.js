let heroes = document.querySelectorAll('.hero-selector');
heroes = Array.prototype.slice.call(heroes);

let roles = document.querySelectorAll(".role-selector");
roles = Array.prototype.slice.call(roles);

let yourRoleValue = document.querySelector("#your-role-selector").value;
let showCounterBtn = document.querySelector("#showCounter");

showCounterBtn.addEventListener('click', async () => {
    const areSelectedRole = roles.every(role => role.value != '-');
    const areSelectedHero = heroes.every(hero => hero.value != '-');
    const response = await fetch ('./counterpicks.json');
    const data = await response.json();
    if (!areSelectedHero && !areSelectedRole) {
		alert('Please Take Role Or Hero')
	}

    console.log(`Are selected role: ${areSelectedRole}`);
    console.log(`Are selected hero: ${areSelectedHero}`);
    

    // calculateFunc();
})



const calculateFunc = async () => {
    const response =  await fetch ("./counterpicks.json");
    const data = await response.json();
        for (names in data) {            
            heroes.every(hero => () => {
                
            })        
        }
    }  
// TODD МБ НА ЗАВТРА: НУЖНО СДЕЛАТЬ ЦИКЛ КОТОРЫЙ ПРОВЕРЯЛ БЫ ЗНАЧЕНИЕ КАЖДОГО HERO ИЗ DATA.[NAMES].HERO;
// ТАКЖЕ НЕОБХОДИМО СРАВНИТЬ HERO.TYPE С РОЛЬЮ КОТОРАЯ ВЫБРАНА В КАЖДОМ БЛОКЕ HERO И ЕСЛИ РОЛЬ НЕКОРРЕКТАЯ ТО ПОПРОСИТЬ ПОСТАВИТЬ НЕОБХОДИМУЮ РОЛЬ 

calculateFunc();
