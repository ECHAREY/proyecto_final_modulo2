class Usuario {

    constructor(nombre, apellido, email, fecnac, imagen, sexo, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.fecnac = fecnac;
        this.imagen = imagen;
        this.sexo = sexo;
        this.direccion = direccion;
    }

    getNombre() {
        return this.nombre;
    }

    getAltTextImage() {
        return `foto-${this.nombre}-${this.apellido}`
    }

}