
/*const container = document.getElementById("personajes")
    fetch("https://rickandmortyapi.com/api/character?page=38")
    .then((res) => res.json())
    .then((data) => (data));*/

   const conteiner = document.getElementById("personajes")
   const btnPrev = document.querySelector("btn-prev")
   const btnNext = document.querySelector("btn-next")
   
    fetch("https://rickandmortyapi.com/api/character")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      todosLosPersonajes(datos);
     });
    
    const todosLosPersonajes = apiPage => {
      //console.log(apiPage.results);
      const personajesArray = apiPage.results
      personajesArray.forEach((cadaPersonaje) => {
       //console.log(cadaPersonaje.name)
       conteiner.innerHTML += `<p>${cadaPersonaje.name}</p> `;
      })
    };
   
  
//apiPage.results.forEach(cadaPersonaje => {
    

     

    

     /*const renderCards = (apiRick) => {
        console.log(apiRick.results)
        apiRick.results.forEach(personajes => {
          personajes.innerTex += personajes
        })};*/

     /*const container = document.getElementById("personajes");
     
     const renderCards = (apiRick) => {
      console.log(apiRick.results)
      apiRick.results.forEach(personajes => {
        personajes.innerTex += personajes
      });
      
console.log(personajes)

     }


    
//const datosDelPersonaje = () => {}
//const container = document.getElementById("personajes");
/*fetch("https://rickandmortyapi.com/api/character?page=38")
.then((res) => res.json())
.then((data) => renderCards(data))
console.log(data)*/

/*const container = document.getElementById("personajes");

const renderCards = (page38) => {
 console.log(page38.results)
 page38.results.forEach(personajes => {
   personajes.innerTex += personajes
 });
 
console.log(personajes)

}*/
