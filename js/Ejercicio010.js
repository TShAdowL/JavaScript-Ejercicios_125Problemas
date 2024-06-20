const TxtVelocidad1 = document.querySelector("#TxtVelocidad1");
const TxtVelocidad2 = document.querySelector("#TxtVelocidad2");
const TxtVelocidad3 = document.querySelector("#TxtVelocidad3");
const TxtVelocidad4 = document.querySelector("#TxtVelocidad4");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtVelocidad1.value === "")
        { TxtVelocidad1.value = "0.00"; }
        if(TxtVelocidad2.value === "")
        { TxtVelocidad2.value = "0.00"; }
        if(TxtVelocidad3.value === "")
        { TxtVelocidad3.value= "0.00"; }
        if(TxtVelocidad4.value === "")
        { TxtVelocidad4.value= "0.00"; }

        if((Bandera) && (TxtVelocidad1.value <= 0)) {
            LblResultado.innerHTML = "Ingrese una velocidad valida, por favor.";
                Bandera = false;
                    TxtVelocidad1.focus();
        }
        if((Bandera) && (TxtVelocidad2.value <= 0)) {
            LblResultado.innerHTML = "Ingrese una velocidad valida, por favor.";
                Bandera = false;
                    TxtVelocidad2.focus();
        }
        if((Bandera) && (TxtVelocidad3.value <= 0)) {
            LblResultado.innerHTML = "Ingrese una velocidad valida, por favor.";
                Bandera = false;
                    TxtVelocidad3.focus();
        }
        if((Bandera) && (TxtVelocidad4.value <= 0)) {
            LblResultado.innerHTML = "Ingrese una velocidad valida, por favor.";
                Bandera = false;
                    TxtVelocidad4.focus();
        }

    return Bandera;
}

function VelocidadCalcular() {
    let Velocidad;
        Velocidad = parseFloat(TxtVelocidad1.value) + parseFloat(TxtVelocidad2.value) + parseFloat(TxtVelocidad3.value) + parseFloat(TxtVelocidad4.value);
        Velocidad = Velocidad / 4;
            Velocidad = Velocidad.toFixed(2);
                LblResultado.innerHTML = `La velocidad promedio es: ${Velocidad}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { VelocidadCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtVelocidad1.value = "";
        TxtVelocidad2.value = "";
        TxtVelocidad3.value = "";
        TxtVelocidad4.value = "";
            LblResultado.innerHTML = `La velocidad promedio es: `;
                TxtHamburguesaNormal.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
