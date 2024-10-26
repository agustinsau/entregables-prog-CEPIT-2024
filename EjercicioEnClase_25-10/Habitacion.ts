import { Servicio } from "./clases/Servicio";

export abstract class Habitacion {
    protected numero: number;
    protected disponible: boolean = true;
    protected precioBase: number = 0; 
    protected numCamas: number;
    protected diasReserva: number;
    protected servicios: Servicio [] = [];

    constructor(numero: number, precioBase: number, numCamas: number, diasReserva: number){
        this.numero = numero;
        this.precioBase = precioBase;
        this.numCamas = numCamas;
        this.diasReserva = diasReserva;
    }

    public agregarServicio(serv: Servicio): void{
        this.servicios.push(serv);
    }

    abstract calcularCosto(): void;

    public reservarHabitacion(): void{
        if (this.isDisponible()) {console.log("Se ha agregado un servicio a la habitacion"); 
console.log("Se ha reservado la habitacion con exito"); 
console.log("Se ha calculado el costo de la habitacion");
            this.disponible = false;
            console.log("La habitacion esta disponible y ha sido reservada.");

        }else{
            console.log("La habitacion ya se encuentra reservada");
        }
    }

    public getCantServicios(){
        return this.servicios.length;
    }

    //Getter And Setters

    public getDiasReservas(): number {
        return this.diasReserva;
    }

    public setDiasReservas(dias: number): void {
        this.diasReserva = dias;
    }

    public getNumero(): number {
        return this.numero;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public isDisponible(): boolean {
        return this.disponible;
    }

    public setEstado(estado: boolean): void {
        this.disponible = estado;
    }

    public getPrecioBase(): number {
        return this.precioBase;
    }

    public setPrecioBase(precioBase: number): void {
        this.precioBase = precioBase;
    }

    public getNumCamas(): number {
        return this.numCamas;
    }

    public setNumCamas(camas: number): void {
        this.numCamas = camas;
    }


}