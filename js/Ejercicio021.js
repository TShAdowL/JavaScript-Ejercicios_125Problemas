const TxtNumeroA = document.querySelector("#TxtNumeroA");
const TxtNumeroB = document.querySelector("#TxtNumeroB");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    if(TxtNumeroA.value === "")
    { TxtNumeroA.value = "0.00"; }
    if(TxtNumeroB.value === "")
    { TxtNumeroB.value = "0.00"; }
}

function SignoCalcular() {
    let NumeroA;
    let NumeroB;
        NumeroA = parseFloat(TxtNumeroA.value);
        NumeroB = parseFloat(TxtNumeroB.value);
            if((NumeroA === 0) && (NumeroB === 0))
            {LblResultado.innerHTML = `Los 2 números son neutros.`;}
            else if((NumeroA > 0) && (NumeroB > 0))
            {LblResultado.innerHTML = `Los 2 números son positivos.`;}
            else if((NumeroA < 0) && (NumeroB < 0))
            {LblResultado.innerHTML = `Los 2 números son negativos.`;}
            else
            {LblResultado.innerHTML = `Los 2 números tienen diferente signo.`;}
}

function BtnCalcularClick(event) {
    event.preventDefault();
        DatosValidar();
        SignoCalcular();
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtNumeroA.value = "";
        TxtNumeroB.value = "";
            LblResultado.innerHTML = `Los dos números son...`;
                TxtNumeroA.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
