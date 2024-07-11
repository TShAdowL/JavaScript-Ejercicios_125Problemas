const TxtEstatura = document.querySelector("#TxtEstatura");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtEstatura.value === "")
        { TxtEstatura.value = "0.00"; }

        if((Bandera) && (TxtEstatura.value < 0)) {
            LblResultado.innerHTML = "Ingrese una estatura valida, por favor.";
                Bandera = false;
                    TxtEstatura.focus();
        }
        
    return Bandera;
}

function AceptadoCalcular() {
    let Estatura;
        Estatura = parseFloat(TxtEstatura.value);
            if((Estatura >= 1.65) && (Estatura <= 1.90))
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
        TxtEstatura.value = "";
            LblResultado.innerHTML = `La persona es...`;
                TxtEstatura.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
