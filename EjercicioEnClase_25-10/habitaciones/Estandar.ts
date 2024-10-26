import { Habitacion } from "../Habitacion";

export class Estandar extends Habitacion {
    protected precioAdicional: number = 0; 

    constructor(numero: number, precioBase: number, numCamas: number, diasReserva: number){
        super(numero, precioBase, numCamas, diasReserva);
    }

    public calcularCosto(): void{
        let costoTotal: number;

        this.calcularCostoServicios();

        costoTotal = this.getPrecioBase() * this.getDiasReservas(); //Calcula el precio segun la cantidad de dias reservados
        costoTotal += this.precioAdicional; //Le suma el precio adicional segun los servicios contratados

        this.setPrecioBase(costoTotal);
    }

    private calcularCostoServicios(): void{
        if(this.getCantServicios() > 0){
            let costo: number = 0;
    
            this.servicios.forEach(servicio => {
                costo += servicio.getPrecio();
            });
            
            this.precioAdicional = costo;
        } else {
            console.log('No hay servicios contratados.')
        }
    }

    public getPrecioAdicional(): number{
        return this.precioAdicional;
    }
}