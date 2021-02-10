"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//imports
var Carro_1 = require("./Carro");
var Pessoa_1 = require("./Pessoa");
var Concessionaria_1 = require("./Concessionaria");
// let carroA = new Carro("Veloster",3);
// console.log(carroA);
// carroA.acelerar();
// console.log(carroA);
/****************************************************************************/
/* Criando Carros                                                           */
/****************************************************************************/
var carroA = new Carro_1.Carro("Onix", 4);
var carroB = new Carro_1.Carro("Celta", 4);
var carroC = new Carro_1.Carro("Fusca", 2);
var carroD = new Carro_1.Carro("Duster", 4);
var carroE = new Carro_1.Carro("Clio", 4);
/****************************************************************************/
/* lista de carros                                                          */
/****************************************************************************/
var carros = [carroA, carroB, carroC, carroD, carroE];
var concessionaria = new Concessionaria_1.Concessionaria("Rua Saldanha Marinho", carros);
var cliente = new Pessoa_1.Pessoa("Claudio", "Onix", carroC);
/****************************************************************************/
/* Concessionária                                                           */
/****************************************************************************/
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro.getModelo() == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroPreferido());
