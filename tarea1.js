//Una empresa está en búsqueda de un conductor y ha establecido dos requisitos fundamentales:
// el candidato debe tener 25 años o más, además de poseer una licencia profesional.
// Tu tarea es crear un programa que almacene estos dos datos en dos variables (una de tipo number y la otra boolean) y validarlos usando una sentencia if.
// Si el candidato cumple con ambos requisitos, mostrará el mensaje "Apto", y si no, mostrará "No apto".

let ege = Number(prompt("ingrese su edad:"));

let licenciaProfecional = prompt("¿usted posee una licencia profecional? (si/no)");


if(licenciaProfecional == "si" && licenciaProfecional == "si"){
    (licenciaProfecional =Boolean(true));
}

else {

(licenciaProfecional =Boolean(false));
}

if ((ege >=25) && (licenciaProfecional))
{
    
    alert ("Apto");
}

else {
    alert ("No apto");
}
