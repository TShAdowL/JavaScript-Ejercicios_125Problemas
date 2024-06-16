const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function XyYCalcular() {
    let X1 = 4;
    let Y1 = 3;
    let R1 = 11;
    let X2 = 5;
    let Y2 = -2;
    let R2 = 8;
    let XValor;
    let YValor;
        X1 = X1 * Math.abs(Y2);
        R1 = R1 * Math.abs(Y2);
        X2 = X2 * Math.abs(Y1);
        R2 = R2 * Math.abs(Y1);
            XValor = (R1 + R2) / (X1 + X2);
            YValor = (11 - (4 * XValor)) / 3;
                XValor = XValor.toFixed(2);
                YValor = YValor.toFixed(2);
                    LblResultado.innerHTML = `x=${XValor} | y=${YValor}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        XyYCalcular();
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        LblResultado.innerHTML = `x= |y= `;
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
