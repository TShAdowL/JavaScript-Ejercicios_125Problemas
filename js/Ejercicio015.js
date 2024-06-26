const TxtManoObra = document.querySelector("#TxtManoObra");
const TxtMaterial = document.querySelector("#TxtMaterial");
const TxtTabiques = document.querySelector("#TxtTabiques");
const TxtTabiquesCosto = document.querySelector("#TxtTabiquesCosto");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtManoObra.value === "")
        { TxtManoObra.value = "0.00"; }
        if(TxtMaterial.value === "")
        { TxtMaterial.value = "0.00"; }
        if(TxtTabiques.value === "")
        { TxtTabiques.value = "0.00"; }
        if(TxtTabiquesCosto.value === "")
        { TxtTabiquesCosto.value = "0.00"; }

        if((Bandera) && (TxtManoObra.value <= 0)) {
            LblResultado.innerHTML = "Ingrese el costo de la mano de obra valido, por favor.";
                Bandera = false;
                    TxtParedes1.focus();
        }
        if((Bandera) && (TxtMaterial.value <= 0)) {
            LblResultado.innerHTML = "Ingrese el costo del materian valido, por favor.";
                Bandera = false;
                    TxtMaterial.focus();
        }
        if((Bandera) && (TxtTabiques.value <= 0)) {
            LblResultado.innerHTML = "Ingrese el número de tabiques valido, por favor.";
                Bandera = false;
                    TxtTabiques.focus();
        }
        if((Bandera) && (TxtTabiquesCosto.value <= 0)) {
            LblResultado.innerHTML = "Ingrese el costo de tabique valido, por favor.";
                Bandera = false;
                    TxtTabiquesCosto.focus();
        }

    return Bandera;
}

function CostoCalcular() {
    let Costo;
        Costo = parseFloat(TxtManoObra.value) * (2.40 * 4.20);
        Costo += parseFloat(TxtMaterial.value) * (2.40 * 4.20);
        Costo += parseFloat(TxtTabiques.value) * parseFloat(TxtTabiquesCosto.value);
            Costo = Costo.toFixed(2);
                LblResultado.innerHTML = `El costo total del muro es: $${Costo}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { CostoCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtManoObra.value = "";
        TxtMaterial.value = "";
        TxtTabiques.value = "";
        TxtTabiquesCosto.value = "";
        TxtCostoPintura.value = "";
            LblResultado.innerHTML = `El costo total del muro es: $ `;
                TxtManoObra.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
