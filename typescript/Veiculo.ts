//export transforma o arquivo em módulo
//só é possível utilizar modificador de visualização de atributos
//por estarmos utilizando TypeScript
export default class Veiculo{
    protected modelo: string;    
    private velocidade: number = 0;

    public acelerar():void {
        this.velocidade += 10;
    }

    public parar(): void {
        this.velocidade = 0;
    }

    public velocidadeAtual(): number {
        return this.velocidade;
    }
    
    public setVelocidade(velocidade: number): void {
        this.velocidade += velocidade;
    }

    //Criação de getter and setters para variaveis com visibilidade private
    //ou utilização do modificador de visibilidade protected para as classes
    //filhas enxergarem o atributo.
    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }
}