const TxtNumeroA = document.querySelector("#TxtNumeroA");
const TxtNumeroB = document.querySelector("#TxtNumeroB");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtNumeroA.value === "") {
            TxtNumeroA.value = "0.00";
            Bandera = false;
        }
        if((Bandera) && (TxtNumeroB.value === "")) {
            TxtNumeroB.value = "0.00";
            Bandera = false;
        }

        if((Bandera) && (TxtNumeroA.value < 0)) {
            LblResultado.innerHTML = "Ingrese un número valido (a), por favor.";
                Bandera = false;
                    TxtNumeroA.focus();
        }
        if((Bandera) && (TxtNumeroB.value < 0)) {
            LblResultado.innerHTML = "Ingrese un número valido (b), por favor.";
                Bandera = false;
                    TxtNumeroB.focus();
        }

    return Bandera;
}

function MayorCalcular() {
    let NumeroA;
    let NumeroB;
        NumeroA = parseFloat(TxtNumeroA.value);
        NumeroB = parseFloat(TxtNumeroB.value);
            if(NumeroA >= NumeroB)
            { LblResultado.innerHTML = `Número a: ${NumeroA} || Número b: ${NumeroB}`; }
            else
            { LblResultado.innerHTML = `Número a: ${NumeroB} || Número b: ${NumeroA}`; }
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { MayorCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtNumeroA.value = "";
        TxtNumeroB.value = "";
            LblResultado.innerHTML = `Número a: || Número b:`;
                TxtNumeroA.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
