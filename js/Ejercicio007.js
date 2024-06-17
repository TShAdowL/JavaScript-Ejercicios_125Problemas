const TxtCosto = document.querySelector("#TxtCosto");
const TxtHectareas = document.querySelector("#TxtHectareas");
const TxtHectareasSembradas = document.querySelector("#TxtHectareasSembradas");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");

function DatosValidar() {
    let Bandera = true;
        if(TxtCosto.value === "") {
            LblResultado.innerHTML = "Ingrese el costo por hectárea, por favor.";
                Bandera = false;
                    TxtCosto.focus();
        }
        if((Bandera) && (TxtHectareas.value === "")) {
            LblResultado.innerHTML = "Ingrese el total de las hectáreas, por favor.";
                Bandera = false;
                    TxtHectareas.focus();
        }
        if((Bandera) && (TxtHectareasSembradas.value === "")) {
            LblResultado.innerHTML = "Ingrese el total de las hectáreas sembradas, por favor.";
                Bandera = false;
                    TxtHectareasSembradas.focus();
        }

        if((Bandera) && (TxtCosto.value < 0)) {
            LblResultado.innerHTML = "Ingrese un costo por hectárea valido, por favor.";
                Bandera = false;
                    TxtCosto.focus();
        }
        if((Bandera) && (TxtHectareas.value < 0)) {
            LblResultado.innerHTML = "Ingrese el monto valido del total de los autos vendidos, por favor.";
                Bandera = false;
                    TxtHectareas.focus();
        }
        if((Bandera) && (TxtHectareasSembradas.value < 0)) {
            LblResultado.innerHTML = "Ingrese el monto valido del total de los autos vendidos, por favor.";
                Bandera = false;
                    TxtHectareasSembradas.focus();
        }

    return Bandera;
}

function PolizaCalcular() {
    let Poliza;
        Poliza = parseFloat(TxtCosto.value) * 0.35;
        Poliza = Poliza * parseFloat(TxtHectareas.value);
        Poliza = Poliza * parseFloat(TxtHectareasSembradas.value);
            Poliza = Poliza.toFixed(2);
                LblResultado.innerHTML = `El costo total de la póliza es: $${Poliza}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { PolizaCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtCosto.value = "";
        TxtHectareas.value = "";
        TxtHectareasSembradas.value = "";
        LblResultado.innerHTML = `El costo total de la póliza es: $`;
            TxtCosto.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
