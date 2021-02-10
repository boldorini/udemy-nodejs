"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
//export transforma o arquivo em módulo
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade += 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    return Carro;
}());
exports.Carro = Carro;
