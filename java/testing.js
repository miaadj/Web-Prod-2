const url = "https://pokeapi.co/api/v2/";
const category = "pokemon";
const form = document.querySelector("form");
const input = document.querySelector("input");
const card = document.querySelector('.card');
const name = document.querySelector("#name");
const hitpower = document.querySelector("#hitpower");
const img = document.querySelector("#image");
const type = document.querySelector("#type");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const id = document.querySelector("#id");

const TYPES = [
  'normal', 'fighting', 'flying',
  'poison', 'ground', 'rock',
  'bug', 'ghost', 'steel',
  'fire', 'water', 'grass',
  'electric', 'psychic', 'ice',
  'dragon', 'dark', 'fairy'
];

const searchPokemon = event =>{
    event.preventDefault();
    const { value } = event.target.spoke;

     const resetScreen = () => {
       for (const type of TYPES) {
       card.classList.remove(type);}
     };

     const capitalize = (str) => str[0].toUpperCase() + str.substr(1);

    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
     .then(res => res.json())
     .then(data => {
      
      resetScreen()

      const dataTypes = data['types'];
      type.textContent = capitalize(dataTypes [0]['type']['name']);
      card.classList.add(dataTypes [0]['type']['name']);
        if (card.classList.add()) {
        card.classList.remove('none');
       } else {
        card.classList.add('none');
      }

      name.textContent = capitalize(data['name']);
      id.textContent = data['id'];
      weight.textContent = data['weight'];
      height.textContent = data['height'];
      hitpower.textContent = data.stats['5'].base_stat
      image.innerHTML = `<img src=${data.sprites.front_default}>`;
      
    });
   }

