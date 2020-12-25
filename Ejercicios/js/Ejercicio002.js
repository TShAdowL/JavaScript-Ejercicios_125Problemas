const TxtCalificacion1 = document.querySelector("#TxtCalificacion1");
const TxtCalificacion2 = document.querySelector("#TxtCalificacion2");
const TxtCalificacion3 = document.querySelector("#TxtCalificacion3");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");

function DatosValidar() {
    let Bandera = true;
        if(TxtCalificacion1.value === "") {
            LblResultado.innerHTML = "Ingrese la primera calificación, por favor.";
                Bandera = false;
                    TxtCalificacion1.focus();
        }
        if((Bandera) && (TxtCalificacion2.value === "")) {
            LblResultado.innerHTML = "Ingrese la segunda calificación, por favor.";
                Bandera = false;
                    TxtCalificacion2.focus();
        }
        if((Bandera) && (TxtCalificacion3.value === "")) {
            LblResultado.innerHTML = "Ingrese la tercera calificación, por favor.";
                Bandera = false;
                    TxtCalificacion3.focus();
        }

        if((Bandera) && ((TxtCalificacion1.value <= 0) || (TxtCalificacion1.value > 10))) {
            LblResultado.innerHTML = "Ingrese una calificación valida, por favor.";
                Bandera = false;
                    TxtCalificacion1.focus();
        }
        if((Bandera) && ((TxtCalificacion2.value <= 0) || (TxtCalificacion2.value > 10))) {
            LblResultado.innerHTML = "Ingrese una calificación valida, por favor.";
                Bandera = false;
                    TxtCalificacion2.focus();
        }
        if((Bandera) && ((TxtCalificacion3.value <= 0) || (TxtCalificacion3.value > 10))) {
            LblResultado.innerHTML = "Ingrese una calificación validas, por favor.";
                Bandera = false;
                    TxtCalificacion3.focus();
        }

    return Bandera;
}

function PromedioCalcular() {
    let Promedio;
        Promedio = parseFloat(TxtCalificacion1.value) + parseFloat(TxtCalificacion2.value) + parseFloat(TxtCalificacion3.value);
        Promedio = Promedio / 3;
            Promedio = Promedio.toFixed(2);
                LblResultado.innerHTML = `El promedio de las tres calificaciones es: ${Promedio}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { PromedioCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtCalificacion1.value = "";
        TxtCalificacion2.value = "";
        TxtCalificacion3.value = "";
        LblResultado.innerHTML = `El promedio de las tres calificaciones es:`;
            TxtCalificacion1.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
