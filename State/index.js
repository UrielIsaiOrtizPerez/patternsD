class EstadoPedido {
    constructor(pedido) {
      this.pedido = pedido;
    }
  
    prepararPedido() {
      throw new Error('Este método debe ser implementado');
    }
  
    servirPedido() {
      throw new Error('Este método debe ser implementado');
    }
  
    cancelarPedido() {
      throw new Error('Este método debe ser implementado');
    }
  }
  
  class PedidoEnEsperaEstado extends EstadoPedido {
    prepararPedido() {
      console.log('El pedido está siendo preparado...');
      this.pedido.cambiarEstado(this.pedido.enPreparacionEstado);
    }
  
    servirPedido() {
      console.log('El pedido aún no está listo para ser servido.');
    }
  
    cancelarPedido() {
      console.log('El pedido ha sido cancelado.');
      this.pedido.cambiarEstado(this.pedido.pedidoCanceladoEstado);
    }
  }
  
  class EnPreparacionEstado extends EstadoPedido {
    prepararPedido() {
      console.log('El pedido ya está siendo preparado.');
    }
  
    servirPedido() {
      console.log('El pedido está listo para ser servido.');
      this.pedido.cambiarEstado(this.pedido.pedidoListoEstado);
    }
  
    cancelarPedido() {
      console.log('El pedido no puede ser cancelado, ya está en preparación.');
    }
  }
  
  class PedidoListoEstado extends EstadoPedido {
    prepararPedido() {
      console.log('El pedido ya ha sido preparado y está listo.');
    }
  
    servirPedido() {
      console.log('El pedido ha sido servido.');
      this.pedido.cambiarEstado(this.pedido.pedidoFinalizadoEstado);
    }
  
    cancelarPedido() {
      console.log('El pedido ya ha sido servido, no puede ser cancelado.');
    }
  }
  
  class PedidoCanceladoEstado extends EstadoPedido {
    prepararPedido() {
      console.log('El pedido fue cancelado, no se puede preparar.');
    }
  
    servirPedido() {
      console.log('El pedido fue cancelado, no se puede servir.');
    }
  
    cancelarPedido() {
      console.log('El pedido ya ha sido cancelado.');
    }
  }
  
  class PedidoFinalizadoEstado extends EstadoPedido {
    prepararPedido() {
      console.log('El pedido ha sido finalizado, no se puede preparar.');
    }
  
    servirPedido() {
      console.log('El pedido ya ha sido servido, no se puede volver a servir.');
    }
  
    cancelarPedido() {
      console.log('El pedido ya ha sido finalizado, no se puede cancelar.');
    }
  }
  
  class Pedido {
    constructor() {
      this.pedidoEnEsperaEstado = new PedidoEnEsperaEstado(this);
      this.enPreparacionEstado = new EnPreparacionEstado(this);
      this.pedidoListoEstado = new PedidoListoEstado(this);
      this.pedidoCanceladoEstado = new PedidoCanceladoEstado(this);
      this.pedidoFinalizadoEstado = new PedidoFinalizadoEstado(this);
  
      // El estado inicial es "PedidoEnEspera"
      this.estadoActual = this.pedidoEnEsperaEstado;
    }
  
    cambiarEstado(estado) {
      this.estadoActual = estado;
    }
  
    prepararPedido() {
      this.estadoActual.prepararPedido();
    }
  
    servirPedido() {
      this.estadoActual.servirPedido();
    }
  
    cancelarPedido() {
      this.estadoActual.cancelarPedido();
    }
  }
  
  const pedido = new Pedido();
  
  // Acciones sobre el pedido
  pedido.prepararPedido();  // El pedido está siendo preparado...
  pedido.servirPedido();    // El pedido está listo para ser servido.
  pedido.servirPedido();    // El pedido ha sido servido.
  pedido.cancelarPedido();  // El pedido ya ha sido finalizado, no se puede cancelar.
  