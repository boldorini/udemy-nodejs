"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//export transforma o arquivo em módulo
var Veiculo_1 = __importDefault(require("./Veiculo"));
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(modelo, numeroDePortas) {
        var _this = _super.call(this) || this;
        //this.setModelo(modelo);
        _this.modelo = modelo;
        _this.numeroDePortas = numeroDePortas;
        return _this;
    }
    Carro.prototype.getModelo = function () {
        //return this.getModelo();
        return this.modelo;
    };
    return Carro;
}(Veiculo_1.default));
exports.default = Carro;
