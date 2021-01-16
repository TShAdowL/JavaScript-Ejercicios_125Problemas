const TxtCalificacion1 = document.querySelector("#TxtCalificacion1");
const TxtCalificacion2 = document.querySelector("#TxtCalificacion2");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtCalificacion1.value === "") {
            TxtCalificacion1.value = "0.00";
            Bandera = false;
        }
        if((Bandera) && (TxtCalificacion2.value === "")) {
            TxtCalificacion2.value = "0.00";
            Bandera = false;
        }

        if((Bandera) && (TxtCalificacion1.value < 0)) {
            LblResultado.innerHTML = "Ingrese una calificación valida, por favor.";
                Bandera = false;
                    TxtCalificacion1.focus();
        }
        if((Bandera) && (TxtCalificacion2.value < 0)) {
            LblResultado.innerHTML = "Ingrese una calificación valida, por favor.";
                Bandera = false;
                    TxtCalificacion2.focus();
        }
        
    return Bandera;
}

function AceptadoCalcular() {
    let Calificacion1;
    let Calificacion2;
        Calificacion1 = parseFloat(TxtCalificacion1.value);
        Calificacion2 = parseFloat(TxtCalificacion2.value);
            if((Calificacion1 >= 90) || (Calificacion2 >= 90))
            { LblResultado.innerHTML = `La persona es aceptada.`; }
            else
            { LblResultado.innerHTML = `La persona es rechazada.`; }
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { AceptadoCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtCalificacion1.value = "";
        TxtCalificacion2.value = "";
            LblResultado.innerHTML = `La persona es...`;
                TxtCalificacion1.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
