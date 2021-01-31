const TxtSalario = document.querySelector("#TxtSalario");
const TxtVentas = document.querySelector("#TxtVentas");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtSalario.value === "") {
            Bandera = false;
                TxtSalario.value = "0.00";
        }
        if((Bandera) && (TxtVentas.value === ""))
        { TxtVentas.value = "0.00"; }

        if((Bandera) && (TxtSalario.value <= 0)) {
            LblResultado.innerHTML = "Ingrese una salario valido, por favor.";
                Bandera = false;
                    TxtSalario.focus();
        }
        if((Bandera) && (TxtVentas.value < 0)) {
            LblResultado.innerHTML = "Ingrese el total de las ventas validas, por favor.";
                Bandera = false;
                    TxtVentas.focus();
        }
        
    return Bandera;
}

function SalarioCalcular() {
    let Ventas = parseFloat(TxtVentas.value);
    let Salario = parseFloat(TxtSalario.value);
        if(Ventas <= 20000)
        { Ventas = Salario * 0.10; }
        else if((Ventas > 20000) && (Ventas <= 50000))
        { Ventas = Salario * 0.20; }
        else if((Ventas > 50000) && (Ventas <= 100000))
        { Ventas = Salario * 0.50; }
        else
        { Ventas = Salario * 0.80; }
            Salario += Ventas;
            Salario = Salario.toFixed(2);
                LblResultado.innerHTML = `El salario del empleado es: $${Salario}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { SalarioCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtEdad.value = "";
            LblResultado.innerHTML = `El salario del empleado es: $`;
                TxtEdad.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
