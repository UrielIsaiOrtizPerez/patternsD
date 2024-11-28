// Clase Person que almacena el nombre y el apellido de una persona
class Person {
  private name: string;    // Atributo para almacenar el nombre
  private lastName: string; // Atributo para almacenar el apellido

  constructor(name, lastName) {
    this.name = name;      // Inicializa el nombre con el valor proporcionado
    this.lastName = lastName; // Inicializa el apellido con el valor proporcionado
  }

  // Getter para obtener el nombre
  get getName() {
    return this.name;
  }

  // Getter para obtener el apellido
  get getLastName() {
    return this.lastName;
  }
}

// Clase User que almacena el nombre de usuario y la fecha de creación
class User {
  private username: string;        // Atributo para almacenar el nombre de usuario
  private creationDateUser: string; // Atributo para almacenar la fecha de creación

  constructor(username) {
    this.username = username;  // Inicializa el nombre de usuario
    const timeInMilisecs = Date.now();  // Obtiene el tiempo actual en milisegundos
    const date = new Date(timeInMilisecs);  // Convierte el tiempo a un objeto Date
    this.creationDateUser = date.toISOString(); // Guarda la fecha en formato ISO
  }

  // Getter para obtener el nombre de usuario
  get getUsername() {
    return this.username;
  }

  // Getter para obtener la fecha de creación del usuario
  get getCreationDateUser() {
    return this.creationDateUser;
  }
}

// Clase UserConfiguration que almacena la configuración del usuario
class UserConfiguration {
  private directory: string;  // Atributo para almacenar el directorio
  private homeFolder: string; // Atributo para almacenar la carpeta principal

  constructor(directory, homeFolder) {
    this.directory = directory;    // Inicializa el directorio
    this.homeFolder = homeFolder;  // Inicializa la carpeta principal
  }

  // Getter para obtener el directorio
  get getDirectory() {
    return this.directory;
  }

  // Getter para obtener la carpeta principal
  get getHomeFolder() {
    return this.homeFolder;
  }
}

// Interfaz que define las propiedades necesarias para un CompleteUser
interface ICompleteUserProps {
  name: string;       // Nombre de la persona
  lastName: string;   // Apellido de la persona
  username: string;   // Nombre de usuario
  directory: string;  // Directorio del usuario
  homeFolder: string; // Carpeta principal del usuario
}

// Clase CompleteUser que agrupa toda la información del usuario
class CompleteUser {
  user: User;                // Instancia de User
  person: Person;            // Instancia de Person
  userConfiguration: UserConfiguration; // Instancia de UserConfiguration

  constructor({
    name,
    lastName,
    username,
    directory,
    homeFolder,
  }: ICompleteUserProps) {
    // Inicializa las instancias de las clases internas (Person, User, UserConfiguration)
    this.person = new Person(name, lastName);
    this.user = new User(username);
    this.userConfiguration = new UserConfiguration(directory, homeFolder);
    console.log('User created successfully, details:\n', this);  // Imprime el objeto creado
  }

  // Método que clona el objeto actual y devuelve una nueva instancia
  public clone() {
    const props: ICompleteUserProps = {
      name: this.person.getName,                    // Obtiene el nombre
      lastName: this.person.getLastName,             // Obtiene el apellido
      username: this.user.getUsername,               // Obtiene el nombre de usuario
      directory: this.userConfiguration.getDirectory, // Obtiene el directorio
      homeFolder: this.userConfiguration.getHomeFolder, // Obtiene la carpeta principal
    };

    return new CompleteUser(props); // Devuelve un nuevo CompleteUser con las mismas propiedades
  }
}

// Función para crear un objeto original y un clon de ese objeto
const createOriginalObjectAndPrototype = ({
  name,
  lastName,
  username,
  directory,
  homeFolder,
}: ICompleteUserProps) => {
  // Crea el objeto original de tipo CompleteUser
  const originalUser = new CompleteUser({
    name,
    lastName,
    username,
    directory,
    homeFolder,
  });

  // Crea un clon del objeto original usando el método clone()
  const userClone = originalUser.clone();

  // Compara si el objeto original y el clon son el mismo
  console.log(
    originalUser === userClone
      ? 'They are the same'
      : 'Different objects, prototype working'
  );
};

// Llamada a la función para crear un objeto original y un clon
createOriginalObjectAndPrototype({
  name: 'Alvaro',
  lastName: 'Garzon',
  username: 'Alvaro8317',
  directory: 'home',
  homeFolder: 'alvaro8317',
});
