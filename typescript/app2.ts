//class: feature o ES6
class Carro{
    private modelo: string;
    private numeroDePortas: number;
    private velocidade: number = 0;   

    constructor(modelo: string, numeroDePortas: number){
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }

    public acelerar():void {
        this.velocidade += 10;
    }

    public parar(): void {
        this.velocidade = 0;
    }

    public velocidadeAtual(): number {
        return this.velocidade;
    }
}

class Concessionaria{
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

// let carroA = new Carro("Veloster",3);
// console.log(carroA);
// carroA.acelerar();
// console.log(carroA);

