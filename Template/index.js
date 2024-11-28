class Beverage {
    prepareRecipe() {
      this.boilWater();
      this.brew();
      this.pourInCup();
      this.addCondiments();
    }
  
    boilWater() {
      console.log('Hervir agua');
    }
  
    pourInCup() {
      console.log('Verter en taza');
    }
  
    // Métodos abstractos a ser implementados por las subclases
    brew() {
      throw new Error('Las subclases deben implementar brew()');
    }
  
    addCondiments() {
      throw new Error('Las subclases deben implementar addCondiments()');
    }
  }
  
  // Subclases concretas
  class Coffee extends Beverage {
    brew() {
      console.log('Hervir café');
    }
  
    addCondiments() {
      console.log('Agregar granos de café y azúcar');
    }
  }
  
  class Tea extends Beverage {
    brew() {
      console.log('Remojar la bolsita de té');
    }
  
    addCondiments() {
      console.log('Agregar limón y miel');
    }
  }
  
  // Uso
  const coffee = new Coffee();
  coffee.prepareRecipe();
  
  const tea = new Tea();
  tea.prepareRecipe();