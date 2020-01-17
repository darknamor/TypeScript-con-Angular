class Transporte {
  private velocidad: number;
  private formatDeMovilidad: string;

  constructor(velocidad: number, formaDeMovilidad: string) {
    this.velocidad = velocidad;
    this.formatDeMovilidad = formaDeMovilidad;
  }
  getVelocidad() {
    return this.velocidad;
  }
  setVelocidad(velocidad: number) {
    this.velocidad = velocidad;
  }
  getFormatDeMovilidad() {
    return this.formatDeMovilidad;
  }
  setFormatDeMovilidad(formatDeMovilidad: string) {
    this.formatDeMovilidad = formatDeMovilidad;
  }
}

const transporte: Transporte = new Transporte(20, "suelo");

class Auto extends Transporte {
  private cantidadDePuertas: number;

  constructor(
    velocidad: number,
    formaDeMovilidad: string,
    cantidadDePuertas: number
  ) {
    super(velocidad, formaDeMovilidad);
    this.cantidadDePuertas = cantidadDePuertas;
  }
  //redefinimos que cuando sea atuo la velocidad aumenta en 10
  getVelocidad() {
    return super.getVelocidad() + 10;
  }
  getCantidadDePuertas() {
    return this.cantidadDePuertas;
  }
  setCantidadDePuertas(cantidadDePuertas: number) {
    this.cantidadDePuertas = cantidadDePuertas;
  }
}
const auto: Auto = new Auto(20, "suelo", 4);
