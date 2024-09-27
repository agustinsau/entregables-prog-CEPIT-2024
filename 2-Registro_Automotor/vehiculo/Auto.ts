export class Auto{
    private cantPuertas: number;
    private capacidadBaul: number;
    private traccion: string;
    private marca: string;
    private tipoV: string;
    private patente: string;
    
    public constructor(puertas: number, baul: number, traccion: string, marca: string, patente: string){
        this.cantPuertas = puertas;
        this.capacidadBaul = baul;
        this.traccion = traccion;
        this.marca = marca;
        this.tipoV = 'auto';
        this.patente = patente;
    }

    public getPatente(): string{
        return this.patente;
    }

    public getTipoVehiculo(): string {
        return this.tipoV;
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

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }






}