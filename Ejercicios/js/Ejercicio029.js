const TxtNumero1 = document.querySelector("#TxtNumero1");
const TxtNumero2 = document.querySelector("#TxtNumero2");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtNumero1.value === "") {
            TxtNumero1.value = "0.00";
            Bandera = false;
        }
        if((Bandera) && (TxtNumero2.value === "")) {
            TxtNumero2.value = "0.00";
            Bandera = false;
        }
        
    return Bandera;
}

function RestaCalcular() {
    let Numero1;
    let Numero2;
    let Resultado;
        Numero1 = parseFloat(TxtNumero1.value);
        Numero2 = parseFloat(TxtNumero2.value);
            if(Numero1 > Numero2)
            { Resultado = Numero1 - Numero2; }
            else
            { Resultado = Numero2 - Numero1; }
                Resultado = Resultado.toFixed(2);
                    LblResultado.innerHTML = `El resultado es ${Resultado}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { RestaCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtNumero1.value = "";
        TxtNumero2.value = "";
            LblResultado.innerHTML = `El resultado es...`;
                TxtNumero1.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
