//class: feature do ES6 - necessita transpile
import Carro from "./Carro";
import {ConcesssionariaInterface} from "./ConcessionariaInterface"

export default class Concessionaria implements ConcesssionariaInterface{
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

    public fornecerHorarioDeFuncionamento(): string {
        return "De segunda a sexta as 08:00 às 18:00 e aos sábados das 08:00 às 12:00";
    }
}