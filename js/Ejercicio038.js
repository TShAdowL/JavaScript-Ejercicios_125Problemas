const TxtGramos = document.querySelector("#TxtGramos");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtGramos.value === "")
        { TxtGramos.value = "0.00"; }

        if((Bandera) && (TxtGramos.value <= 0)) {
            LblResultado.innerHTML = "Ingrese una valor de gramos valido, por favor.";
                Bandera = false;
                    TxtGramos.focus();
        }
        
    return Bandera;
}

function EnvioCalcular() {
    let Envio = 0.00;
    let Gramos = parseFloat(TxtGramos.value);
        if(Gramos < 200) {
            if(Gramos > 20) {
                Gramos -= 20;
                Envio += 200;
                    if(Gramos > 10) {
                        Gramos -= 10;
                        Envio += 20;
                        
                        if(Gramos >= 0) 
                        { Envio += Gramos * 1.50; }
                    }
                    else
                    { Envio += Gramos * 2; }
            }
            else 
            { Envio += Gramos * 10; }
                Envio = Envio.toFixed(2);
                    LblResultado.innerHTML = `El pago por el envio debe de ser: $${Envio}`;
        }
        else
        { LblResultado.innerHTML = `Los gramos son invalidos para ser enviados.`; }
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { EnvioCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtGramos.value = "";
            LblResultado.innerHTML = `El pago por el envio debe de ser: $`;
                TxtGramos.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
