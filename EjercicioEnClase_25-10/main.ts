import { Servicio } from "./clases/Servicio";
import { Estandar } from "./habitaciones/Estandar";
import { Suite } from "./Suite";

//Servicios

let servicio1 = new Servicio('Servicio al Cuarto', 'Comida y Vino', 2500);
let servicio2 = new Servicio('Pileta', 'Pileta climatizada', 2500);
let servicio3 = new Servicio('Spa', 'Servicio de masajes', 2500);

//Habitaciones

let habiEstandar = new Estandar(1, 38000, 1, 7);
let habiEstandar2 = new Estandar(2, 45000, 2, 5);

let habiSuite = new Suite(3, 100000, 2, 3, 2, 14);
let habiSuite2 = new Suite(4, 150000, 3, 4, 2, 3);

//Reserva
habiEstandar.reservarHabitacion();
habiEstandar2.reservarHabitacion();

habiSuite.reservarHabitacion();
habiSuite2.reservarHabitacion();

//Contratar Servicios
habiEstandar.agregarServicio(servicio1);
habiEstandar.agregarServicio(servicio2);

//Calculo Costos
console.log('Costo total solo de los servicios: ' + habiEstandar.getPrecioAdicional());
console.log('Costo total de la estadia: ' + habiEstandar.getPrecioBase());

