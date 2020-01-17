type SumaParameter = string | number;
type SumaReturnType = number | string;
function Suma(num1: SumaParameter, num2: SumaParameter): SumaReturnType {
  return String(num1) + num2;
}

interface Interface1 {
  prop1: number;
}
interface Interface2 {
  prop2: number;
}
type interfaceMix = Interface1 | Interface2;

const interfaceMix: interfaceMix = {
  prop1: 2,
  prop2: 2
};
