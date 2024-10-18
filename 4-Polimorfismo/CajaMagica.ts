import { Personaje } from "./Personaje";

export class CajaMagica {
    private daniosElementales: { elemento: string, bonusFuerza: number } [];

    constructor() {
        this.daniosElementales = [
            { elemento: "Fuego", bonusFuerza: 15 },
            { elemento: "Hielo", bonusFuerza: 8 },
            { elemento: "Eléctrico", bonusFuerza: 12 },
            { elemento: "Veneno", bonusFuerza: 7 }
        ];
    }

    abrir(personaje: Personaje): void {
        let randomNumber: number = Math.floor(Math.random() * this.daniosElementales.length); //Genero un numero aleatorio para elegir el danio elemental
        let { elemento, bonusFuerza } = this.daniosElementales[randomNumber];

        console.log(`${personaje.getNombre()} ha encontrado una caja mágica y ha obtenido daño elemental de ${elemento} con un bonus de fuerza de ${bonusFuerza}.`);
        
        personaje.aplicarDañoElemental(elemento, bonusFuerza);
    }
}