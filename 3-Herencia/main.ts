import { RegistroAutomotor } from "./RegistroAutomotor";
import { Auto } from "./vehiculos/Auto";
import { Camion } from "./vehiculos/Camion";
import { Moto } from "./vehiculos/Moto";

let registroAutomotor : RegistroAutomotor = new RegistroAutomotor('Registro de Autos Demian');

//metodo interno en registro automotor para crear el objeto? crear vehiculo solo con parametros?
let auto1 : Auto = new Auto(4, 165, 'Traseraasda', 'Toyakota', '123456');
let moto1 : Moto = new Moto(2, 10, 'Chopera', 'Honda', '123456');
let camion1 : Camion = new Camion('automatica', 200, 'especial', 'Ford', '123456');

//Registro 3 vehiculos
registroAutomotor.agregarVehiculo(auto1);
registroAutomotor.agregarVehiculo(moto1);
registroAutomotor.agregarVehiculo(camion1);

//Listado de todos los vehiculos disponibles
registroAutomotor.listarTodosLosVehiculos();

let auto2 : Auto = new Auto(4, 10, 'Trasera', 'Toyota', '123456');
registroAutomotor.modificarVehiculo(auto2);

//Listado vehiculos luego modificar un vehiculo
registroAutomotor.listarTodosLosVehiculos();

//Dar de baja un vehiculo
registroAutomotor.bajaVehiculo(auto2);

//Listado vehiculos luego de dar de baja
registroAutomotor.listarTodosLosVehiculos();


