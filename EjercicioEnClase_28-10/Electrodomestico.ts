export abstract class Electrodomestico {
    protected modelo: string;
    protected marca: string;
    protected estaEncendido: boolean;
    protected nombre: string;
    protected versionSoftware: string = '1.0';
    protected actualizado: boolean = false;
    protected internet: boolean;

    constructor(nombre: string, marca: string, modelo: string, internet: boolean){
        this.nombre = nombre;
        this.modelo = modelo;
        this.marca = marca;
        this.estaEncendido = false;
        this.internet = internet;
    }

    public abstract inicializar(): void;

    public actualizar(){
        if(!this.actualizado && this.internet){
            console.log('Actualizando sistema operativo...');

            setTimeout(() => {
                console.log('Sistema operativo actualizado.');
                this.actualizado = true;
            }, 5000);
        }
    }

    public encender(): void{
        if(!this.isEstaEncendido()){
            this.setEstaEncendido(true);
            console.log(`${this.nombre} se ha encendido.`);
            this.inicializar();
        } else {
            console.log(`${this.nombre} ya se encuentra prendida.`);
        }
    }

    public apagar(): void{
        if(this.isEstaEncendido()){
            this.setEstaEncendido(false);
            console.log(`${this.nombre} se ha apagado`);
        } else {
            console.log(`${this.nombre} ya se encuentra apagado.`);
        }
    }
            

    //Getter and setters

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public isEstaEncendido(): boolean {
        return this.estaEncendido;
    }

    public setEstaEncendido(estaEncendido: boolean): void {
        this.estaEncendido = estaEncendido;
    }

}