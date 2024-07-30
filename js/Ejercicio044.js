const TxtIndice = document.querySelector("#TxtIndice");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    if(TxtIndice.value === "")
    { TxtIndice.value = "0.00"; }
}

function IndiceCalcular() {
    let Indice = parseFloat(TxtIndice.value);
    let Mensaje = '';
        if((Indice >= 0.05) && (Indice <= 0.25))
        { Mensaje = 'Los contaminantes emitidos son normales.'; }
        else if((Indice >= 0.30) && (Indice < 0.40))
        { Mensaje = 'Se debe suspender las operaciones hasta volver a un indice normal las empresas de la lista A.'; }
        else if((Indice >= 0.40) && (Indice < 0.50))
        { Mensaje = 'Se debe suspender las operaciones hasta volver a un indice normal las empresas de las lista B.'; }
        else if((Indice >= 0.50))
        { Mensaje = 'Se debe suspender las operaciones hasta volver a un indice normal las empresas de las listas A, B y C.'; }
        else
        { Mensaje = 'Indice invalido.'; }
        
            LblResultado.innerHTML = Mensaje;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        DatosValidar();
        IndiceCalcular();
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtIndice.value = "";
            LblResultado.innerHTML = `La industria es...`;
                TxtIndice.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
