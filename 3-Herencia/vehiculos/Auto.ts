import { Vehiculo } from "../Vehiculo";

export class Auto extends Vehiculo{
    private cantPuertas: number;
    private capacidadBaul: number;
    private traccion: string;
    
    public constructor(puertas: number, baul: number, traccion: string, marca: string, patente: string){
        super(marca, patente);
        this.cantPuertas = puertas;
        this.capacidadBaul = baul;
        this.traccion = traccion;
        this.tipoV = 'auto';
    }
    
    public getCantPuertas(): number {
        return this.cantPuertas;
    }

    public setCantPuertas(cantPuertas: number): void {
        this.cantPuertas = cantPuertas;
    }

    public getCapacidadBaul(): number {
        return this.capacidadBaul;
    }

    public setCapacidadBaul(capacidadBaul: number): void {
        this.capacidadBaul = capacidadBaul;
    }

    public getTraccion(): string {
        return this.traccion;
    }

    public setTraccion(traccion: string): void {
        this.traccion = traccion;
    }

    






}