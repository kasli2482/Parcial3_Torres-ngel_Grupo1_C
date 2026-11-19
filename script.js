/*
ángel Giovanny Torres Cepeda
Grupo 1
Problema C: Factura de energía eléctrica con subsidio y contribución por estrato
*/

const TarifakWh = 900;
const consSubsistencia = 173; //kWh
const CargoMensual = 6.000;
const SubEstrato1 = 50;  //Porcentaje %
const SubEstrato2 = 40;  //Porcentaje %
const SubEstrato3 = 15;  //Porcentaje %
const ContrEstrato5 = 50;  //Porcentaje %
const ContrEstrato6 = 60;  //Porcentaje %

let numero = (prompt("Ingrese el número de estrato (1-6):"));
let consumo = (prompt("Ingrese el consumo en kWh(mayor o igual a 0):"));

//Validar que el estrato esté entre 1 y 6 y que el consumo no sea negativo. Si no se cumple, informar el error y terminar.//
function validarestrato () {
     let numero = prompt("Ingrese el numero de estrato (1-6):");
            if ( estratoingresado >= 1 && estratoingresado <= 6 ) {
            alert ("El dato ingresado es valido")}
            else {
            alert ("El dato ingresado no es valido")
        }
        return "El estrato ingresado es correcto";
}

//Calcular el consumo básico: el menor valor entre el consumo y 173//
function calcularconsbas (){
    let numero = prompt("Ingrese el consumo basico");
        if ( consumobasico <= consSubsistencia ) {
            alert ("El valor ingresado es valido")}
        else {
            alert ("El valor ingresado no es valido")
        }
        return "El consumo basico es correcto";
}

//Calcular el consumo en exceso: consumo menos consumo básico//

function calcularconsexc (){
    let consumoexceso = consumobasico - consSubsistencia;    
    return "El consumo en exceso es correcto";
}

//Calcular el valor del consumo básico y el valor del exceso, multiplicando cada uno por la tarifa.//

function calcularvalconsbas (){
    let consumobasico = consumobasico * TarifakWh;    
    return "El valor basico es correcto";
}

function calcularvalconsexceso (){
    let consumoexceso = consumoexceso * TarifakWh;
    return "El valor en exceso es correcto";
}

