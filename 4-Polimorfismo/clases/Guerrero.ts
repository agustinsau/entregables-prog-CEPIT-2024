import { Personaje } from "../Personaje";

export class Guerrero extends Personaje {
    private fuerzaOriginal: number = 0;

    public constructor(nombre: String){
        super(nombre);
        this.puntosVida = 200;
        this.fuerza = 50;
        this.setFuerzaOriginal(this.fuerza);
        
        //Nivel máximo de clase y XP necesaria para subir de nivel del Guerrero
        this.nivelMaximo = 10; 
        this.xpSigNivel = 120; 

        // Definir las habilidades del Guerrero, se desbloquean con la evolución
        this.habilidades = [
            "Golpe aplastante",
            "Corte doble",
            "Grito de guerra",
            "Ataque frenético"
        ];
    }

    atacar(): void {
        if (this.dañoElemental) {
            this.realizarAtaqueElemental();
        } else {
            console.log(`${this.nombre} está atacando con una fuerza de ${this.fuerza}.`);
        }

        this.ganarXP(40);
    }
    
    defender(): void {
        console.log(`${this.nombre} está bloqueando con su escudo.`);
    }

    evolucionar(): void {
        console.log(`${this.nombre} ha evolucionado a una versión más fuerte.`);
        this.fuerza += 20;
        this.puntosVida += 30;
        this.fuerzaOriginal = this.fuerza;
        this.aprenderHabilidad(); // Desbloquea nueva habilidad 

        console.log(`${this.nombre} ahora tiene ${this.fuerza} de fuerza y ${this.puntosVida} puntos de vida.`);
    }
    
    revertirFuerza(): void {
        this.fuerza = this.fuerzaOriginal;
        console.log(`${this.nombre} ha vuelto a su fuerza normal de ${this.fuerza}.`);
    }


    //GETERS AND SETTERS

    public getFuerzaOriginal(): number {
        return this.fuerzaOriginal;
    }

    public setFuerzaOriginal(fuerzaOriginal: number): void {
        this.fuerzaOriginal = fuerzaOriginal;
    }


}