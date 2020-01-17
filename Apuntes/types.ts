let a: string = 'hola';
a = 'Holas'
a= 2; //error alertado por definir el tipo string

let a2="gato"; //no errores ya que no se definio un tipo para esta variable
a2 = 'holas';
a2=2;

let b: number =10;
b=a; //error alertado por definir el tipo number
b=20;
b=10+10;
const num1=10;
const num2=20;
b=num1+num2;

//en typescript
function suma(num:number, num2:number):number{
    return num1+num2;
}
suma(1,'2'); //error alertado
//javascript vanilla
function sumaJSV(num1,num2){
    return num1+num2;
}
sumaJSV(1,'2'); //error

//TypeKeyword
type dni = string; //definimos el tipo dni
let dniNumber:dni = 2123; //error ya que el tipo estaba predefinido como string
let dniNumber2:dni ="134";
