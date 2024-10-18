import { CajaMagica } from "./CajaMagica";
import { Guerrero } from "./clases/Guerrero";
import { Mago } from "./clases/Mago";

let guerrero = new Guerrero('Dave el Barvaro');
let mago = new Mago("Merlín");
let cajaMagica = new CajaMagica();

//El Guerrero ataca
guerrero.atacar();

//El Guerrero encuentra una caja mágica
cajaMagica.abrir(guerrero);

//El Guerrero ataca con danio elemental
guerrero.atacar();

//El guerrero ataca hasta evolucionar
for (let i = 0; i < 5; i++) {
    guerrero.atacar();
}

//El mago ataca
mago.atacar();

//El mago encuentra una caja mágica
cajaMagica.abrir(mago);

//El mago ataca con danio elemental
mago.atacar();

//El mago ataca hasta evolucionar
for (let i = 0; i < 5; i++) {
    mago.atacar();
}