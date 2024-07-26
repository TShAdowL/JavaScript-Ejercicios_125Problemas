const TxtCalificacion = document.querySelector("#TxtCalificacion");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    if(TxtCalificacion.value === "")
    { TxtCalificacion.value = "0.00"; }
}

function CalificacionCalcular() {
    let Calificacion = parseFloat(TxtCalificacion.value);
    let Mensaje = "La calificación del estudiante es: ";
        if(Calificacion > 100)
        { Mensaje = `Calificación invalida.`; }
        else if((Calificacion >= 90) && (Calificacion <= 100))
        { Mensaje = `${Mensaje} sobresaliente.`; }
        else if((Calificacion >= 80) && (Calificacion <= 89))
        { Mensaje = `${Mensaje} distinguido.`; }
        else if((Calificacion >= 70) && (Calificacion <= 79))
        { Mensaje = `${Mensaje} bueno.`; }
        else if((Calificacion >= 60) && (Calificacion <= 69))
        { Mensaje = `${Mensaje} suficiente.`; }
        else if(Calificacion < 60)
        { Mensaje = `${Mensaje} reprobado.`; }
            LblResultado.innerHTML = Mensaje;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        DatosValidar();
        CalificacionCalcular();
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtCalificacion.value = "";
            LblResultado.innerHTML = `La calificación del estudiante es: `;
                TxtCalificacion.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
