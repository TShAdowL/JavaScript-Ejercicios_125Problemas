const TxtMetros = document.querySelector("#TxtMetros");
const TxtCosto = document.querySelector("#TxtCosto");
const TxtInstalacion = document.querySelector("#TxtInstalacion");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtMetros.value === "")
        { TxtMetros.value = "0.00"; }
        if(TxtCosto.value === "")
        { TxtCosto.value = "0.00"; }
        if(TxtInstalacion.value === "")
        { TxtInstalacion.value = "0.00"; }

        if((Bandera) && (TxtMetros.value <= 0)) {
            LblResultado.innerHTML = "Ingrese los metros cuadarados validos, por favor.";
                Bandera = false;
                    TxtMetros.focus();
        }
        if((Bandera) && (TxtCosto.value <= 0)) {
            LblResultado.innerHTML = "Ingrese el costo de la alfombra por metro cuadrado valido, por favor.";
                Bandera = false;
                    TxtCosto.focus();
        }
        if((Bandera) && (TxtInstalacion.value <= 0)) {
            LblResultado.innerHTML = "Ingrese el costo por la instalación por metro cuadrado valido, por favor.";
                Bandera = false;
                    TxtInstalacion.focus();
        }

    return Bandera;
}

function CostoCalcular() {
    let Costo;
        Costo = parseFloat(TxtMetros.value) * parseFloat(TxtCosto.value);
        Costo += parseFloat(TxtMetros.value) * parseFloat(TxtInstalacion.value);
            Costo = Costo.toFixed(2);
                LblResultado.innerHTML = `El costo total del alfombrado es: $${Costo}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { CostoCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtMetros.value = "";
        TxtCosto.value = "";
        TxtInstalacion.value = "";
            LblResultado.innerHTML = `El costo total del alfombrado es: $ `;
                TxtMetros.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
