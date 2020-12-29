const TxtParedes1 = document.querySelector("#TxtParedes1");
const TxtParedes2 = document.querySelector("#TxtParedes2");
const TxtCostoPintura = document.querySelector("#TxtCostoPintura");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtParedes1.value === "") {
            TxtParedes1.value = "0.00";
            Bandera = false;
        }
        if((Bandera) && (TxtParedes2.value === "")) {
            TxtParedes2.value = "0.00";
            Bandera = false;
        }
        if((Bandera) && (TxtCostoPintura.value === "")) {
            TxtCostoPintura.value = "0.00";
            Bandera = false;
        }

        if((Bandera) && (TxtParedes1.value <= 0)) {
            LblResultado.innerHTML = "Ingrese la superfie de las primeras paredes, por favor.";
                Bandera = false;
                    TxtParedes1.focus();
        }
        if((Bandera) && (TxtParedes2.value <= 0)) {
            LblResultado.innerHTML = "Ingrese la superfie de las segundas paredes, por favor.";
                Bandera = false;
                    TxtParedes2.focus();
        }
        if((Bandera) && (TxtCostoPintura.value <= 0)) {
            LblResultado.innerHTML = "Ingrese un costo valido, por favor.";
                Bandera = false;
                    TxtCostoPintura.focus();
        }

    return Bandera;
}

function CostoCalcular() {
    let Costo;
        Costo = (2 * parseFloat(TxtParedes1.value)) + (2 * parseFloat(TxtParedes2.value));
        Costo = Costo / 3;
        Costo = Costo * parseFloat(TxtCostoPintura.value);
            Costo = Costo.toFixed(2);
                LblResultado.innerHTML = `El costo por pintar las paredes es: $${Costo}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { CostoCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtParedes1.value = "";
        TxtParedes2.value = "";
        TxtCostoPintura.value = "";
            LblResultado.innerHTML = `El costo por pintar las paredes es: $ `;
                TxtParedes1.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
