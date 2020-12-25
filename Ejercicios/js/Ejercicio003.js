const TxtDinero = document.querySelector("#TxtDinero");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");

function DatosValidar() {
    let Bandera = true;
        if(TxtDinero.value === "") {
            LblResultado.innerHTML = "Ingrese el dinero de Guillermo, por favor.";
                Bandera = false;
                    TxtDinero.focus();
        }

        if((Bandera) && (TxtDinero.value <= 0)) {
            LblResultado.innerHTML = "Ingrese una cantidad valida, por favor.";
                Bandera = false;
                    TxtDinero.focus();
        }

    return Bandera;
}

function DineroCalcular() {
    let DineroTotal;
        DineroTotal = parseFloat(TxtDinero.value);
        DineroTotal += (DineroTotal / 2);
        DineroTotal += (DineroTotal / 2);
            DineroTotal = DineroTotal.toFixed(2);
                LblResultado.innerHTML = `La cantidad de dinero que tienen entre los tres: ${DineroTotal}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { DineroCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtDinero.value = "";
        LblResultado.innerHTML = `La cantidad de dinero que tienen entre los tres:`;
            TxtDinero.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
