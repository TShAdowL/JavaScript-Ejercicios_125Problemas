const TxtAltura = document.querySelector("#TxtAltura");
const TxtBase = document.querySelector("#TxtBase");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    if(TxtAltura.value === "")
    { TxtAltura.value = "0.00"; }

    if(TxtBase == "")
    { TxtBase.value = "0.00"; }
}

function AreaCalcular() {
    let Altura = parseFloat(TxtAltura.value);
    let Base = parseFloat(TxtBase.value);
    let Area = 0.00;
    let Mensaje = '';
        if(Altura > 0) {
            if(Base > 0) {
                Area = (Altura * Base) / 2;
                Mensaje = `El área del triángulo es: ${Area}`;
            }
            else {
                Mensaje = 'Ingrese una base válida.';
                    TxtBaseTxtAltura.focus();
            }
        }
        else{
            Mensaje = 'Ingrese una altura válida.';
                TxtAltura.focus();
        }
        
            LblResultado.innerHTML = Mensaje;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        DatosValidar();
        AreaCalcular();
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtAltura.value = "";
        TxtBase.value = "";
            LblResultado.innerHTML = `El area del triángulo es: `;
                TxtAltura.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
