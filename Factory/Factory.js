/* PASO 1 */
class CocheBase {
    mostrarPrecio() {
      throw new Error('¡Método no implementado!');
    }
  }
  
  /* PASO 2 */
  class CocheTitan extends CocheBase {
    mostrarPrecio() {
      console.log('Coche Titan Precio: 300,000 MXN');
    }
  }
  
  class CocheLeón extends CocheBase {
    mostrarPrecio() {
      console.log('Coche León Precio: 100,000 MXN');
    }
  }
  
  /* PASO 3 */
  class FabricaCoches {
    crearCoche() {
      throw new Error('¡Método no implementado!');
    }
  }
  
  /* PASO 4 */
  class FabricaCocheTitan extends FabricaCoches {
    crearCoche() {
      return new CocheTitan();
    }
  }
  
  class FabricaCocheLeón extends FabricaCoches {
    crearCoche() {
      return new CocheLeón();
    }
  }
  
  function aplicarFabrica(fabrica) {
    const coche = fabrica.crearCoche();
    coche.mostrarPrecio();
  }
  
  // aplicarFabrica(new FabricaCocheTitan());
  // aplicarFabrica(new FabricaCocheLeón());
  
  function crearFabrica(tipo) {
    const fábricas = {
      titan: FabricaCocheTitan,
      león: FabricaCocheLeón,
    }
  
    const Fabrica = fábricas[tipo];
    return new Fabrica();
  }
  
  aplicarFabrica(crearFabrica('titan'));
  aplicarFabrica(crearFabrica('león'));
  
  /*
  PRO:
  1-Reduce el acoplamiento entre los objetos que crean los coches y aquellos que los utilizan.
  2-La creación de coches ocurre en un único lugar.
  3-Agregar nuevos coches no requiere modificar el código ya existente.
  
  CONTRA:
  1-Genera más código para la creación de nuevos coches.
  2-Exceso de abstracción si hay muchos tipos de coches.
  
  COMO USARLO?
  1-Úsalo cuando no sepas cuántos tipos diferentes de coches existirán.
  2-Cuando quieras desacoplar el uso de los coches de su creación.
  3-Para extender el funcionamiento de sistemas o bibliotecas.
  */
  