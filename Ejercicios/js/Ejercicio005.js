const TxtAutosVendidos = document.querySelector("#TxtAutosVendidos");
const TxtAutosTotal = document.querySelector("#TxtAutosTotal");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");

function DatosValidar() {
    let Bandera = true;
        if(TxtAutosVendidos.value === "") {
            LblResultado.innerHTML = "Ingrese el número de autos vendidos, por favor.";
                Bandera = false;
                    TxtAutosVendidos.focus();
        }
        if((Bandera) && (TxtAutosTotal.value === "")) {
            LblResultado.innerHTML = "Ingrese el monto total de los autos vendidos, por favor.";
                Bandera = false;
                    TxtAutosTotal.focus();
        }

        if((Bandera) && (TxtAutosVendidos.value < 0)) {
            LblResultado.innerHTML = "Ingrese un número de autos validos, por favor.";
                Bandera = false;
                    TxtAutosVendidos.focus();
        }
        if((Bandera) && (TxtAutosTotal.value < 0)) {
            LblResultado.innerHTML = "Ingrese el monto valido del total de los autos vendidos, por favor.";
                Bandera = false;
                    TxtAutosTotal.focus();
        }

    return Bandera;
}

function SalarioCalcular() {
    let Salario;
        Salario = parseFloat(TxtAutosTotal.value) * 0.05;
        Salario += parseFloat(TxtAutosVendidos.value) * 150;
        Salario += 3200;
            Salario = Salario.toFixed(2);
                LblResultado.innerHTML = `El salario mensual del vendedor es: $${Salario}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { SalarioCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtAutosVendidos.value = "";
        TxtAutosTotal.value = "";
        LblResultado.innerHTML = `El salario mensual del vendedor es: $`;
            TxtAutosVendidos.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
