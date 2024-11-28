class Auto {
	encender(llave) {
		console.log('El auto ha sido encendido con la llave:', llave);
	}
}

class AutoAdapter {
	constructor(auto) {
		this.auto = auto;
	}

	encender() {
		this.auto.encender('predeterminada');
	}
}

const miAuto = new Auto();
const adapter = new AutoAdapter(miAuto);

adapter.encender(); // El auto ha sido encendido con la llave: predeterminada