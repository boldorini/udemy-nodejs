//imports
import Carro from "./Carro";
import Pessoa from "./Pessoa";
import Concessionaria from "./Concessionaria";

// let carroA = new Carro("Veloster",3);
// console.log(carroA);
// carroA.acelerar();
// console.log(carroA);

/****************************************************************************/
/* Criando Carros                                                           */
/****************************************************************************/
let carroA = new Carro("Onix",4);
let carroB = new Carro("Celta",4);
let carroC = new Carro("Fusca",2);
let carroD = new Carro("Duster",4);
let carroE = new Carro("Clio",4);

/****************************************************************************/
/* lista de carros                                                          */
/****************************************************************************/
let carros: Carro[] = [carroA,carroB,carroC,carroD,carroE];
let concessionaria = new Concessionaria("Rua Saldanha Marinho", carros);
let cliente = new Pessoa("Claudio","Onix",carroC);

/****************************************************************************/
/* Concessionária                                                           */
/****************************************************************************/

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if (carro.getModelo() == cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro);

    }
})

console.log(cliente.dizerCarroPreferido());