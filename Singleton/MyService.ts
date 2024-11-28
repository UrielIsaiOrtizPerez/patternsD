export class MyService {
    // Variable estática para almacenar una única instancia de la clase
    static instance: MyService | null = null;
  
    // Constructor privado para evitar la creación de múltiples instancias
    private constructor(private name: string) {}
  
    // Método para obtener el nombre de la instancia
    getName() {
      return this.name;
    }
  
    // Método estático para crear o obtener la instancia
    static create(name: string) {
      if (MyService.instance === null) {
        console.log('debería entrar una');
        MyService.instance = new MyService(name);
      }
      return MyService.instance;
    }
  }

const myService1 = MyService.create('Service 1');
const myService2 = MyService.create('Service 2');
const myService3 = MyService.create('Service 3');

// Imprimir los nombres para verificar el contenido de la instancia única
console.log( myService1.getName());
console.log( myService2.getName());
console.log( myService3.getName());

console.log('myService1 === myService2:', myService1 === myService2); // true
console.log('myService2 === myService3:', myService2 === myService3); // true
console.log('myService1 === myService3:', myService1 === myService3); // true