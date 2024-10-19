import { CajaMagica } from "./CajaMagica";
import { Guerrero } from "./clases/Guerrero";
import { Mago } from "./clases/Mago";
import { MrSatan } from "./clases/MrSatan";

let guerrero = new Guerrero('Dave el Barbaro');
let mago = new Mago("Merlín");
let mrSatan = new MrSatan("Satan");
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

//El mrSatan ataca
mrSatan.atacar();

//El mrSatan encuentra una caja mágica
cajaMagica.abrir(mrSatan);

//El mrSatan ataca con danio elemental
mrSatan.atacar();

//El mrSatan ataca hasta evolucionar
for (let i = 0; i < 5; i++) {
    mrSatan.atacar();
}