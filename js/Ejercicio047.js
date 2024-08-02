const TxtSalario = document.querySelector("#TxtSalario");
const BtnCalcular = document.querySelector("#BtnCalcular");
const BtnLimpiar = document.querySelector("#BtnLimpiar");
const LblResultado = document.querySelector("#LblResultado");
let Salarios = [];
let SalarioMayor = 0;

function DatosValidar() {
    if(TxtSalario.value === "")
    { TxtAltura.value = "0.00"; }
}

function AgregarSalario() {
    let Salario = parseFloat(TxtSalario.value);

    Salarios.push(Salario);

        if (Salario > 2500)
        { SalarioMayor++; }
        
        Mensaje = 'Los trabajadores que ganan más de $2.500 quincenales son ' + SalarioMayor;
        
        LblResultado.innerHTML = Mensaje;
}

function BtnCalcularClick(event) {
    event.preventDefault();
        DatosValidar();
        AgregarSalario();
}

function BtnLimpiarClick(event) {
    event.preventDefault();
        TxtSalario.value = "0.00";
        LblResultado.innerHTML = `Los trabajadores que ganan más de $2.500 quincenales son...`;
}

function CargarEventos() {
    BtnCalcular.addEventListener("click", BtnCalcularClick);
    BtnLimpiar.addEventListener("click", BtnLimpiarClick);
}

document.addEventListener("DOMContentLoaded", () => {
    CargarEventos();
});
