const TxtEmpleado1 = document.querySelector("#TxtEmpleado1");
const TxtFaltas1 = document.querySelector("#TxtFaltas1");
const TxtEmpleado2 = document.querySelector("#TxtEmpleado2");
const TxtFaltas2 = document.querySelector("#TxtFaltas2");
const TxtEmpleado3 = document.querySelector("#TxtEmpleado3");
const TxtFaltas3 = document.querySelector("#TxtFaltas3");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtFaltas1.value === "")
        { TxtFaltas1.value = "0.00"; }
        if(TxtFaltas2.value === "")
        { TxtFaltas2.value = "0.00"; }
        if(TxtFaltas3.value === "")
        { TxtFaltas3.value = "0.00"; }

        if((Bandera) && (TxtEmpleado1.value === "")) {
            LblResultado.innerHTML = "Ingrese el nombre del empleado 1, por favor.";
                Bandera = false;
                    TxtEmpleado1.focus();
        }
        if((Bandera) && (TxtFaltas1.value < 0)) {
            LblResultado.innerHTML = "Ingrese un número de faltas 1 validas, por favor.";
                Bandera = false;
                    TxtFaltas1.focus();
        }
        if((Bandera) && (TxtEmpleado2.value === "")) {
            LblResultado.innerHTML = "Ingrese el nombre del empleado 2, por favor.";
                Bandera = false;
                    TxtEmpleado2.focus();
        }
        if((Bandera) && (TxtFaltas2.value < 0)) {
            LblResultado.innerHTML = "Ingrese un número de faltas 2 validas, por favor.";
                Bandera = false;
                    TxtFaltas2.focus();
        }
        if((Bandera) && (TxtEmpleado3.value === "")) {
            LblResultado.innerHTML = "Ingrese el nombre del empleado 3, por favor.";
                Bandera = false;
                    TxtEmpleado3.focus();
        }
        if((Bandera) && (TxtFaltas3.value < 0)) {
            LblResultado.innerHTML = "Ingrese un número de faltas 3 validas, por favor.";
                Bandera = false;
                    TxtFaltas3.focus();
        }
        
    return Bandera;
}

function AceptadoCalcular() {
    let Faltas1;
    let Faltas2;
    let Faltas3;
        Faltas1 = parseFloat(TxtFaltas1.value);
        Faltas2 = parseFloat(TxtFaltas2.value);
        Faltas3 = parseFloat(TxtFaltas3.value);
            if((Faltas1 < Faltas2) && (Faltas1 < Faltas3))
            { LblResultado.innerHTML = `El empleado ${TxtEmpleado1.value} ganó el premio “Honor al Mejor” por haber faltado solo ${Faltas1} días.`; }
            else if((Faltas2 < Faltas1) && (Faltas2 < Faltas3))
            { LblResultado.innerHTML = `El empleado ${TxtEmpleado2.value} ganó el premio “Honor al Mejor” por haber faltado solo ${Faltas2} días.`; }
            else if((Faltas3 < Faltas1) && (Faltas3 < Faltas2))
            { LblResultado.innerHTML = `El empleado ${TxtEmpleado3.value} ganó el premio “Honor al Mejor” por haber faltado solo ${Faltas3} días.`; }
            else
            { LblResultado.innerHTML = `El empleado ___ ganó el premio “Honor al Mejor” por haber faltado solo ___ días.`; }
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { AceptadoCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtEmpleado1.value = "";
        TxtFaltas1.value = "";
        TxtEmpleado2.value = "";
        TxtFaltas2.value = "";
        TxtEmpleado3.value = "";
        TxtFaltas3.value = "";
            LblResultado.innerHTML = `El empleado ___ ganó el premio “Honor al Mejor” por haber faltado solo ___ días.`;
                TxtEmpleado1.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
