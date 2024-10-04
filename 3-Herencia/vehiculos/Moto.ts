import { Vehiculo } from "../Vehiculo";

export class Moto extends Vehiculo{
    private cilindraje: number;
    private capacidadNafta: number;
    private tipo: string;
    
    
    public constructor(cilindraje: number, capNafta: number, tipo: string, marca: string, patente: string){
        super(marca, patente);
        this.cilindraje = cilindraje;
        this.capacidadNafta = capNafta;
        this.tipo = tipo;
        this.tipoV = 'moto';
    }

    public getCilindraje(): number {
        return this.cilindraje;
    }

    public setCilindraje(cilindraje: number): void {
        this.cilindraje = cilindraje;
    }

    public getCapacidadNafta(): number {
        return this.capacidadNafta;
    }

    public setCapacidadNafta(capacidadNafta: number): void {
        this.capacidadNafta = capacidadNafta;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

   



    
    


}