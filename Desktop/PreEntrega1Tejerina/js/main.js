let puntajefinal = 0;
function pregunta1() {
    let respuesta1 = prompt("cual es el apellido del mejor jugador de futbol de la historia?(messi maradona o pele");
    if (respuesta1 == "messi") {
        alert("Sin dudas quien mas si no?");
        puntajefinal = (puntajefinal + 1);
        console.log(puntajefinal);
    }
    else if (respuesta1 == "maradona") {
        alert("No es lo que esperaba pero porsupuesto que vale aguante el diego");
        puntajefinal = (puntajefinal + 1);
        console.log(puntajefinal);
    }
    else if (respuesta1 == "pele") {
        alert("en serio dijiste pele? anda, andaa paya bobo!");
    }
};
function pregunta2() {
    let año1;
    let año2;
    let año3;
    año1 = prompt("ingrese los años en los que argentina gano la copa mundial de futbol, 2 digitos");
    año2 = prompt("ingrese otro año, 2 digitos");
    año3 = prompt("ingrese otro año, 2 digitos");
    let respuesta2 = (año1 + año2 + año3);
    if (respuesta2 = 186) {
        alert("parece que algo sabes");
        puntajefinal = (puntajefinal +1);
        console.log(puntajefinal);
    }
    else {
        alert("flashaste cualquiera");
    }
}
console.log("empezamos");
pregunta1();
pregunta2();