
// Clase base
class Bebida {
	precio() {
		return 0;
	}
}

// Clase Decoradora
class AgregadoLeche extends Bebida {
	constructor(bebida) {
		super();
		this.bebida = bebida;
	}

	precio() {
		return this.bebida.precio() + 0.5;
	}
}

// Clase Decoradora
class AgregadoChocolate extends Bebida {
	constructor(bebida) {
		super();
		this.bebida = bebida;
	}

	precio() {
		return this.bebida.precio() + 1;
	}
}

// Uso
const bebida = new Bebida();
console.log(bebida.precio()); // 0

const bebidaConLeche = new AgregadoLeche(bebida);
console.log(bebidaConLeche.precio()); // 0.5

const bebidaConLecheYChocolate = new AgregadoChocolate(bebidaConLeche);
console.log(bebidaConLecheYChocolate.precio()); // 1.5
