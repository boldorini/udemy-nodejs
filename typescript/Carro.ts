//export transforma o arquivo em módulo
import Veiculo from "./Veiculo";

export default class Carro extends Veiculo{
    private numeroDePortas: number;    

    constructor(modelo: string, numeroDePortas: number){
        super();
        //this.setModelo(modelo);
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }

    public getModelo(): string {
        //return this.getModelo();
        return this.modelo;
    }
}
