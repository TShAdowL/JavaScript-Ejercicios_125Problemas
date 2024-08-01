const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function EcuacionCalcular() {
    let Inicio = 20;
    let Fin = 30;
    let ValorX = 20;
    let ValorY = 0.00;
    let Mensaje = `Valor X | Valor Y <br/>`;

        for (var i = 0; i <= ((Fin - Inicio) * 2); i++) {
            ValorY = (ValorX * ValorX) + (4 * ValorX) + 6;
            Mensaje +=  ValorX + ' | ' + ValorY + `<br />`;
            ValorX += 0.5;
        }
        
        LblResultado.innerHTML = Mensaje;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        EcuacionCalcular();
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        LblResultado.innerHTML = `Valor X | Valor Y`;
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
