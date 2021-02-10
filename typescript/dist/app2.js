"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//imports
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
// let carroA = new Carro("Veloster",3);
// console.log(carroA);
// carroA.acelerar();
// console.log(carroA);
/****************************************************************************/
/* Criando Carros                                                           */
/****************************************************************************/
var carroA = new Carro_1.default("Onix", 4);
var carroB = new Carro_1.default("Celta", 4);
var carroC = new Carro_1.default("Fusca", 2);
var carroD = new Carro_1.default("Duster", 4);
var carroE = new Carro_1.default("Clio", 4);
/****************************************************************************/
/* lista de carros                                                          */
/****************************************************************************/
var carros = [carroA, carroB, carroC, carroD, carroE];
var concessionaria = new Concessionaria_1.default("Rua Saldanha Marinho", carros);
var cliente = new Pessoa_1.default("Claudio", "Onix", carroC);
/****************************************************************************/
/* Concessionária                                                           */
/****************************************************************************/
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro.getModelo() == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroPreferido());
