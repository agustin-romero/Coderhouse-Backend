const fs = require('fs');

//create a class

class Contenedor {
    constructor(fileName) {
        this.fileName = fileName;
    }

    // method
    async save(prod) {
        try {
            try {
                await
fs.promises.readFile('./' + this.fileName)
                console.log('existe el archivo')

                let data = await 
fs.promises.readFile('./' + this.fileName)
                data = await
JSON.parse(data)
                console.log(typeof data)
                
                prod.id = data.length + 1

                data.push(prod)

                this.deleteAll()
                await
                fs.promises.writeFile (this.fileName, JSON.stringify(data))
            } catch(error) {
                console.log('no existe el archivo')

                prod.id= 1
                const products = []
                products.push(prod)
                await
                fs.promises.writeFile('./' + this.fileName, JSON.stringify(products))
            }

            return console.log(prod.id)
        } catch (error) {
            console.log(error);
        }
    }
    
    async getById(id) {
        try {
            let data = await
            fs.promises.readFile('./' + this.fileName)
            data = JSON.parse(data)
            const prod = data.filter(prod => prod.id == id)
            return console.log(prod)
        } catch (error) {
            console.log(error);
        }
    }
    async getAll() {
        try {
            let data = await
            fs.promises.readFile('./' + this.fileName)
            data = await JSON.parse(data)

            return console.log(data)
        } catch (error) {
            console.log(error);
        }
    }
    async deleteById(id) {
        try {
            let data = await
            fs.promises.readFile('./' + this.fileName)
            data = await JSON.parse(data)

            const newData = data.filter(prod => prod.id != id)

            await
            fs.promises.writeFile('./' + this.fileName, JSON.stringify(newData))
        } catch (error) {
            console.log(error)
        }
    }
    async deleteAll() {
        try {
            await
            fs.promises.writeFile('./' + this.fileName, '')
        } catch (error) {
            console.log(error);
        }
    }
}

const prueba = new
Contenedor('productos.txt')

// prueba.save({ nombre: 'pizza', precio: '10', thumbnail: 'adadasdasd' })

// prueba.getById(1)
// prueba.getAll()
// prueba.deleteById(2)