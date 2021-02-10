//class: feature do ES6 - necessita transpile
import Carro from "./Carro";

export default class Concessionaria{
    private endereco: string;
    //aqui a variável consegue receber QUALQUER tipo de dados
    //private listaDeCarros: any;
    private listaDeCarros: Array<Carro>;

    constructor(endereco: string, listaDeCarros: Array<Carro>){
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerEndereco(): string{
        return this.endereco;
    }

    public mostrarListaDeCarros(): Array<Carro>{
        return this.listaDeCarros;
    }
}