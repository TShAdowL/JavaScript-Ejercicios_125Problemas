const TxtPrecio96 = document.querySelector("#TxtPrecio96");
const TxtPrecio97 = document.querySelector("#TxtPrecio97");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtPrecio96.value === "")
        { TxtPrecio96.value = "0.00"; }
        if(TxtPrecio97.value === "")
        { TxtPrecio97.value = "0.00"; }

        if((Bandera) && (TxtPrecio96.value <= 0)) {
            LblResultado.innerHTML = "Ingrese un precio valido, por favor.";
                Bandera = false;
                    TxtPrecio96.focus();
        }
        if((Bandera) && (TxtPrecio97.value <= 0)) {
            LblResultado.innerHTML = "Ingrese un precio valido, por favor.";
                Bandera = false;
                    TxtPrecio97.focus();
        }

    return Bandera;
}

function VariacionCalcular() {
    let Variacion;
        Variacion = parseFloat(TxtPrecio97.value) - parseFloat(TxtPrecio96.value);
        Variacion = Variacion / parseFloat(TxtPrecio97.value);
        Variacion = Variacion * 100;
            Variacion = Variacion.toFixed(2);
                LblResultado.innerHTML = `El porcentaje de variación es: ${Variacion}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { VariacionCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtPrecio96.value = "";
        TxtPrecio97.value = "";
            LblResultado.innerHTML = `El porcentaje de variación es: `;
                TxtPrecio96.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
