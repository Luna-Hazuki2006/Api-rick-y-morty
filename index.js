console.log("hola mundo");

const filtrar = document.getElementById("boton-filtrar")
const nombre = document.getElementById("input-nombre")
const paginas = document.getElementById("paginas")
const seleccionar = document.getElementById("boton-paginas")

filtrar.addEventListener("click", async () => {
    const nombreFiltrar = nombre.value
    console.log(nombreFiltrar);
    if (nombreFiltrar !== "") {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombreFiltrar}`)
        const data = await response.json()
        const charContenedorElement = document.getElementById("char-contenedor")
        charContenedorElement.innerHTML = ""
        data.results.forEach(element => {
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
                    <div class="char-info">
                        <p class="text-gr">First seen in:</p>
                        <p class="text-blan">${element["origin"]["name"]}</p>
                    </div>
                </div>
            </div>
            `
        });
    }
})

seleccionar.addEventListener("click", async () => {
    const valor = paginas.value
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${valor}`)
        const data = await response.json()
        const charContenedorElement = document.getElementById("char-contenedor")
        charContenedorElement.innerHTML = ""
        data.results.forEach(element => {
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
                    <div class="char-info">
                        <p class="text-gr">First seen in:</p>
                        <p class="text-blan">${element["origin"]["name"]}</p>
                    </div>
                </div>
            </div>
            `
        });
    } catch (error) {
        console.error(error)
        console.log("hubo un error");
    }
})

const init = async () => {
    try {
        // llamar api
        const response = await fetch("https://rickandmortyapi.com/api/character/?page=1")
        // transformar a JSON
        const data = await response.json()
        console.log(data.results);
        const charContenedorElement = document.getElementById("char-contenedor")
        charContenedorElement.innerHTML = ""
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
                    <div class="char-info">
                        <p class="text-gr">First seen in:</p>
                        <p class="text-blan">${element["origin"]["name"]}</p>
                    </div>
                </div>
            </div>
            `
        });
        // mostrar dinámicamente
        console.log("init");

        const paginas = document.getElementById("paginas")
        paginas.innerHTML = ""
        for (let i = 1; i <= 42; i++) {
            paginas.innerHTML += `
            <option value="${i}">${i}</option>
            `
        }

    } catch (error) {
        console.error(error)
        console.log("hubo un error");
    }
}
init()