export abstract class Personaje {
    //Constantes
    private readonly EVOLUCION_NIVEL: number = 3; //El personaje evolucionara tras esta cantidad de niveles obtenidos
    //private readonly XP_NECESARIA: number = 50 //XP base necesaria para subir de nivel
    private readonly FACTOR_XP: number = 10; //Factor experiencia adicional cada vez que se pasa un nivel

    //PJ Stats
    protected nombre: String;
    protected puntosVida: number = 0;
    protected fuerza: number = 0;

    //Nivel y Experiencia
    protected nivel: number = 1;
    protected nivelMaximo: number = 0; 
    protected xpActual: number = 0;
    protected xpSigNivel: number = 0;

    //Ataques y habilidades
    protected ataques: string[];
    protected habilidadesDesbloqueadas: string[];
    protected habilidades: string[]; // Habilidades predefinidas, que se desbloquearán con la evolución
    protected dañoElemental: string | null = null;
    protected ataquesElementalesRestantes: number = 0;
    
    public constructor(nombre: String){
        this.nombre = nombre;
        this.ataques = ["Ataque básico"];
        this.habilidadesDesbloqueadas = []; //Habilidades que se desbloquean al evolucionar al personaje
        this.habilidades = []; //Definido en las subclases segun cada personaje
    }

    abstract atacar(): void;

    abstract defender(): void;


    //Experiencia y Nivel

    abstract evolucionar(): void;

    protected ganarXP(xpObtenida: number): void {
        if (this.nivel >= this.nivelMaximo) {
            console.log(`${this.nombre} ha alcanzado el nivel máximo!`);
            return;
        }

        this.xpActual += xpObtenida;
        console.log(`${this.nombre} ha ganado ${xpObtenida} puntos de experiencia. XP total: ${this.xpActual}/${this.xpSigNivel}`);

        if (this.xpActual >= this.xpSigNivel) {
            this.subirDeNivel();
        }
    }

    protected subirDeNivel(): void {
        if (this.nivel >= this.nivelMaximo) {
            console.log(`${this.nombre} ha alcanzado el nivel máximo y no puede subir más de nivel.`);
            return;
        }

        this.nivel++;
        this.xpActual -= this.xpSigNivel;
        this.xpSigNivel += this.FACTOR_XP;
        console.log(`${this.nombre} ha subido al nivel ${this.nivel}. XP para el proximo nivel: ${this.xpActual}/${this.xpSigNivel}`);

        if (this.nivel % this.EVOLUCION_NIVEL === 0) { //Si subio la cantidad necesaria de niveles, el personaje evoluciona
            this.evolucionar();
        }
    }


    //Habilidades y Danio

    abstract revertirFuerza(): void;

    protected aprenderHabilidad(): void {
        //if (this.habilidadesDesbloqueadas.length < this.habilidades.length) { //Si aun tiene habilidades por aprender
        if (this.nivel < this.nivelMaximo){
            let nuevaHabilidad = this.habilidades[this.habilidadesDesbloqueadas.length];
            
            this.habilidadesDesbloqueadas.push(nuevaHabilidad);
            console.log(`${this.nombre} ha aprendido una nueva habilidad: ${nuevaHabilidad}`);

        } else {
            console.log(`${this.nombre} ya ha desbloqueado todas sus habilidades.`);
        }
    }

    public aplicarDañoElemental(daño: string, bonusFuerza: number): void {
        this.dañoElemental = daño;
        this.ataquesElementalesRestantes = 4;
        this.fuerza += bonusFuerza;
        console.log(`${this.nombre} ha activado el daño elemental de ${daño} con un bonus de fuerza de ${bonusFuerza}. Fuerza total: ${this.fuerza}.`);
    }

    protected realizarAtaqueElemental(): void {
        if (this.dañoElemental && this.ataquesElementalesRestantes > 0) {
          console.log(`${this.nombre} ataca con un daño de ${this.dañoElemental} y fuerza aumentada (${this.fuerza}).`);
          this.ataquesElementalesRestantes--;
    
          if (this.ataquesElementalesRestantes === 0) {
            console.log(`${this.nombre} ha agotado su poder elemental y vuelve a tener ataque normal.`);
            this.revertirFuerza();
          }
        } else {
          console.log(`${this.nombre} realiza un ataque normal con fuerza ${this.fuerza}.`);
        }   
    }


    //GETERS AND SETTERS

    public getNombre(): String {
        return this.nombre;
    }

    public setNombre(nombre: String): void {
        this.nombre = nombre;
    }

    public getNivel(): number {
        return this.nivel;
    }

    public setNivel(nivel: number): void {
        this.nivel = nivel;
    }

    public getXp(): number {
        return this.xpActual;
    }

    public setXp(xp: number): void {
        this.xpActual = xp;
    }

    public getPuntosVida(): number {
        return this.puntosVida;
    }

    public setPuntosVida(puntosVida: number): void {
        this.puntosVida = puntosVida;
    }

    public getFuerza(): number {
        return this.fuerza;
    }

    public setFuerza(fuerza: number): void {
        this.fuerza = fuerza;
    }

    

}