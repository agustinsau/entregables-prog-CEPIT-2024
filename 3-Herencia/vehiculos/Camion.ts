import { Vehiculo } from "../Vehiculo";

export class Camion extends Vehiculo{
    
    private tipoCaja: string;
    private capacidadCarga: number;
    private tipoLicencia: string;
    
    public constructor(tipoCaja: string, capacidadCarga: number, tipoL: string, marca: string, patente: string){
        super(marca, patente);
        this.tipoCaja = tipoCaja;
        this.capacidadCarga = capacidadCarga;
        this.tipoLicencia = tipoL;
        this.tipoV = 'camion';
        
    }
    
    public getTipoCaja(): string {
        return this.tipoCaja;
    }

    public setTipoCaja(tipoCaja: string): void {
        this.tipoCaja = tipoCaja;
    }

    public getCapacidadCarga(): number {
        return this.capacidadCarga;
    }

    public setCapacidadCarga(capacidadCarga: number): void {
        this.capacidadCarga = capacidadCarga;
    }

    public getTipoLicencia(): string {
        return this.tipoLicencia;
    }

    public setTipoLicencia(tipoLicencia: string): void {
        this.tipoLicencia = tipoLicencia;
    }

}