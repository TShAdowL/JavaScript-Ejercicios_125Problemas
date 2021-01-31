const TxtNumero1 = document.querySelector("#TxtNumero1");
const TxtNumero2 = document.querySelector("#TxtNumero2");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtNumero1.value === "") {
            Bandera = false;
                TxtNumero1.value = "0.00";
        }
        if((Bandera) && (TxtNumero2.value === "")) {
            Bandera = false;
                TxtNumero2.value = "0.00";
        }
        
    return Bandera;
}

function ValidarCalcular() {
    let Num1 = parseFloat(TxtNumero1.value);
    let Num2 = parseFloat(TxtNumero2.value);

    if((0 <= Num1) && (Num1 <= Num2) && (Num2 <= 100))
    { LblResultado.innerHTML = `Los números: ESTAN BIEN.`; }
    else
    { LblResultado.innerHTML = `Los números: NO ESTAN BIEN.`; }
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { ValidarCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtNumero1.value = "";
            LblResultado.innerHTML = `Los número: `;
                TxtNumero1.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
