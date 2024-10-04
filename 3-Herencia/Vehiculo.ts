export class Vehiculo{
    protected marca: string;
    protected tipoV: string;
    protected patente: string;

    constructor(marca: string, patente: string){
        this.marca = marca;
        this.patente = patente;
        this.tipoV = '';
    }

    public getPatente(): string{
        return this.patente;
    }

    public getTipoVehiculo(): string {
        return this.tipoV;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

}