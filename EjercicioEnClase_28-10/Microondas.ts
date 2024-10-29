import { Electrodomestico } from "./Electrodomestico";

export class Microondas extends Electrodomestico {
    private tempActual: number = 0;

    constructor(nombre: string,marca: string, modelo: string){
        super(nombre, marca, modelo, true);
    }
    
    inicializar():void{
        console.log(`${this.nombre} está listo para comenzar la cocción`)
    }
    
    public tiempo(tiempo: number){
        console.log(`El microondas para en ${tiempo} segundos`) //nose que otra forma hay para manejar el tiempo si se quiere mas especifico
    }

    public elegirTemperatura(temperatura: number) {
        this.tempActual = temperatura;
        console.log(`El microondas se calienta a ${temperatura} grados`)
    }

    public iniciarCocción(tiempo: number, temperatura: number){

    }
}