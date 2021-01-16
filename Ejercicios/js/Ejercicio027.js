const TxtEmpleado1 = document.querySelector("#TxtEmpleado1");
const TxtEmpleado2 = document.querySelector("#TxtEmpleado2");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;

        if(TxtEmpleado1.value === "") {
            LblResultado.innerHTML = "El primer nombre no debe de estar vacio.";
                Bandera = false;
                    TxtEdad.focus();
        }
        
    return Bandera;
}

function AceptadoCalcular() {
    if((TxtEmpleado1.value === "Robustiano") && (TxtEmpleado2.value !== "Carlos"))
    { LblResultado.innerHTML = `El empleado recibe regalo.`; }
    else if((TxtEmpleado1.value !== "Carlos") && (TxtEmpleado2.value === "Robustiano"))
    { LblResultado.innerHTML = `El empleado recibe regalo.`; }
    else
    { LblResultado.innerHTML = `El empleado no recibe regalo.`; }
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { AceptadoCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtEmpleado1.value = "";
        TxtEmpleado2.value = "";
            LblResultado.innerHTML = `El empleado...`;
                TxtEmpleado1.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
