const TxtEstudiante = document.querySelector("#TxtEstudiante");
const TxtEstatura = document.querySelector("#TxtEstatura");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");

let Estaturas = [];
let EstaturaMayor = 0;
let EstaturaIndice = 0;

function DatosValidar() {
    if(TxtEstatura.value === "")
    { TxtEstatura.value = "0.00"; }
}

function EstaturaSalario() {
    let Estatura = 0;
    let Mensaje = 'El estudiante ____________________es el más alto, con ______ cms y es el número ______ de la lista.';

    if (TxtEstudiante.value !== "") {
        Estatura = parseFloat(TxtEstatura.value);
            Estaturas.push(Estatura);            
                EstaturaIndice++;
                    if (Estatura > EstaturaMayor)
                    { EstaturaMayor = Estatura;}
    }
    else
    { Mensaje = 'No se agrego al estudiante.'; }

    if (EstaturaIndice > 0)
    { Mensaje = 'El estudiante ' + TxtEstudiante.value +' es el más alto, con ' + Estatura + ' cms y es el número ' + EstaturaIndice + ' de la lista.'; }

        TxtEstudiante.value = "";
        TxtEstatura.value = "0.00";            
        
                LblResultado.innerHTML = Mensaje;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        DatosValidar();
        EstaturaSalario();
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtEstudiante.value = "";
        TxtEstatura.value = "0.00";
        LblResultado.innerHTML = `El estudiante ____________________es el más alto, con ______ cms y es el número ______ de la lista.`;
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();
});
