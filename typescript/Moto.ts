import Veiculo from "./Veiculo";

//export default class Moto extends Veiculo{}
class Moto extends Veiculo{

    public acelerar(): void {        
        this.setVelocidade(20);        
    }
}

//a exportação pode ser feita dessa maneira também
export default Moto;