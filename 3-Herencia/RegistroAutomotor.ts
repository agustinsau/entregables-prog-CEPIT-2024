import { Vehiculo } from "./Vehiculo";

export class RegistroAutomotor{
    private nombreRegistro: string;
    private listaVehiculos: Vehiculo [];

    public constructor(nombre: string){
        this.nombreRegistro = nombre;
        this.listaVehiculos = [];
    }

    public getNombreRegistro(): string {
        return this.nombreRegistro;
    }

    public setNombreRegistro(nombreRegistro: string): void {
        this.nombreRegistro = nombreRegistro;
    }

    private getAutos(): Vehiculo []{
        let listaAutos = this.listaVehiculos.filter(vehiculo => vehiculo.getTipoVehiculo() == 'auto');
        return listaAutos;
    }

    private getCamiones(): Vehiculo [] {
        let listaCamiones = this.listaVehiculos.filter(vehiculo => vehiculo.getTipoVehiculo() == 'camion');
        return listaCamiones;
    }

    private getMotos(): Vehiculo [] {
        let listaMotos = this.listaVehiculos.filter(vehiculo => vehiculo.getTipoVehiculo() == 'moto');
        return listaMotos;
    }
    
    private buscarPorPatente(patente: string, tipoV: string): Vehiculo[] {
        let nuevaLista: Vehiculo[] = this.listaVehiculos.filter(vehiculo => vehiculo.getPatente() === patente && vehiculo.getTipoVehiculo() === tipoV);
        return nuevaLista;
    }

    public agregarVehiculo(vehiculo: Vehiculo): void { 
        let patente: string = vehiculo.getPatente();
        let tipoV = vehiculo.getTipoVehiculo();
        let existe: Vehiculo [] = this.buscarPorPatente(patente, tipoV);

        console.log(existe)

        if (existe.length > 0) {
            console.log(`El vehículo con patente ${patente} ya está registrado.`);
        } else {
            
            this.listaVehiculos.push(vehiculo); 
            console.log(`${tipoV} agregado/a correctamente.`);
        }
    }

    
    public modificarVehiculo(vehiculo: Vehiculo): void {
        let patente: string = vehiculo.getPatente();
        let tipoV = vehiculo.getTipoVehiculo();
        let index: number = this.listaVehiculos.findIndex(v => v.getPatente() == patente && v.getTipoVehiculo() == tipoV);

        console.log(index)

        if (index == -1) {
            console.log(`El vehículo con patente ${patente} no se encuentra registrado.`);
        } else { 
            this.listaVehiculos[index] = vehiculo; //reemplazo el vehiculo a modificar en la posicion encontrada
            console.log(`${tipoV} modificado/a correctamente.`);
        }
    }


    public bajaVehiculo(vehiculo: Vehiculo): void {
        let patente: string = vehiculo.getPatente();
        let tipoV = vehiculo.getTipoVehiculo();
        let index: number = this.listaVehiculos.findIndex(v => v.getPatente() == patente && v.getTipoVehiculo() == tipoV);

        console.log(index)

        if (index == -1) {
            console.log(`El vehículo con patente ${patente} no se encuentra registrado.`);
        } else {  
            this.listaVehiculos.splice(index, 1); 
            console.log(`${tipoV} eliminado/a correctamente.`);
        }
    }


    // Función general para listar todos los vehículos
    public listarTodosLosVehiculos(): void {
        let lista : Vehiculo [] = [];

        if (this.listaVehiculos.length === 0) {
            console.log("No hay vehiculos disponibles.");
        } else {
            console.log("Listado de todos los vehículos:");
            this.imprimir(this.getAutos(), 'Auto');
            this.imprimir(this.getCamiones(), 'Camion');
            this.imprimir(this.getMotos(), 'Moto'); 
        }
    }

    private imprimir(lista: Vehiculo[], tipo: string): void{
        if(lista.length == 0){
            console.log(`No hay vehiculos de tipo ${tipo} disponibles.`);
        } else {
            lista.forEach(v => console.log(v)); 
        } 
    }


    
}