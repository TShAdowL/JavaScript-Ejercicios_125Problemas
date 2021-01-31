const TxtEdad = document.querySelector("#TxtEdad");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtEdad.value === "") {
            Bandera = false;
                TxtEdad.value = "0.00";
        }

        if((Bandera) && (TxtEdad.value <= 0)) {
            LblResultado.innerHTML = "Ingrese una edad valida, por favor.";
                Bandera = false;
                    TxtEdad.focus();
        }
        
    return Bandera;
}

function EdificioCalcular() {
    let Edad = parseFloat(TxtEdad.value);
        if((Edad >= 16) && (Edad <= 18))
        { LblResultado.innerHTML = `El alumno sera ubicado en el edificio: A.`;}
        else if((Edad > 18) && (Edad <= 20))
        { LblResultado.innerHTML = `El alumno sera ubicado en el edificio: B.`;}
        else if((Edad > 20) && (Edad <= 25))
        { LblResultado.innerHTML = `El alumno sera ubicado en el edificio: C.`;}
        else
        { LblResultado.innerHTML = `El alumno no es aceptado.`;}
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { EdificioCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtEdad.value = "";
            LblResultado.innerHTML = `El alumno sera ubicado en el edificio: `;
                TxtEdad.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
