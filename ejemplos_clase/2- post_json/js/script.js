"use strict";

console.log("----------------------------------------");
console.log("HTTP POST de datos JSON");

const dominio = "https://miblog.inovecode.com";

const boton = document.querySelector("#publicar")
boton.onclick = async () => {
    // Borrar último mensaje de error:
    document.querySelector("#error").textContent = "";

    // Aquí comienza la operación para realizar el fetch
    const usuario = document.querySelector("#usuario").value;
    if(usuario == "") {   
        alert("Indique un usuario quese haya logeado al sistema");
        return;
    }

    const titulo = document.querySelector("#titulo").value;
    const texto = document.querySelector("#texto").value;
    const data = {
        titulo: titulo,
        texto: texto,
    }

    const url = `${dominio}/api/v1.0/posteos/${usuario}`;
    const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    if(resp.ok) {
        const data = await resp.json();
        console.log(data);
        alert(`Posteo ${data["titulo"]} efectuado con éxtiso con el ID=${data["id"]}`);
    } else {
        alert("Falló la petición");
        const data = await resp.json();
        document.querySelector("#error").textContent = data["detail"];
    }
}



