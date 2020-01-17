class Persona{
    private edad:number;
    private altura:number;
    private rut:string;

    constructor(edad:number,altura:number,rut:string){
        this.altura=altura;
        this.edad=edad;
        this.rut=rut;
    }
}

class Alumno extends Persona{
    private matricula:string;

    constructor(edad:number,altura:number,rut:string,matricula:string){
        super(edad,altura,rut);
        this.matricula=matricula;
    }
}

let persona:Persona=new Persona(25,1.73,'17946099-8');
let alumno:Alumno=new Alumno(27,173,'17946099-8','123');

//shape es la forma que uno representa al otro
persona=alumno;