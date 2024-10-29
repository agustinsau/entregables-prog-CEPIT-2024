import{Lavarropa} from "./Lavarropas";
import { Microondas } from "./Microondas";
import { Heladera } from "./Heladera";

const lavarropa: Lavarropa = new Lavarropa('lavarropa', 'LG', 'T9444');

const heladera: Heladera = new Heladera('churrasquera', 'samsung', 'Z9000', 1000, 2, 4);

const microondas: Microondas = new Microondas("cocina", "Atma", "LeGrand");

//  encender o apagar

// lavarropa.encender(); 
// lavarropa.apagar();

// microondas.encender();
// microondas.apagar();

// heladera.encender();
// heladera.apagar();

// // metodos lavarropa

// lavarropa.lavarRopa();
// lavarropa.centrifugar();

// metodos microondas

//microondas.tiempo(30)
//microondas.elegirTemperatura(80)

// metodos heladera

heladera.inicializar();
heladera.hacerHielo();
heladera.actualizar();