const TxtValorX = document.querySelector("#TxtValorX");
const TxtValorD = document.querySelector("#TxtValorD");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtValorX.value === "") {
            Bandera = false;
                TxtValorX.value = "0.00";
        }
        if((Bandera) && (TxtValorD.value === "")) {
            Bandera = false;
                TxtValorD.value = "0.00";
        }

        if((Bandera) && (TxtValorX.value <= 0)) {
            LblResultado.innerHTML = "Ingrese una valor x valida, por favor.";
                Bandera = false;
                    TxtValorX.focus();
        }
        if((Bandera) && (TxtValorD.value <= 0)) {
            LblResultado.innerHTML = "Ingrese una valor d valida, por favor.";
                Bandera = false;
                    TxtValorD.focus();
        }
        
    return Bandera;
}

function ValoresCalcular() {
    let ValorX = parseFloat(TxtValorX.value);
    let ValorD = parseFloat(TxtValorD.value);
        if((ValorX <= 1) && (ValorD > 100))
        { ValorD = ValorD * 1.20; }
        else if((1 < ValorX) && (ValorX <= 2) && (ValorD > 100))
        { ValorD = ValorD *1.30; }
        else if((2 < ValorX) && (ValorX <= 3) && (ValorD > 100))
        { ValorD = ValorD *1.40; }
        else if((ValorX > 3) && (ValorD > 100))
        { ValorD = ValorD *1.40; }
        else {
            ValorX = ValorX;
            ValorD = ValorD
        }
            ValorX = ValorX.toFixed(2);
            ValorD = ValorD.toFixed(2);
                LblResultado.innerHTML = `El valor de d es: ${ValorD}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { ValoresCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtValorX.value = "";
            LblResultado.innerHTML = `El valor de d es: `;
                TxtValorX.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
