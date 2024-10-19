import { Personaje } from "../Personaje";

export class MrSatan extends Personaje {
    private fuerzaOriginal: number = 0;
  
    constructor(nombre: string) {
        super(nombre);
        this.puntosVida = 50;
        this.fuerza = 10;
        this.setFuerzaOriginal(this.fuerza);

        //Establecemos el nivel máximo y la xp inicial del Mago
        this.nivelMaximo = 3; 
        this.xpSigNivel = 120; 

        //Definir las habilidades del Mago
        this.habilidades = [
            "Chancla Deportiva"
        ];
    }
  
    atacar(): void {
        if (this.dañoElemental) {
            console.log(`${this.nombre} cree comprender como el danio elemental funciona...`);
            this.realizarAtaqueElemental();
        } else {
            console.log(`${this.nombre} ataca con ${this.fuerza} de fuerza. Ha quedado exhausto`);
        }

        this.ganarXP(60);
    }
  
    defender(): void {
        console.log(`${this.nombre} se protege. Casi no sobrevive al encuentro.`);
    }
  
    evolucionar(): void {
        console.log(`${this.nombre} no ha podido evolucionar...`);
        this.aprenderHabilidad(); // Desbloquear nueva habilidad
        console.log(`${this.nombre} tiene la misma fuerza, ${this.fuerza} y los mismos puntos de vida: ${this.puntosVida}.`);
    }
  
    revertirFuerza(): void {
        this.fuerza = this.getFuerzaOriginal();
        console.log(`${this.nombre} ha vuelto a su fuerza de ${this.fuerza}.`);
    }


    //GETERS AND SETTERS

    public getFuerzaOriginal(): number {
        return this.fuerzaOriginal;
    }

    public setFuerzaOriginal(fuerzaOriginal: number): void {
        this.fuerzaOriginal = fuerzaOriginal;
    }
}