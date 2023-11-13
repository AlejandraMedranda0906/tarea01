// inventar un ejercicio con los tres problemas.
//En un instituto estan en etapa de inscripciones, la cual ha establecido tres requisitos:
//el estudiante debe tener ya cumplido 18 años o mas y debe tener su cedula actualizada.
//Ademas deben tener un promedio igual o superior a 8 y con un sueldo mayor o igual a 700.
//ingresar la forma en como le gustaria que lo llamen, en caso de no hacerlo se asignará automáticamente el valor predeterminado "anonymus".


let edad = Number(prompt("Ingrese su edad:"));

let cedulaActualizada = prompt("¿Usted ya actualizo su cedula? (si/no)");


if(cedulaActualizada == "si" && cedulaActualizada == "si") {
    (cedulaActualizada =Boolean(true));
}else {

(cedulaActualizada =Boolean(false));
}

if ((edad >=18) && (cedulaActualizada)) {
    
    alert ("¡Completo! continue al siguiente requisito.");
}else {
    alert ("Imconpleto");
}


let promedio = Number(prompt("ingrese su promedio academico"));

let SueldoMensual =Number(prompt("¿Ingrese cuanto es su ganancia mensual?"));

if(promedio>=8 && SueldoMensual >= 700) {
    alert("¡Completo!  continue al siguiente requisito.");
}else{
    alert("No cumple con los requisitos");
}


let apodo = prompt("Ingrese como le gustaria que lo llamen:");

if (apodo === null || apodo=== "") 
{
    apodo = "anonymus";

    alert("Te llamaremos: "+apodo);
}else {
    alert("Usted a completado todos los requisito   ¡FELICIDADES!");
 }