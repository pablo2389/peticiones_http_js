"use strict";

console.log("----------------------------------------");
console.log("HTTP GET de datos JSON");

const dominio = "https://inoveblog.herokuapp.com";

const boton = document.querySelector("#consultar")
boton.onclick = async () => {
    // Aquí comienza la operación para realizar el fetch
    const usuario = apiConfig["username"];
    const apikey = apiConfig["apikey"];
    if(usuario == "" || apikey == "") {   
        alert("Indique usuario y apikey en el archivo de configuración");
        return;
    }

    const params = { 
        usuario: usuario,
        apikey: apikey,
    };
    // armar la url completa con los parametros query
    const query = Object.keys(params)
                 .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                 .join('&');

    const url = `${dominio}/api/v1.0/post`;
    const resp = await fetch(url + "?" + query);
    if(resp.ok) {
        const data = await resp.json();
        const posteos = data["posts"];
        console.log(posteos);

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
    }



}



