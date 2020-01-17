interface Interface1 {
  prop1: number;
}
interface Interface2 {
  prop2: number;
  prop3: number;
}
interface Interface3 {
  prop2: number;
}
//la interseccion une las interfaces y utiliza todas las propiedades
//independientemente sean iguales
type InterfaceMix = Interface1 & Interface2 & Interface3;

const interfaceMix: InterfaceMix = {
  prop1: 2,
  prop2: 2,
  prop3: 3
};
