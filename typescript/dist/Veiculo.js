"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//export transforma o arquivo em módulo
//só é possível utilizar modificador de visualização de atributos
//por estarmos utilizando TypeScript
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        this.velocidade = 0;
    }
    Veiculo.prototype.acelerar = function () {
        this.velocidade += 10;
    };
    Veiculo.prototype.parar = function () {
        this.velocidade = 0;
    };
    Veiculo.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    Veiculo.prototype.setVelocidade = function (velocidade) {
        this.velocidade += velocidade;
    };
    //Criação de getter and setters para variaveis com visibilidade private
    //ou utilização do modificador de visibilidade protected para as classes
    //filhas enxergarem o atributo.
    Veiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Veiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    return Veiculo;
}());
exports.default = Veiculo;
