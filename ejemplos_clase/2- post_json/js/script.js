"use strict";

console.log("----------------------------------------");
console.log("HTTP POST de datos JSON");

const dominio = "https://inoveblog.herokuapp.com";

const boton = document.querySelector("#publicar")
boton.onclick = async () => {
    // Aquí comienza la operación para realizar el fetch
    const usuario = apiConfig["username"];
    const apikey = apiConfig["apikey"];
    if(usuario == "" || apikey == "") {   
        alert("Indique usuario y apikey en el archivo de configuración");
        return;
    }

    const titulo = document.querySelector("#titulo").value;
    const texto = document.querySelector("#texto").value;
    const data = {
        usuario: usuario,
        apikey: apikey,
        titulo: titulo,
        texto: texto,
    }

    const url = `${dominio}/api/v1.0/post`;
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
    }
}



