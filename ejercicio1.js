class Usuario {
    constructor(nombre, apellido, libros = {}, mascotas = []) {
        (this.nombre = nombre),
        (this. apellido = apellido),
        (this.libros = libros),
        (this.mascotas = mascotas);
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascotas(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas() {
        let c = this.mascotas.length;
        return c;
    }
    addBooks(libro) {
        this.libros.push(libro);
    }

    getBookNames() {
        let titulo = [];
        for (let i = 0; i < this.libros.length; i++) {
            titulo.push(this.libros[i].nameBook);
        }
        return titulo;
    }
    getMascotas() {
        return this.mascotas;
    }
}

const user = new Usuario(
    "Agustin",
    "Romero",
    [
        { nameBook: "El Principito", autor: "Antoine de Saint-Exupéry" },
        { nameBook: "Ficciones", autor: "Jose Luis Borges" },
    ],
    ["Perro", "Gato"]
);

/* Punto 4 */

console.log(user.getFullName());

user.addMascotas("Tortuga");
console.log(user.countMascotas());

user.addBooks({ nameBook: "Mi Planta de Naranja Lima", autor: "José Mauro de Vasconcelos" });
console.log(user.getBookNames());