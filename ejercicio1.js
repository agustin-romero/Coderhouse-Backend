class Usuario {
    constructor(nombre, apellido = {}, libros, mascotas = []) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = libros,
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascotas(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBooks(nombre, autor) {
        this.libros.push({
            nombre,
            autor
        });
    }

    getBookNames() {
        return this.libros.map( libro => libro.nameBook)
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