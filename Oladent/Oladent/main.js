const formulario = document.getElementById("login"); // nodo
const logout = document.getElementById("act_logout"); 

let sesion = null;

formulario.addEventListener("submit", (event) => {
    console.log("antes del click")
    event.preventDefault();
    event.stopPropagation();
    console.log("evento", event);
    console.log("despues del click");

    LimpiaMensajes();

    const userData = event.target.children.user.value;
    const passData = event.target.children.pass.value;

    if (userData !== "" && passData !== "") {
        const exitoso = Login(userData, passData); // boolean | object

        if (exitoso !== false) {
            alert("Bienvenido", "",);
            despuesLogin(event.target);
            CargaPerfil(exitoso);
        } else {
            alert("Usuario y/o contraseña incorrecta.")
        }
    } else {
        alert("Debe introducir un usuario y contraseña validos.");
    }

});

logout.addEventListener("click", () => {
    cierraSesion()
});
