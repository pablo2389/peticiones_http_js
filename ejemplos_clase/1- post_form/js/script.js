"use strict";

console.log("----------------------------------------");
console.log("HTTP POST de datos de un formulario (formData)");

const dominio = "https://miblog.inovecode.com";

const boton = document.querySelector("#ingresar")
boton.onclick = async () => {
    // Borrar último mensaje de error:
    document.querySelector("#error").textContent = "";

    // Aquí comienza la operación para realizar el fetch
    const usuario = document.querySelector("#usuario").value;
    const password = document.querySelector("#password").value;
    if(usuario == "" || password == "") {   
        alert("Indique usuario y contraseña");
        return;
    }
    const formData = new FormData();
    formData.append("usuario", usuario);
    formData.append("password", password);

    const url = `${dominio}/api/v1.0/login`;
    const resp = await fetch(url, {
            method: 'POST',
            body: formData,
        });
    if(resp.ok) {
        const data = await resp.json();
        console.log(data);
        alert("¡Login exitoso!");
    } else {
        alert("Falló la petición");
        // Mostrar mensaje de error
        const data = await resp.json();
        document.querySelector("#error").textContent = data["detail"];
    }        
}



