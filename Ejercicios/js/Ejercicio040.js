const TxtAntiguedad = document.querySelector("#TxtAntiguedad");
const TxtSalario = document.querySelector("#TxtSalario");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtAntiguedad.value === "") {
            Bandera = false;
                TxtAntiguedad.value = "0.00";
        }
        if((Bandera) && (TxtSalario.value === "")) {
            Bandera = false;
                TxtSalario.value = "0.00";
        }
        
    return Bandera;
}

function SalarioCalcular() {
    let Salario = parseFloat(TxtSalario.value);
    let Antiguedad = parseFloat(TxtAntiguedad.value);
        if((1 < Antiguedad) && (Antiguedad <= 2))
        { Salario = Salario * 1.10; }
        else if((2 < Antiguedad) && (Antiguedad <= 4))
        { Salario = Salario * 1.20; }
        else if((4 < Antiguedad) && (Antiguedad <= 8))
        { Salario = Salario * 1.30; }
        else if((8 < Antiguedad) && (Antiguedad <= 10))
        { Salario = Salario * 1.40; }
        else if((10 < Antiguedad) && (Antiguedad <= 15))
        { Salario = Salario * 1.50; }
        else if(Antiguedad > 15)
        { Salario = Salario * 2.0; }
            Salario = Salario.toFixed(2);
                LblResultado.innerHTML = `El salario del trabajador es: $${Salario}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { SalarioCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtSalario.value = "";
        TxtAntiguedad.value = "";
            LblResultado.innerHTML = `El salario del trabajador es: $`;
                TxtSalario.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
