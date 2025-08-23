let apiLink = "https://pokeapi.co/api/v2/pokemon/" //remove last one to add your chosen one

async function fetchData(url){
    try{
        const response = await fetch(url); // promise based
        const data = await response.json();
        return data;
    }
    catch{
        console.error("some error happened")
    }
}

async function searchPoke(){
    let searchValue = document.getElementById("searchInput").value;
    let url = `${apiLink}${searchValue}` // `https://pokeapi.co/api/v2/pokemon/{searchValue}`
    let data = await fetchData(url)
    console.log(data)
    document.querySelector(".name").innerText = data.name
    document.querySelector(".num").innerText = data.id
    document.querySelector("#heightWeight").innerText = `Ht ${data.height}m . Wt ${data.weight}Kg`
    document.querySelector(".sprite").setAttribute("src", data.sprites.front_default)
    
    console.log(data.types)
    document.querySelector(".types").innerHTML=""

    for (let index = 0; index < data.types.length; index++) {
        let spanTypes = document.createElement('span');
        spanTypes.classList.add('badge');
        spanTypes.classList.add(`type-${data.types[index].type.name}`);
        spanTypes.innerText = data.types[index].type.name;
        document.querySelector(".types").appendChild(spanTypes)
            
    }
     
}

console.log(fetchData(apiLink))