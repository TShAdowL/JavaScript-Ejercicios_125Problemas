const TxtMaterias = document.querySelector("#TxtMaterias");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtMaterias.value === "")
        { TxtMaterias.value = "0.00"; }

        if((Bandera) && (TxtMaterias.value <= 0)) {
            LblResultado.innerHTML = "Ingrese la cantidad de materias correctas, por favor.";
                Bandera = false;
                    TxtMaterias.focus();
        }
        
    return Bandera;
}

function ColegiaturaCalcular() {
    let Colegiatura = 4500;
        if(parseFloat(TxtMaterias.value) <= 5)
        { Colegiatura = parseFloat(TxtMaterias.value) * 800; }
            Colegiatura = Colegiatura.toFixed(2);
                LblResultado.innerHTML = `La colegiatura es de: $${Colegiatura}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { ColegiaturaCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtMaterias.value = "";
            LblResultado.innerHTML = `La colegiatura es de: $`;
                TxtMaterias.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
