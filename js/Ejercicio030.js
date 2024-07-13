const TxtCliente = document.querySelector("#TxtCliente");
const TxtDepositado = document.querySelector("#TxtDepositado");
const CbxTransaccion = document.querySelector("#CbxTransaccion");
const TxtMonto = document.querySelector("#TxtMonto");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtCliente.value === "") {
            LblResultado.innerHTML = "Ingrese el nombre del cliente, por favor.";
                Bandera = false;
                    TxtBalones.focus();
        }
        if(TxtDepositado.value === "")
        { TxtDepositado.value = "0.00"; }
        if((Bandera) && (CbxTransaccion.value === "")) {
            LblResultado.innerHTML = "Seleccione el tipo de transacción, por favor.";
                Bandera = false;
                    CbxTransaccion.focus();
        }        
        if(TxtMonto.value === "")
        { TxtMonto.value = "0.00"; }

        if((Bandera) && (TxtDepositado.value <= 0)) {
            LblResultado.innerHTML = "Ingrese la cantidad que tiene el cliente depositado, por favor.";
                Bandera = false;
                    TxtDepositado.focus();
        }
        if((Bandera) && (TxtMonto.value <= 0)) {
            LblResultado.innerHTML = "Ingrese el monto de la transacción, por favor.";
                Bandera = false;
                    TxtMonto.focus();
        }
        
    return Bandera;
}

function TransaccionCalcular() {
    let Cliente = TxtCliente.value;
    let Depositado = parseFloat(TxtDepositado.value);
    let Transaccion = CbxTransaccion.value;
    let Monto = parseFloat(TxtMonto.value);
        if(Transaccion === "D")
        { Depositado += Monto; }
        else if(Transaccion === "R")
        { Depositado -= Monto;}
            Depositado = Depositado.toFixed(2);
            LblResultado.innerHTML = `La cuenta del Sr. ${Cliente} posee $${Depositado}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { TransaccionCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtCliente.value = "";
        TxtDepositado.value = "";
        TxtMonto.value = "";
            LblResultado.innerHTML = `La cuenta del Sr. ___ posee $___`;
                TxtCliente.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
