// const peliculas = {pelicula1:"elpadrino", pelicula2:"elgladiador"};
// console.log(peliculas.pelicula1)

class Persona{
    constructor(nombre) {
        this.nombre = nombre;
    
    }
    static especie ="humano";
    saludar=()=>{
        console.log(`Hola, mi nombre es ${this.nombre}`);
    };
    getEspecie =()=>{
        console.log(`Aunque no lo creas, soy un ${Persona.especie},como tu`);
    };
}

let persona1 = new Persona("Leandro");
let persona2 = new Persona("Fer");
let persona3 = new Persona("Gabriel");

persona1.saludar();
persona2.saludar();
persona3.saludar();

persona1.getEspecie();
persona2.getEspecie();
persona3.getEspecie();

