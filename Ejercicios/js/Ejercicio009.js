const TxtHamburguesaNormal = document.querySelector("#TxtHamburguesaNormal");
const TxtHamburguesaQueso = document.querySelector("#TxtHamburguesaQueso");
const TxtHamburguesaDoble = document.querySelector("#TxtHamburguesaDoble");
const TxtPapas = document.querySelector("#TxtPapas");
const TxtMalteada = document.querySelector("#TxtMalteada");
const TxtRefresco = document.querySelector("#TxtRefresco");
const TxtCafe = document.querySelector("#TxtCafe");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtHamburguesaNormal.value === "") {
            TxtHamburguesaNormal.value = "0.00";
            Bandera = false;
        }
        if((Bandera) && (TxtHamburguesaQueso.value === "")) {
            TxtHamburguesaQueso.value = "0.00";
            Bandera = false;
        }
        if(TxtHamburguesaDoble.value === "") {
            TxtHamburguesaDoble.value= "0.00";
            Bandera = false;
        }
        if((Bandera) && (TxtPapas.value === "")) {
            TxtPapas.value= "0.00";
            Bandera = false;
        }
        if(TxtMalteada.value === "") {
            TxtMalteada.value= "0.00";
            Bandera = false;
        }
        if((Bandera) && (TxtRefresco.value === "")) {
            TxtRefresco.value = "0.00";
            Bandera = false;
        }
        if(TxtCafe.value === "") {
            TxtCafe.value = "0.00";
            Bandera = false;
        }

        if((Bandera) && (TxtHamburguesaNormal.value < 0)) {
            LblResultado.innerHTML = "Ingrese una cantidad valida de hamburguesas, por favor.";
                Bandera = false;
                    TxtHamburguesaNormal.focus();
        }
        if((Bandera) && (TxtHamburguesaQueso.value < 0)) {
            LblResultado.innerHTML = "Ingrese una cantidad valida de hamburguesas con queso, por favor.";
                Bandera = false;
                    TxtHamburguesaQueso.focus();
        }
        if((Bandera) && (TxtHamburguesaDoble.value < 0)) {
            LblResultado.innerHTML = "Ingrese una cantidad valida de hamburguesas doble, por favor.";
                Bandera = false;
                    TxtHamburguesaDoble.focus();
        }
        if((Bandera) && (TxtPapas.value < 0)) {
            LblResultado.innerHTML = "Ingrese una cantidad valida de ordenes de papas, por favor.";
                Bandera = false;
                    TxtPapas.focus();
        }
        if((Bandera) && (TxtMalteada.value < 0)) {
            LblResultado.innerHTML = "Ingrese una cantidad valida de malteadas, por favor.";
                Bandera = false;
                    TxtMalteada.focus();
        }
        if((Bandera) && (TxtRefresco.value < 0)) {
            LblResultado.innerHTML = "Ingrese una cantidad valida de refrescos, por favor.";
                Bandera = false;
                    TxtRefresco.focus();
        }
        if((Bandera) && (TxtCafe.value < 0)) {
            LblResultado.innerHTML = "Ingrese una cantidad valida de café, por favor.";
                Bandera = false;
                    TxtCafe.focus();
        }

    return Bandera;
}

function TotalCalcular() {
    let Total;
        Total = parseFloat(TxtHamburguesaNormal.value) * 12;
        Total += parseFloat(TxtHamburguesaQueso.value) * 15;
        Total += parseFloat(TxtHamburguesaDoble.value) * 17;
        Total += parseFloat(TxtPapas.value) * 5;
        Total += parseFloat(TxtMalteada.value) * 6;
        Total += parseFloat(TxtRefresco.value) * 5;
        Total += parseFloat(TxtCafe.value) * 6;
            Total = Total.toFixed(2);
                LblResultado.innerHTML = `El total de la cuenta es: $${Total}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { TotalCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtHamburguesaNormal.value = "";
        TxtHamburguesaQueso.value = "";
        TxtHamburguesaDoble.value = "";
        TxtPapas.value = "";
        TxtMalteada.value = "";
        TxtRefresco.value = "";
        TxtCafe.value = "";
        LblResultado.innerHTML = `El total de la cuenta es: $`;
            TxtHamburguesaNormal.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
