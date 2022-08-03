const init = async () => {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/episode")
        const data = await response.json()
        const charContenedorElement = document.getElementById("char-contenedor")
        charContenedorElement.innerHTML = ""
        data.results.forEach(element => {
            
        });  
    } catch (error) {
        console.error(error)
        console.log("Hubo un error");
        
    }
}

init()