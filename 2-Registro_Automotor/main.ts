import { RegistroAutomotor } from "./RegistroAutomotor";
import { Auto } from "./vehiculo/Auto";
import { Camion } from "./vehiculo/Camion";
import { Moto } from "./vehiculo/Moto";

let registroAutomotor : RegistroAutomotor = new RegistroAutomotor('Registro de Autos Demian');

let auto1 : Auto = new Auto(4, 15, 'Trasera', 'Toyota', '123456');
let moto1 : Moto = new Moto(2, 10, 'Chopera', 'Honda', '123456');
let camion1 : Camion = new Camion('automatica', 200, 'especial', 'Ford', '123456');

//Registro 3 vehiculos
registroAutomotor.agregarVehiculo(auto1);
registroAutomotor.agregarVehiculo(moto1);
registroAutomotor.agregarVehiculo(camion1);

//Listado de todos los vehiculos disponibles
registroAutomotor.listarTodosLosVehiculos();

registroAutomotor.bajaVehiculo(moto1);

//Listado vehiculos luego de dar de baja
registroAutomotor.listarTodosLosVehiculos();

auto1.setMarca('Chevrolet');
registroAutomotor.modificarVehiculo(auto1);

//Listado vehiculos luego de modificar
registroAutomotor.listarTodosLosVehiculos();

