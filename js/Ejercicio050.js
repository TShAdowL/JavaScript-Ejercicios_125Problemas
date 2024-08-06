const TxtNombre = document.querySelector("#TxtNombre");
const TxtPrimeraInicial = document.querySelector("#TxtPrimeraInicial");
const TxtSegundaInicial = document.querySelector("#TxtSegundaInicial");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function MensajeImprimir() {
    let Mensaje = 'Mi nombre es ' + TxtPrimeraInicial.value +'. ' + TxtSegundaInicial.value + '. ' + TxtNombre.value;
        
        LblResultado.innerHTML = Mensaje;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        MensajeImprimir();
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtNombre.value = "";
        TxtPrimeraInicial.value = "";
        TxtSegundaInicial.value = "";
        LblResultado.innerHTML = `Mi nombre es...`;
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();
});
