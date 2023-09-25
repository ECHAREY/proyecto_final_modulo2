function Login(user, pass) {
    const filtrado = Usuarios.filter((current) =>  user === current.user && pass === current.password );
    if (filtrado.length !== 0) {
        return filtrado[0].data  // true
    } else {
        return false
    }
}

function MensajeError() {
    const mensaje = document.createElement("p");
    mensaje.textContent="Opps! Encontramos inconsitencias";
    const areaMensajes = document.getElementById("areaMensajes");
    areaMensajes.appendChild(mensaje);
}
function LoginError() {  
    alert("Debe introducir un usuario y contraseña validos.");
} 

function LimpiaMensajes() {
    const areaMensajes = document.getElementById("areaMensajes");

    // eliminar por nodo hijo
    const hijos = areaMensajes.children; // HTMLCollection
    



    // eliminar por nodo padre
    if (hijos.length > 0) {
        for(let i = 0; i <= hijos.length; i++) {
            console.log(hijos[i]);
            // hijos[i].remove(); // nodo hijo
            areaMensajes.removeChild(hijos[i]);
        }
    }
}

function despuesLogin(formulario) {
    formulario.children.user.disabled = true;
    formulario.children.pass.disabled = true;
    const inputs = Array.from(formulario.getElementsByTagName("input")); // HTMLCollection - array
    const inputboton = inputs.filter((value) => value.type === 'submit')[0];
    inputboton.disabled = true;
    formulario.children.user.value = "";
    formulario.children.pass.value = "";
}

function CargaPerfil(perfil) {
    console.log("perfil", perfil);
    sesion = new Usuario(perfil.nombre, perfil.apellido, perfil.email, perfil.fecnac, perfil.imagen, perfil.sexo, perfil.direccion);
    const contanierPerfil = document.getElementById("perfil");
    // contenedor del component
    const container = document.createElement("div");


    // imagen
    const imagen = document.createElement("img");
    imagen.src = sesion.imagen;
    imagen.alt = sesion.getAltTextImage();
    imagen.style.width = '50px';
    imagen.style.height = '50px';
    container.appendChild(imagen);




    // datos personales
    const containerDataPersonal = document.createElement("div");
    const nombre = document.createElement("p");
    nombre.textContent = sesion.nombre;
    nombre.style.color = 'white';
    containerDataPersonal.appendChild(nombre);
    const apellido = document.createElement("p");
    apellido.textContent = sesion.apellido;
    apellido.style.color = 'white';
    containerDataPersonal.appendChild(apellido);
    //const fecha = document.createElement("p");
    //fecha.textContent = sesion.fecnac;
    //containerDataPersonal.appendChild(fecha);
    container.appendChild(containerDataPersonal);
    contanierPerfil.appendChild(container);

    // visualizar logout
    const logout = document.getElementById("logout");
    // margin-left
    // marginLeft
    // flex-direction
    // flexDirection
    // display
    // color
    // padding
    logout.style.display = "flex";
}


function cierraSesion() {

    sesion = null;

    const contanierPerfil = document.getElementById("perfil");
    contanierPerfil.innerHTML = "";
    const logout = document.getElementById("logout");
    logout.style.display = "none";
    const formulario = document.getElementById("login");
    formulario.children.user.disabled = false;
    formulario.children.pass.disabled = false;
    const inputs = Array.from(formulario.getElementsByTagName("input")); // HTMLCollection - array
    const inputboton = inputs.filter((value) => value.type === 'submit')[0];
    inputboton.disabled = false;
}