"use strict";

console.log("----------------------------------------");
console.log("HTTP GET de datos JSON");

const dominio = "https://miblog.inovecode.com";

const boton = document.querySelector("#consultar")
boton.onclick = async () => {
    // Borrar último mensaje de error:
    document.querySelector("#error").textContent = "";

    // Aquí comienza la operación para realizar el fetch
    const usuario = document.querySelector("#usuario").value;
    if(usuario == "") {   
        alert("Indique un usuario quese haya logeado al sistema");
        return;
    }

    const url = `${dominio}/api/v1.0/posteos/${usuario}`;
    const resp = await fetch(url);
    if(resp.ok) {
        const posteos = await resp.json();
        console.table(posteos);

        let accumulator = ""            
        posteos.forEach(posteo => {
            accumulator += 
                `
                <div>
                    <p id="titulo">${posteo.titulo}</p>
                    <p id="texto">${posteo.texto}</p>
                    <hr>
                </div>
                `
        });
        const section = document.querySelector("#posteos");
        section.innerHTML = accumulator;
    } else {
        alert("Falló la petición");
        const data = await resp.json();
        document.querySelector("#error").textContent = data["detail"];
    }



}



