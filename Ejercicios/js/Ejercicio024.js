const TxtEdad = document.querySelector("#TxtEdad");
const TxtCalificacion1 = document.querySelector("#TxtCalificacion1");
const TxtCalificacion2 = document.querySelector("#TxtCalificacion2");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtEdad.value === "") {
            TxtEdad.value = "0.00";
            Bandera = false;
        }
        if((Bandera) && (TxtCalificacion1.value === "")) {
            TxtCalificacion1.value = "0.00";
            Bandera = false;
        }
        if((Bandera) && (TxtCalificacion2.value === "")) {
            TxtCalificacion2.value = "0.00";
            Bandera = false;
        }

        if((Bandera) && (TxtEdad.value < 0)) {
            LblResultado.innerHTML = "Ingrese una edad valida, por favor.";
                Bandera = false;
                    TxtEdad.focus();
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
    let Edad;
    let Calificacion1;
    let Calificacion2;
        Edad = parseFloat(TxtEdad.value);
        Calificacion1 = parseFloat(TxtCalificacion1.value);
        Calificacion2 = parseFloat(TxtCalificacion2.value);
            if(Edad >= 40) {
                if((Calificacion1 >= 85) || (Calificacion2 >= 85))
                { LblResultado.innerHTML = `La persona es aceptada.`; }
                else
                { LblResultado.innerHTML = `La persona es rechazada.`; }
            }
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
        TxtEdad.value = "";
        TxtCalificacion1.value = "";
        TxtCalificacion2.value = "";
            LblResultado.innerHTML = `La persona es...`;
                TxtEdad.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
