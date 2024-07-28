const TxtValorA = document.querySelector("#TxtValorA");
const TxtValorB = document.querySelector("#TxtValorB");
const TxtValorC = document.querySelector("#TxtValorC");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    if(TxtValorA.value === "")
    { TxtValorA.value = "0.00"; }

    if(TxtValorB.value === "")
    { TxtValorB.value = "0.00"; }

    if(TxtValorC.value === "")
    { TxtValorC.value = "0.00"; }
}

function TrianguloCalcular() {
    let ValorA = parseFloat(TxtValorA.value);
    let ValorB = parseFloat(TxtValorB.value);
    let ValorC = parseFloat(TxtValorC.value);
    let Auxiliar = ValorB + ValorC;
    let Mensaje = '';
        if(ValorA > Auxiliar)
        { Mensaje = `No se forma triángulo.`; }
        else {
            Auxiliar = (Math.pow(ValorB, 2)) + (Math.pow(ValorC, 2));
            ValorA = Math.pow(ValorA,2);
                if(ValorA === Auxiliar)
                { Mensaje = `Se forma triángulo rectángulo.`; }
                else if(ValorA > Auxiliar)
                { Mensaje = `Se forma triángulo obtusángulo.`; }
                else if(ValorA < Auxiliar)
                { Mensaje = `Se forma triángulo acutángulo.`; }
        }
        
        LblResultado.innerHTML = Mensaje;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        DatosValidar();
        TrianguloCalcular();
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtValorA.value = "";
        TxtValorB.value = "";
        TxtValorC.value = "";
            LblResultado.innerHTML = `Se forma un triángulo...`;
                TxtValorA.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
