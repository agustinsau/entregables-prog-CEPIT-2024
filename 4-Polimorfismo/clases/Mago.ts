import { Personaje } from "../Personaje";

export class Mago extends Personaje {
    private fuerzaOriginal: number = 0;
  
    constructor(nombre: string) {
        super(nombre);
        this.puntosVida = 80;
        this.fuerza = 30;
        this.setFuerzaOriginal(this.fuerza);

        // Establecemos el nivel máximo y la xp inicial del Mago
        this.nivelMaximo = 15; // Nivel máximo del Mago
        this.xpSigNivel = 80; // XP inicial para subir de nivel del Mago

        // Definir las habilidades del Mago
        this.habilidades = [
        "Bola de fuego",
        "Rayo de hielo",
        "Escudo mágico",
        "Tormenta eléctrica"
        ];
    }
  
    atacar(): void {
        if (this.dañoElemental) {
            this.realizarAtaqueElemental();
        } else {
            console.log(`${this.nombre} lanza un hechizo con una fuerza de ${this.fuerza}.`);
        }

        this.ganarXP(25);
    }
  
    defender(): void {
        console.log(`${this.nombre} se protege con un escudo mágico.`);
    }
  
    evolucionar(): void {
        console.log(`${this.nombre} ha evolucionado y mejorado su poder mágico.`);
        this.fuerza += 15;
        this.puntosVida += 10;
        this.fuerzaOriginal = this.fuerza;
        this.aprenderHabilidad(); // Desbloquear nueva habilidad
        console.log(`${this.nombre} ahora tiene ${this.fuerza} de fuerza mágica y ${this.puntosVida} puntos de vida.`);
    }
  
    revertirFuerza(): void {
        this.fuerza = this.fuerzaOriginal;
        console.log(`${this.nombre} ha vuelto a su fuerza mágica normal de ${this.fuerza}.`);
    }


    //GETERS AND SETTERS

    public getFuerzaOriginal(): number {
        return this.fuerzaOriginal;
    }

    public setFuerzaOriginal(fuerzaOriginal: number): void {
        this.fuerzaOriginal = fuerzaOriginal;
    }
}