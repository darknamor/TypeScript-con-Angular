type RUT = number;
interface Persona {
  altura?: number; //el sino ? indica que este atributo es opcional
  edad: number;
  nombre: string;
  apellido: string;
  rut: RUT;
}
const persona: Persona = {
  edad: 27,
  nombre: "Nicolas",
  apellido: "Miranda",
  rut: 17946099
};
