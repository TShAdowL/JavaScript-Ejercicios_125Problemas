const TxtSillas = document.querySelector("#TxtSillas");
const TxtVentas = document.querySelector("#TxtVentas");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtSillas.value === "") {
            TxtSillas.value = "0.00";
            Bandera = false;
        }
        if((Bandera) && (TxtVentas.value === "")) {
            TxtVentas.value = "0.00";
            Bandera = false;
        }

        if((Bandera) && (TxtSillas.value < 0)) {
            LblResultado.innerHTML = "Ingrese un número valido de sillas, por favor.";
                Bandera = false;
                    TxtSillas.focus();
        }
        if((Bandera) && (TxtVentas.value < 0)) {
            LblResultado.innerHTML = "Ingrese un número valido de venta del día, por favor.";
                Bandera = false;
                    TxtVentas.focus();
        }

    return Bandera;
}

function SalarioCalcular() {
    let Salario;
    let Sillas;
    let Ventas;
        Sillas = parseFloat(TxtSillas.value);
        Ventas = parseFloat(TxtVentas.value);
            if(Sillas > 5) {
                Salario = 60;
                Ventas = Ventas * 0.02;
            }
            else {
                Salario = 50;
                Ventas = 0;
            }
        Salario = Sillas * Salario ;
        Salario += Ventas;
            Salario = Salario.toFixed(2);
                LblResultado.innerHTML = `Salario diario: $${Salario}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { SalarioCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtSillas.value = "";
        TxtVentas.value = "";
            LblResultado.innerHTML = `Salario diario: $`;
                TxtSillas.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
