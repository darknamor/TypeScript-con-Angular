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

const transporte: Transporte = new Transporte(20,'suelo');

class Auto extends Transporte{
    
}