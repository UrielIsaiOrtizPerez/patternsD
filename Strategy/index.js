class EstrategiaDescuento {
    aplicarDescuento(monto) {
      throw new Error('¡Este método debe ser sobrescrito!');
    }
  }
  
  class SinDescuento extends EstrategiaDescuento {
    aplicarDescuento(monto) {
      console.log(`No se aplica descuento. El monto total es ${monto}`);
    }
  }
  
  class DescuentoPorcentaje extends EstrategiaDescuento {
    constructor(porcentaje) {
      super();
      this.porcentaje = porcentaje;
    }
    aplicarDescuento(monto) {
      const montoDescuento = (this.porcentaje / 100) * monto;
      const montoFinal = monto - montoDescuento;
      console.log(`Aplicando un descuento del ${this.porcentaje}%. El monto final es ${montoFinal}`);
    }
  }
  
  class DescuentoFijo extends EstrategiaDescuento {
    constructor(montoFijo) {
      super();
      this.montoFijo = montoFijo;
    }
    aplicarDescuento(monto) {
      const montoFinal = monto - this.montoFijo;
      console.log(`Aplicando un descuento de $${this.montoFijo}. El monto final es ${montoFinal}`);
    }
  }
  
  class ContextoDescuento {
    constructor(estrategia) {
      this.estrategia = estrategia;
    }
  
    aplicarDescuento(monto) {
      this.estrategia.aplicarDescuento(monto);
    }
  }
  
  const sinDescuento = new SinDescuento();
  const descuentoPorcentaje = new DescuentoPorcentaje(10);  // Descuento del 10%
  const descuentoFijo = new DescuentoFijo(50);  // Descuento de $50
  
  const contextoDescuento = new ContextoDescuento(sinDescuento);
  contextoDescuento.aplicarDescuento(200); // No se aplica descuento. El monto total es 200
  
  contextoDescuento.estrategia = descuentoPorcentaje;
  contextoDescuento.aplicarDescuento(200); // Aplicando un descuento del 10%. El monto final es 180
  
  contextoDescuento.estrategia = descuentoFijo;
  contextoDescuento.aplicarDescuento(200); // Aplicando un descuento de $50. El monto final es 150
  