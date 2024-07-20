const TxtHectareas = document.querySelector("#TxtHectareas");
const RadioHierbas = document.querySelector("#Hierbas");
const RadioLangostas = document.querySelector("#Langostas");
const RadioGusanos = document.querySelector("#Gusanos");
const RadioTodo = document.querySelector("#Todo");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");


function DatosValidar() {
    let Bandera = true;
        if(TxtHectareas.value === "")
        { TxtHectareas.value = "0.00"; }

        if((Bandera) && (TxtHectareas.value <= 0)) {
            LblResultado.innerHTML = "Ingrese una edad valida, por favor.";
                Bandera = false;
                    TxtEdad.focus();
        }
        
    return Bandera;
}

function FumigacionCalcular() {
    let CostoFumigacion;
    let Hectareas = parseFloat(TxtHectareas.value);
        if(RadioHierbas.checked)
        { CostoFumigacion = 50; }
        else if(RadioLangostas.checked)
        { CostoFumigacion = 80; }
        else if(RadioGusanos.checked)
        { CostoFumigacion = 100; }
        else
        { CostoFumigacion = 200; }
            CostoFumigacion = CostoFumigacion * Hectareas;
                if(Hectareas > 500)
                { CostoFumigacion -= CostoFumigacion * 0.05; }
                if(CostoFumigacion > 5000)
                { CostoFumigacion -= ((CostoFumigacion - 5000) * 0.10); }
                    CostoFumigacion = CostoFumigacion.toFixed(2);
                        LblResultado.innerHTML = `El precio de la fumigación es: $${CostoFumigacion}`;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        if(DatosValidar())
        { FumigacionCalcular();}
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtHectareas.value = "";
            LblResultado.innerHTML = `El precio de la fumigación es: $`;
                TxtHectareas.focus();
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();    
});
