const TxtVolts = document.querySelector("#TxtVolts");
const TxtOhms = document.querySelector("#TxtOhms");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");

function DatosValidar() {
    let Bandera = true;
        if(TxtVolts.value === "") {
            LblResultado.innerHTML = "Ingrese los volts, por favor.";
                Bandera = false;
                    TxtVolts.focus();
        }
        if((Bandera) && (TxtOhms.value === "")) {
            LblResultado.innerHTML = "Ingrese los ohms, por favor.";
                Bandera = false;
                TxtOhms.focus();
        }

        if((Bandera) && (TxtVolts.value < 0)) {
            LblResultado.innerHTML = "Ingrese una cantidad de volts valida, por favor.";
                Bandera = false;
                    TxtVolts.focus();
        }
        if((Bandera) && (TxtOhms.value < 0)) {
            LblResultado.innerHTML = "Ingrese una cantidad de omhs valida, por favor.";
                Bandera = false;
                    TxtOhms.focus();
        }

    return Bandera;
}

function IntensidadCalcular() {
    let Intensidad;
        Intensidad = parseFloat(TxtVolts.value) / parseFloat(TxtOhms.value);
        Intensidad = Intensidad.toFixed(2);
                LblResultado.innerHTML = `La intensidad es: ${Intensidad} amperios.`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { IntensidadCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtVolts.value = "";
        TxtOhms.value = "";
        LblResultado.innerHTML = `La intensidad es:`;
            TxtVolts.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
