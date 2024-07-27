const TxtLimite = document.querySelector("#TxtLimite");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    if(TxtLimite.value === "")
    { TxtLimite.value = "0.00"; }
}

function TernaPitagorica() {
    let Limite = parseInt(TxtLimite.value);
    let Cuadrados = [];
    let ValorA;
    let ValorB;
    let ValorC;
    let Auxiliar;
    let Mensaje = '';
        if(Limite > 0) {
            for (let i = 0; i < Limite; i++)
            { Cuadrados.push(Math.pow((i + 1), 2)); }

            Cuadrados.forEach((Cuadrado, Indice) => {
                for (let i = 0; i < Cuadrados.length; i++) {
                    ValorC = Indice;
                    ValorB = Cuadrados[Indice - i];
                        Auxiliar = Cuadrado - ValorB;
                        ValorA = Cuadrados.indexOf(Auxiliar);
                            if(ValorA > -1) {
                                ValorB = Cuadrados.indexOf(ValorB);
                                    ValorC++;
                                    ValorB++;
                                    ValorA++;
                                        if((ValorC > ValorB) && (ValorB> ValorA))
                                        { Mensaje += `Terna pitagórica a=${ValorA} b=${ValorB} c=${ValorC} <br>`; }
                            }
                }
            });

            LblResultado.innerHTML = Mensaje;
        }
        else{
            LblResultado.innerHTML = `Limite no valido.`;
                TxtLimite.focus();
        }
}

function BtnCalcularClick(event) {
    event.preventDefault();
        DatosValidar();
        TernaPitagorica();
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtLimite.value = "";
            LblResultado.innerHTML = ``;
                TxtLimite.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
