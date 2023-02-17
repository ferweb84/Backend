class Contador{
    constructor(nombre){
        this.nombre = nombre;
        this.contadorIndividual=0;
    }
    static contadorGlobal = 0;
    
    getResponsable =()=>{
        return this.nombre;
    };

    contar =()=>{
        this.contadorIndividual++;
        Contador.contadorGlobal++;
    };
    
    getContadorIndividual =()=>{
        return this.contadorIndividual;
    };

    getContadorGlobal = ()=>{
        return Contador.contadorGlobal;
    };

}
//Pruebas: puede ser asi
// let contador1 =new Contador("Jose Maria");
// let contador2 =new Contador("Lucas");

// contador1.contar();
// contador1.contar();
// console.log (contador1.getContadorIndividual());

// contador2.contar();
// console.log (contador2.getContadorIndividual());

// console.log (contador1.getContadorGlobal());

// o asi mas prolijo y entendible 
let contador1 =new Contador("Jose Maria");
let contador2 =new Contador("Lucas");

contador1.contar();
contador1.contar();
console.log (`contador1: ${contador1.getContadorIndividual()}`);

contador2.contar();
console.log (`contador2: ${contador2.getContadorIndividual()}`);

console.log (`contadorGlobal: ${contador1.getContadorGlobal()}`);