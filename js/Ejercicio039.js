const TxtNumero1 = document.querySelector("#TxtNumero1");
const TxtNumero2 = document.querySelector("#TxtNumero2");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    if(TxtNumero1.value === "")
    { TxtNumero1.value = "0.00"; }

    if(TxtNumero2.value === "")
    { TxtNumero2.value = "0.00"; }
}

function ValidarCalcular() {
    let Num1 = parseFloat(TxtNumero1.value);
    let Num2 = parseFloat(TxtNumero2.value);

    if((0 <= Num1) && (Num1 <= Num2) && (Num2 <= 100))
    { LblResultado.innerHTML = `Los números: ESTAN BIEN.`; }
    else
    { LblResultado.innerHTML = `Los números: NO ESTAN BIEN.`; }
}

function BtnCalcularClick(event) {
    event.preventDefault();
        DatosValidar();
        ValidarCalcular();
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtNumero1.value = "";
        TxtNumero2.value = "";
            LblResultado.innerHTML = `Los número: `;
                TxtNumero1.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
