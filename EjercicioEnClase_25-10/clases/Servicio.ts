export class Servicio {
    private nombre: string;
    private descripcion: string;
    private precio: number;

    constructor(nombre: string, descripcion: string, precio: number){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }


    
}