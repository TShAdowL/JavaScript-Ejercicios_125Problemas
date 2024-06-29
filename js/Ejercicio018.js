const TxtNombre = document.querySelector("#TxtNombre");
const TxtBalones = document.querySelector("#TxtBalones");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtBalones.value === "")
        { TxtBalones.value = "0.00"; }
        
        if((Bandera) && (TxtNombre.value === "")) {
            LblResultado.innerHTML = "Ingrese el nombre del cliente, por favor.";
            Bandera = false;
        }

        if((Bandera) && (TxtBalones.value < 0)) {
            LblResultado.innerHTML = "Ingrese el número de balones valido, por favor.";
                Bandera = false;
                    TxtBalones.focus();
        }

    return Bandera;
}

function TotalCalcular() {
    let Cliente;
    let Total;
    let Balones;
        Cliente = TxtNombre.value;
        Balones = parseFloat(TxtBalones.value);
            if(Balones < 7)
            { Total = 50; }
            else
            { Total = 40;}
        Total = Total * Balones;
            Total = Total.toFixed(2);
                LblResultado.innerHTML = `El Sr. ${Cliente} compró ${Balones} balones y pagó $${Total}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { TotalCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtNombre.value = "";
        TxtBalones.value = "";
            LblResultado.innerHTML = `El Sr. ____ compró __ balones y pagó $__`;
                TxtNombre.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
