const container = document.getElementById('container')


for(let i = 1;i<152;i++){
    const pokemon = document.createElement("div")
    pokemon.classList.add("pokemon")
    const label = document.createElement("label")
    label.innerText = i;
    const img = document.createElement("img");

    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    // pokemon.className.add("propimg")

    pokemon.append(img);
    pokemon.appendChild(label);
    container.append(pokemon)
}