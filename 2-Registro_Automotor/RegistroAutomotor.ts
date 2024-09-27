import { Auto } from "./vehiculo/Auto";
import { Camion } from "./vehiculo/Camion";
import { Moto } from "./vehiculo/Moto";

export class RegistroAutomotor{
    private nombreRegistro: string;
    private autos: Auto[] = [];
    private motos: Moto[] = [];
    private camiones: Camion[] = [];

    private vehiculosMap: { [key: string]: (Auto | Moto | Camion)[] } = { //arreglo clave valor
        auto: this.autos,
        moto: this.motos,
        camion: this.camiones
    }

    public constructor(nombre: string){
        this.nombreRegistro = nombre;
    }

    public getNombreRegistro(): string {
        return this.nombreRegistro;
    }

    public setNombreRegistro(nombreRegistro: string): void {
        this.nombreRegistro = nombreRegistro;
    }

    public getAutos(): Auto []{
        let nuevaLista: Auto[];
        nuevaLista = this.autos.map(v => ({...v}) as Auto);
        return nuevaLista;
    }

    public getCamiones(): Camion [] {
        let nuevaLista: Camion[];
        nuevaLista = this.camiones.map(v => ({...v}) as Camion);
        return nuevaLista;
    }

    public getMotos(): Moto [] {
        let nuevaLista: Moto[];
        nuevaLista = this.motos.map(v => ({...v}) as Moto);
        return nuevaLista;
    }

    private obtenerTipoVehiculo(vehiculo: Auto | Moto | Camion): string {
        return vehiculo.getTipoVehiculo();
    }
    
    private buscarVehiculoPorPatente(vehiculos: (Auto | Moto | Camion)[], patente: string): number {
        return vehiculos.findIndex(v => v.getPatente() === patente);
    }
    
    private eliminarVehiculo(vehiculos: (Auto | Moto | Camion)[], index: number): void {
        vehiculos.splice(index, 1);
        console.log('Vehículo dado de baja correctamente.');
    }

    public agregarVehiculo(vehiculo: Auto | Moto | Camion): void {
        let tipoVehiculo: string = this.obtenerTipoVehiculo(vehiculo);
        let vehiculos = this.vehiculosMap[tipoVehiculo];
    
        if (!vehiculos) {
            console.log('Tipo de vehículo no reconocido.');
            return;
        }
    
        let index: number = this.buscarVehiculoPorPatente(vehiculos, vehiculo.getPatente());

        if (index === -1) {
            vehiculos.push(vehiculo); //Modifica tambien el array origina del objeto. Hace referencia a la misma direccion
            console.log(`${tipoVehiculo} agregado correctamente.`);
        } else {
            console.log("El vehículo ya se encuentra registrado.");
        }
    }

    public modificarVehiculo(vehiculo: Auto | Moto | Camion): void {
        let tipoVehiculo: string = this.obtenerTipoVehiculo(vehiculo);
        let vehiculos = this.vehiculosMap[tipoVehiculo];
        
        if (!vehiculos) {
            console.log('Tipo de vehículo no reconocido.');
            return;
        }
    
        let index: number = this.buscarVehiculoPorPatente(vehiculos, vehiculo.getPatente());
       
        if (index !== -1) {
            vehiculos[index] = vehiculo; 
            console.log(`${tipoVehiculo} modificado correctamente.`);
        } else {
            console.log("No se encontro el vehiculo a modificar");
        }
    }
    
    public bajaVehiculo(vehiculo: Auto | Moto | Camion): void {
        let tipoVehiculo: string = this.obtenerTipoVehiculo(vehiculo);
        let vehiculos = this.vehiculosMap[tipoVehiculo];
    
        if (!vehiculos) {
            console.log('Tipo de vehículo no reconocido.');
            return;
        }
    
        let index: number = this.buscarVehiculoPorPatente(vehiculos, vehiculo.getPatente());
    
        if (index !== -1) {
            this.eliminarVehiculo(vehiculos, index);
        } else {
            console.log("No se encontró el vehículo a dar de baja.");
        }
    }

    public listarAutos(): void {
        if (this.autos.length === 0) {
            console.log("No hay autos disponibles.");
        } else {
            console.log("Lista de autos:");
            this.autos.forEach(auto => console.log(auto));
        }
    }
    
    public listarMotos(): void {
        if (this.motos.length === 0) {
            console.log("No hay motos disponibles.");
        } else {
            console.log("Lista de motos:");
            this.motos.forEach(moto => console.log(moto));
        }
    }
    
    public listarCamiones(): void {
        if (this.camiones.length === 0) {
            console.log("No hay camiones disponibles.");
        } else {
            console.log("Lista de camiones:");
            this.camiones.forEach(camion => console.log(camion));
        }
    }
    
    // Función general para listar todos los vehículos
    public listarTodosLosVehiculos(): void {
        console.log("Listando todos los vehículos:");
        this.listarAutos();
        this.listarMotos();
        this.listarCamiones();
    }
    
}