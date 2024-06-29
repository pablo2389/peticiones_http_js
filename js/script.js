"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado
    --> Leer el README para ver el enunciado
*/
const btnConsultar = document.getElementById("btnConsultar");

btnConsultar.addEventListener("click", async () => {
  try {
    const personaje = document.getElementById("personaje").value;
    const apiUrl = `https://rickandmortyapi.com/api/character/?name=${personaje}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Imprimir los datos del personaje en la consola
    console.log("Datos del personaje:", data);
    const infoContainer = document.getElementById("infoContainer");
    infoContainer.innerHTML = `
      <h2>${data.results[0].name}</h2>
      <img src="${data.results[0].image}" alt="${data.results[0].name}">
      <p>Género: ${data.results[0].gender}</p>
      <p>Especie: ${data.results[0].species}</p>
      <p>Origen: ${data.results[0].origin.name}</p>
    `;
  } catch (error) {
    console.error("Error al consultar la API:", error);
  }
});
