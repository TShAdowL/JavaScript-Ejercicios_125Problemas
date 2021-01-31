const TxtConsumo = document.querySelector("#TxtConsumo");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtConsumo.value === "") {
            Bandera = false;
                TxtConsumo.value = "0.00";
        }

        if((Bandera) && (TxtConsumo.value <= 0)) {
            LblResultado.innerHTML = "Ingrese la cantidad de materias correctas, por favor.";
                Bandera = false;
                    TxtConsumo.focus();
        }
        
    return Bandera;
}

function ConsumoCalcular() {
    let KWH = parseFloat(TxtConsumo.value);
    let Consumo = 0;
        if(KWH > 65) {
            KWH -= 65;
            Consumo = KWH * 4;
            KWH = 65;
        }
        if((KWH >= 12) && (KWH <= 65)) {
            KWH -= 11;
            Consumo += KWH * 2;
            KWH = 11;
        }
        if(KWH < 12)
        { Consumo += KWH * 10; }
            Consumo = Consumo.toFixed(2);
                LblResultado.innerHTML = `El costo del consumo de eléctrico es de: $${Consumo}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { ConsumoCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtConsumo.value = "";
            LblResultado.innerHTML = `El costo del consumo de eléctrico es de: $`;
                TxtConsumo.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
