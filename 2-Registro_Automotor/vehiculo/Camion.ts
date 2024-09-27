export class Camion{
    
    private tipoCaja: string;
    private capacidadCarga: number;
    private tipoLicencia: string;
    private marca: string;
    private tipoV: string;
    private patente: string;
    
    public constructor(tipoCaja: string, capacidadCarga: number, tipoL: string, marca: string, patente: string){
        this.tipoCaja = tipoCaja;
        this.capacidadCarga = capacidadCarga;
        this.tipoLicencia = tipoL;
        this.marca = marca;
        this.tipoV = 'camion';
        this.patente = patente;
    }

    public getPatente(): string{
        return this.patente;
    }

    public getTipoVehiculo(): string {
        return this.tipoV;
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

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }
    
    
    
    
    
}