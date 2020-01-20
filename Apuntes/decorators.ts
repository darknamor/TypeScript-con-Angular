//key referencia a la logica extendida
function log(target, key) {
  console.log(key + "se ha llamado");
}
class Persona {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  @log
  sayMyName() {
    //return this.name;
    console.log(this.name);
  }
}

const persona: Persona = new Persona("Nicolas");
persona.sayMyName(); // Nicolas
