//El Instituto Sudamericano ha definido los criterios para otorgar las Becas Estudiantiles,
//especificando que el estudiante debe mantener un promedio igual o superior a 8.5
// y que los ingresos mensuales familiares no superen los 600 dólares. 
//Se requiere un programa que verifique estas condiciones ingresando la información correspondiente y muestre un mensaje de "Aprobado" o "Desaprobado".

let promedio = Number(prompt("ingrese su promedio academico"));

let ingresosMensual =Number(prompt("¿Cuanto es su ingreso mensual?"));

if(promedio>=8.5 && ingresosMensual <= 600)
{
    alert("Aprobado para la Beca");
}else{
    alert("Desaprobado para la Beca");
}
