class ConstructorProducto {
    constructor() {
        this.nombre = '';
        this.precio = 0;
        this.descripcion = '';
    }

    establecerNombre(nombre) {
        this.nombre = nombre;
        return this;
    }

    establecerPrecio(precio) {
        this.precio = precio;
        return this;
    }

    establecerDescripcion(descripcion) {
        this.descripcion = descripcion;
        return this;
    }

    construir() {
        return {
            nombre: this.nombre,
            precio: this.precio,
            descripcion: this.descripcion
        };
    }
}

// Uso del ConstructorProducto
const producto = new ConstructorProducto()
    .establecerNombre('Laptop')
    .establecerPrecio(1000)
    .establecerDescripcion('Con esta laptop puedes nunca parar de aprender')
    .construir();

console.log(producto);
