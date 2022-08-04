const init = async () => {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/episode")
        const data = await response.json()
        console.log(data);
        const charContenedorElement = document.getElementById("char-contenedor")
        charContenedorElement.innerHTML = ""
        data.results.forEach((element) => {
            charContenedorElement.innerHTML += `
            <div class="char-car">
                <div class="char-info">
                    <p>${element["name"]}</p>
                </div>
                <div class="char-info">
                    <p>${element["air_date"]}</p>
                </div>
                <div class="char-info">
                    <p>${element["episode"]}</p>
                </div>
            </div>
            `
        });  

    } catch (error) {
        console.error(error)
        console.log("Hubo un error");
    }
}

init()