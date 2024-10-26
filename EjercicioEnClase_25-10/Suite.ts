import { Servicio } from "./clases/Servicio";
import { Habitacion } from "./Habitacion";

export class Suite extends Habitacion {
    private cantBanioPrivado: number;
    private cantAmbientes: number;
    private cable: Servicio = new Servicio('Cable', 'Cable Television', 0);
    private internet: Servicio = new Servicio('Internet', 'Servicio Internet', 0);

    constructor(numero: number, precioBase: number, numCamas: number, diasReserva: number, cantBanioPrivado: number, cantAmbientes: number){
        super(numero, precioBase, numCamas, diasReserva);
        this.cantAmbientes = cantAmbientes;
        this.cantBanioPrivado = cantBanioPrivado;
        this.agregarServicio(this.cable);
        this.agregarServicio(this.internet);
    }

    public calcularCosto(){
        let costoTotal: number;

        costoTotal = this.getPrecioBase() * this.getDiasReservas();

        console.log('Las Suites no tienen costo adicional en los Servicios.');

        return costoTotal;
    }



}