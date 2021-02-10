var dobroDoValor = function(numero) {
    return numero * 2;
}
console.log(dobroDoValor(7));


var dobroDoValorArrowFunction = (numero) => {
    return numero * 2
}
console.log(dobroDoValorArrowFunction(7));

//só há necessidade de parênteses nas arrow functions quando existe mais
// de um parâmetro na função ou quando a mesma não recebe parâmetro algum
var dobroDoValorArrowFunctionSemParenteses = () => {
    return 2 * 2
}
console.log(dobroDoValorArrowFunctionSemParenteses(7));

var dobroDoValorArrowFunctionSemParenteses = numero => 2 * 2;
console.log(dobroDoValorArrowFunctionSemParenteses(7));