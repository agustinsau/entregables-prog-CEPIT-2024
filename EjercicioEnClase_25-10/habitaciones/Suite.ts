import { Habitacion } from "../Habitacion";

export class Suite extends Habitacion {
    private cantBanioPrivado: number;
    private cantAmbientes: number;

    constructor(numero: number, precioBase: number, numCamas: number, diasReserva: number, cantBanioPrivado: number, cantAmbientes: number){
        super(numero, precioBase, numCamas, diasReserva);
        this.cantAmbientes = cantAmbientes;
        this.cantBanioPrivado = cantBanioPrivado;
    }

    public calcularCosto(){
        let costoTotal: number;

        costoTotal = this.getPrecioBase() * this.getDiasReservas();

        return costoTotal;
    }

    public getCostoFinal():void{
        console.log(this.calcularCosto());
    }

}