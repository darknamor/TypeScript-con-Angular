function init(target){
    return class extends target{
        nombre = 'nicolas';
        apellido = 'miranda';
        
        sayMyName(){
            return `${this.nombre} ${this.apellido}`;
        }
    }
}
@init
class P{
    constructor(){
        sayMyName(){}
    }
}
//instanciamos 
const p: P=new P();
console.log(p.sayMyName()); //Nicolas Miranda