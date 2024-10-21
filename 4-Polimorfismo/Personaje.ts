export abstract class Personaje {
    //Constantes
    private readonly EVOLUCION_NIVEL: number = 3; //El personaje evolucionara tras esta cantidad de niveles obtenidos
    //private readonly XP_NECESARIA: number = 50 //XP base necesaria para subir de nivel
    private readonly FACTOR_XP: number = 12; //Factor experiencia adicional cada vez que se pasa un nivel

    //PJ Stats
    protected nombre: String;
    protected puntosVida: number = 0;
    protected fuerza: number = 0;
    protected fuerzaOriginal: number = 0;

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
            console.log(`${this.nombre} ha alcanzado el nivel máximo! (${this.nivel}/${this.nivelMaximo})`);
            return;
        }

        this.xpActual += xpObtenida;
        console.log(`${this.nombre} ha ganado ${xpObtenida} puntos de experiencia. XP total: ${this.xpActual}/${this.xpSigNivel}`);

        if (this.xpActual >= this.xpSigNivel && this.nivel < this.nivelMaximo) {
            this.subirDeNivel();
        }
    }

    protected subirDeNivel(): void {
        this.nivel++;
        this.xpActual -= this.xpSigNivel;
        this.xpSigNivel += this.FACTOR_XP;

        console.log(`${this.nombre} ha subido al nivel ${this.nivel}. XP para el proximo nivel: ${this.xpActual}/${this.xpSigNivel}`);

        this.evolucionar();

        if (this.nivel % this.EVOLUCION_NIVEL === 0) { //Si subio la cantidad necesaria de niveles, el personaje aprende una nueva habilidad
            this.aprenderHabilidad(); // Desbloquea nueva habilidad 
        }
    }


    //Habilidades y Danio

    abstract revertirFuerza(): void;

    protected aprenderHabilidad(): void {
        if (this.habilidadesDesbloqueadas.length < this.habilidades.length) { //Si aun tiene habilidades por aprender
            let nuevaHabilidad = this.habilidades[this.habilidadesDesbloqueadas.length];
            
            this.habilidadesDesbloqueadas.push(nuevaHabilidad);
            console.log(`${this.nombre} ha evolucionado lo suficiente como para aprender una nueva habilidad: ${nuevaHabilidad}`);

        } else {
            console.log(`${this.nombre} ya ha desbloqueado todas sus habilidades.`);
        }
    }

    public aplicarDañoElemental(daño: string, bonusFuerza: number, turnos: number): void {
        this.dañoElemental = daño;
        this.ataquesElementalesRestantes = turnos;
        this.fuerza += bonusFuerza;
        console.log(`${this.nombre} ha activado el daño elemental de ${daño} con un bonus de fuerza de ${bonusFuerza} durante ${turnos} turnos. Fuerza total: ${this.fuerza}.`);
    }

    protected realizarAtaqueElemental(): void {
        if (this.dañoElemental && this.ataquesElementalesRestantes > 0) {
          console.log(`${this.nombre} ataca con un daño de ${this.dañoElemental} y fuerza aumentada (${this.fuerza}).`);
          this.ataquesElementalesRestantes--;
    
          if (this.ataquesElementalesRestantes === 0) {
            console.log(`${this.nombre} ha agotado su poder elemental y vuelve a tener ataque normal.`);
            this.desactivarElemental();
            this.revertirFuerza();
          }
        } else {
            console.log(`${this.nombre} realiza un ataque normal con fuerza ${this.fuerza}.`);
        }   
    }

    private desactivarElemental(): void {
        this.dañoElemental = null;
    }

    public mostrarHabilidadesDesbloqueadas(): void {
        console.log(`${this.nombre} ha desbloqueado las siguientes habilidades:`);
        this.habilidadesDesbloqueadas.forEach(habilidad => console.log(habilidad));
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

    public getFuerzaOriginal(): number {
        return this.fuerzaOriginal;
    }

    public setFuerzaOriginal(fuerzaOriginal: number): void {
        this.fuerzaOriginal = fuerzaOriginal;
    }

    

}