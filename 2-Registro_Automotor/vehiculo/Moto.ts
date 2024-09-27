export class Moto{
    private cilindraje: number;
    private capacidadNafta: number;
    private tipo: string;
    private marca: string;
    private tipoV: string;
    private patente: string;
    
    public constructor(cilindraje: number, capNafta: number, tipo: string, marca: string, patente: string){
        this.cilindraje = cilindraje;
        this.capacidadNafta = capNafta;
        this.tipo = tipo;
        this.marca = marca;
        this.tipoV = 'moto';
        this.patente = patente;
    }

    public getPatente(): string{
        return this.patente;
    }

    public getTipoVehiculo(): string {
        return this.tipoV;
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

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }



    
    


}