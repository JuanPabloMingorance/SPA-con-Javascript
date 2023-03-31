import getHash from "../utils/getHash";
import getData from "../utils/getData";

async function getCharacter() {
  const id = getHash();
  console.log(id);
  const character = await getData(id);
  return character;
}

let character;

let characterData = (data) => {
  character = data;
};

getCharacter().then((data) => characterData(data));

console.log(character);

const Character = async () => {
 
        const id = getHash();
        console.log(id);
        const character = await getData(id)
     
    
  let view = `
    
    <div class="Character-inner">
        <article class="Characters-card">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
        </article>
        <article class="Characters-card">
            <h3>Episodes:<span>${character.episode.length}</span></h3>
            <h3>Status: <span>${character.status}</span> </h3>
            <h3>Species: <span>${character.species}</span> </h3>
            <h3>Gender: <span>${character.gender}</span> </h3>
            <h3>Origin: <span>${character.origin.name}</span> </h3>
            <h3>Last Location: <span>${character.location.name}</span> </h3>
        </article>

    </div>
    
    `;
  return view;
};

export default Character;
