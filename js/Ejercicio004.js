const TxtHorasTrabajadas = document.querySelector("#TxtHorasTrabajadas");
const TxtHorasSalario = document.querySelector("#TxtHorasSalario");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");

function DatosValidar() {
    let Bandera = true;
        if(TxtHorasTrabajadas.value === "") {
            LblResultado.innerHTML = "Ingrese las horas, por favor.";
                Bandera = false;
                    TxtHorasTrabajadas.focus();
        }
        if((Bandera) && (TxtHorasSalario.value === "")) {
            LblResultado.innerHTML = "Ingrese el salario, por favor.";
                Bandera = false;
                    TxtHorasSalario.focus();
        }

        if((Bandera) && (TxtHorasTrabajadas.value <= 0)) {
            LblResultado.innerHTML = "Ingrese un salario valido, por favor.";
                Bandera = false;
                    TxtHorasTrabajadas.focus();
        }
        if((Bandera) && (TxtHorasSalario.value <= 0)) {
            LblResultado.innerHTML = "Ingrese las horas validas, por favor.";
                Bandera = false;
                    TxtHorasSalario.focus();
        }

    return Bandera;
}

function SalarioCalcular() {
    let Salario;
        Salario = parseFloat(TxtHorasTrabajadas.value) * parseFloat(TxtHorasSalario.value) + 500;
            Salario = Salario.toFixed(2);
                LblResultado.innerHTML = `El salario semanal del empleado es: $${Salario}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { SalarioCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtHorasTrabajadas.value = "";
        TxtHorasSalario.value = "";
        LblResultado.innerHTML = `El salario semanal del empleado es: $`;
            TxtHorasTrabajadas.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
