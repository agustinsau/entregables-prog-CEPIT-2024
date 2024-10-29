import { Electrodomestico } from "./Electrodomestico";

export class Heladera extends Electrodomestico {
    private capacidad: number;
    private puertas: number;
    private temperatura: number;
    private tieneAgua: boolean = false;


    constructor(nombre: string,marca: string, modelo: string, capacidad: number, puertas: number, temperatura: number){
        super(nombre, marca, modelo, true);
        this.capacidad = capacidad;
        this.puertas = puertas;
        this.temperatura = temperatura;
    }

    public inicializar(): void {
        this.llenarAgua();
        this.chequearTemp();

    }

    private llenarAgua(): void {
        if(!this.tieneAgua){
            console.log('Se ha llenado la heladera de agua.');
            this.tieneAgua = true;
        } else {
            console.log('La heladera ya está llena de agua.');
        }
    }

    public hacerHielo(){
        if(!this.tieneAgua){
            this.llenarAgua();   
        }
        console.log("La heladera ha empezado a hacer hielo."); 
    }

    public chequearTemp(){
        if(this.temperatura > 15){
            console.log('La temperatura de la heladera es alta.');
        }
    }
}