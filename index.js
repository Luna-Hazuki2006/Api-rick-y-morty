console.log("hola mundo");

const init = async () => {
    try {
        // llamar api
        const response = await fetch("https://rickandmortyapi.com/api/character/?page=1")
        // transformar a JSON
        const data = await response.json()
        console.log(data.results);
        const charContenedorElement = document.getElementById("char-contenedor")
        // iterar
        data.results.forEach((element) => {
            // mostrar el código en html
            charContenedorElement.innerHTML += `
            <div class="char-car">
                <img class="char-img" src="${element["image"]}" alt="Personaje">
                <div class="char-info-cont">
                    <div class="char-info">
                        <p class="text-blan">${element["name"]}</p>
                        <p class="text-blan">${element["status"]} - ${element["species"]}</p>
                    </div>
                    <div class="char-info">
                        <p class="text-gr">Last known location:</p>
                        <p class="text-blan">${element["location"]["name"]}</p>
                    </div>
                    <div>
                        <p class="text-gr">First seen in:</p>
                        <p class="text-blan">${element["origin"]["name"]}</p>
                    </div>
                </div>
            </div>
            `
        });
        // mostrar dinámicamente
        console.log("init");
    } catch (error) {
        console.error(error)
        console.log("hubo un error");
    }
}
init()