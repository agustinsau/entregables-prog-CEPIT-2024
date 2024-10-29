import { Electrodomestico } from "./Electrodomestico";

export class Lavarropa extends Electrodomestico {
    private terminoLavado:boolean=true;

    constructor(nombre: string,marca: string, modelo: string){
        super(nombre, marca, modelo, false);
    }
    public inicializar(): void {
        if(!this.terminoLavado){
            this.lavarRopa();
        }
        this.setTerminoLavado(false);
    }
    public lavarRopa(){
        console.log("El lavarropas ha empezado a lavar");
    }

    public centrifugar(){
        if(this.terminoLavado){
            console.log("El lavarropas ha empezado a centrifugar")
        }
    }

    public getTerminoLavado():boolean{
        return this.terminoLavado;
    }

    public setTerminoLavado(terminoLavado:boolean):void{
        this.terminoLavado = terminoLavado;
    }
}