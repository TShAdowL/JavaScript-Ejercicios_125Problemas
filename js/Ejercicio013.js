const TxtLado1 = document.querySelector("#TxtLado1");
const TxtLado2 = document.querySelector("#TxtLado2");
const TxtLado3 = document.querySelector("#TxtLado3");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtLado1.value === "")
        { TxtLado1.value = "0.00"; }
        if(TxtLado2.value === "")
        { TxtLado2.value = "0.00"; }
        if(TxtLado3.value === "")
        { TxtLado3.value = "0.00"; }

        if((Bandera) && (TxtLado1.value <= 0)) {
            LblResultado.innerHTML = "Ingrese el primer lado valido, por favor.";
                Bandera = false;
                    TxtLado1.focus();
        }
        if((Bandera) && (TxtLado2.value <= 0)) {
            LblResultado.innerHTML = "Ingrese el segundo lado valido, por favor.";
                Bandera = false;
                    TxtLado2.focus();
        }
        if((Bandera) && (TxtLado3.value <= 0)) {
            LblResultado.innerHTML = "Ingrese el tercer lado valido valido, por favor.";
                Bandera = false;
                    TxtLado3.focus();
        }

    return Bandera;
}

function AreaCalcular() {
    let Area;
    let S;
        S = parseFloat(TxtLado1.value) + parseFloat(TxtLado2.value) + parseFloat(TxtLado3.value);
        S = S / 2;
        Area = S * (S - parseFloat(TxtLado1.value)) * (S - parseFloat(TxtLado2.value)) * (S - parseFloat(TxtLado3.value));
        Area = Math.sqrt(Area);
            Area = Area.toFixed(2);
                LblResultado.innerHTML = `El área del terreno es: ${Area}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { AreaCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtLado1.value = "";
        TxtLado2.value = "";
        TxtLado3.value = "";
            LblResultado.innerHTML = `El área del terreno es: `;
                TxtLado1.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
