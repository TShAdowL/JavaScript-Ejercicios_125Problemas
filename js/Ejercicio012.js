const TxtParticipacion = document.querySelector("#TxtParticipacion");
const TxtParcial1 = document.querySelector("#TxtParcial1");
const TxtParcial2 = document.querySelector("#TxtParcial2");
const TxtParcial3 = document.querySelector("#TxtParcial3");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtParticipacion.value === "")
        { TxtParticipacion.value = "0.00"; }
        if(TxtParcial1.value === "")
        { TxtParcial1.value = "0.00"; }
        if(TxtParcial2.value === "")
        { TxtParcial2.value = "0.00"; }
        if((Bandera) && (TxtParcial3.value === ""))
        { TxtParcial3.value = "0.00"; }

        if((Bandera) && ((TxtParticipacion.value <= 0) || (TxtParticipacion.value > 10))) {
            LblResultado.innerHTML = "Ingrese una calificación valida de participación, por favor.";
                Bandera = false;
                    TxtParticipacion.focus();
        }
        if((Bandera) && ((TxtParcial1.value <= 0) || (TxtParcial1.value > 10))) {
            LblResultado.innerHTML = "Ingrese una calificación valida del primer parcial, por favor.";
                Bandera = false;
                    TxtParcial1.focus();
        }
        if((Bandera) && ((TxtParcial2.value <= 0) || (TxtParcial2.value > 10))) {
            LblResultado.innerHTML = "Ingrese una calificación valida del segundo parcial, por favor.";
                Bandera = false;
                    TxtParcial2.focus();
        }
        if((Bandera) && ((TxtParcial3.value <= 0) || (TxtParcial3.value > 10))) {
            LblResultado.innerHTML = "Ingrese una calificación valida del tercer parcial, por favor.";
                Bandera = false;
                    TxtParcial3.focus();
        }

    return Bandera;
}

function CalificacionCalcular() {
    let CalificacionFinal;
        CalificacionFinal = parseFloat(TxtParticipacion.value) * 0.10;
        CalificacionFinal += parseFloat(TxtParcial1.value) * 0.25;
        CalificacionFinal += parseFloat(TxtParcial2.value) * 0.25;
        CalificacionFinal += parseFloat(TxtParcial3.value) * 0.40;
            CalificacionFinal = CalificacionFinal.toFixed(2);
                LblResultado.innerHTML = `La calificación final es: ${CalificacionFinal}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { CalificacionCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtParticipacion.value = "";
        TxtParcial1.value = "";
        TxtParcial2.value = "";
        TxtParcial3.value = "";
            LblResultado.innerHTML = `La calificación final es: `;
                TxtParticipacion.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
