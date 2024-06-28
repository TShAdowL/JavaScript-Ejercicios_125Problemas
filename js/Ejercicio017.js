const TxtHoras = document.querySelector("#TxtHoras");
const TxtSalario = document.querySelector("#TxtSalario");
const TxtBono = document.querySelector("#TxtBono");
const TxtHorasExtra = document.querySelector("#TxtHorasExtra");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtHoras.value === "")
        { TxtHoras.value = "0.00"; }
        if(TxtSalario.value === "")
        { TxtSalario.value = "0.00"; }
        if(TxtBono.value === "")
        { TxtBono.value = "0.00"; }
        if(TxtHorasExtra.value === "")
        { TxtHorasExtra.value = "0.00"; }

        if((Bandera) && (TxtHoras.value <= 0)) {
            LblResultado.innerHTML = "Ingrese las horas validas, por favor.";
                Bandera = false;
                    TxtHoras.focus();
        }
        if((Bandera) && (TxtSalario.value <= 0)) {
            LblResultado.innerHTML = "Ingrese un salario valido, por favor.";
                Bandera = false;
                    TxtSalario.focus();
        }
        if((Bandera) && (TxtBono.value < 0)) {
            LblResultado.innerHTML = "Ingrese un bono valido, por favor.";
                Bandera = false;
                    TxtBono.focus();
        }
        if((Bandera) && (TxtHorasExtra.value < 0)) {
            LblResultado.innerHTML = "Ingrese las horas extra validas, por favor.";
                Bandera = false;
                    TxtHorasExtra.focus();
        }

    return Bandera;
}

function SalarioCalcular() {
    let Salario;
        Salario = parseFloat(TxtHoras.value) * parseFloat(TxtSalario.value);
        Salario += parseFloat(TxtHorasExtra.value) * parseFloat(TxtSalario.value) * 1.5;
        Salario += parseFloat(TxtBono.value);
            Salario = Salario.toFixed(2);
                LblResultado.innerHTML = `El salario semana es de: $${Salario}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { SalarioCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtHoras.value = "";
        TxtSalario.value = "";
        TxtBono.value = "";
        TxtHorasExtra.value = "";
            LblResultado.innerHTML = `El salario semana es de: $ `;
                TxtHoras.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
