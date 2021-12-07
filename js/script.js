//* ENTREGABLE NR 5 (OBJETOS) [lo puse en una función para que no se trigeree en el liveserver mientras adjunto la entrega 6!]
function Login() {
    function Usuario (username, password, edad) {
        this.username = username;
        this.password = password;
        this.edad = edad;
    }
    const usuario1 = new Usuario(prompt("Ingresa un usuario"), prompt("Ingresa una contraseña"), prompt("Ingresa tu edad"));
    console.log(usuario1)
    console.log("Tu usuario es " + usuario1.username);
    console.log("Tu password es " + usuario1.password);
}

//* ENTREGABLE NR 6 (INCORPORAR ARRAYS) + Array con interacción de objetos
 
//* Array que ordena objetos según su edad (1ER Y 2DO DESAFIO DE LA ENTREGA)

const listaPersonas = [
    {nombre: "Marcos", edad: 24},
    {nombre: "Beatriz", edad: 72},
    {nombre: "Juan", edad: 20},
    {nombre: "Ana", edad: 50},
];
function comparador (a,b) {
    if (a.edad < b.edad){
        return -1;
    }
    if (a.edad > b.edad){
        return 1;
    }
    return 0;
}
listaPersonas.sort(comparador)
console.log(listaPersonas)

// PRIMER ENTREGA FINAL 

function compraDeEntradas () {
    function Artista (nombre, fecha, horario, costo) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.horario = horario;
        this.costo = costo;
    }
   
    

    var seleccionEntrada = prompt("Escriba el número que le corresponde a la banda que desea ver \r\n 1. Mi Amigo Invencible\r\n 2.Las Ligas Menores \r\n 3.Los Besos")
    if (seleccionEntrada === "1") {
        let nuevoArtista = new Artista(nombre = "Mi Amigo Invencible", fecha ="05/01/2022", horario = "20:30 PM", costo = "900$")
        console.log("Usted seleccionó a " + this.nombre)
        console.log("El recital es a las " + this.horario + " el día " + this.fecha)
        console.log("Abonar " + this.costo + " antes de ingresar al establecimiento por ventanillas" )
    }
    else if (seleccionEntrada === "2") {
        let nuevoArtista = new Artista(nombre = "Las Ligas Menores", fecha = "15/01/2022", horario = "21:30 PM", costo = "900$")
        console.log("Usted seleccionó a " + this.nombre)
        console.log("El recital es a las " + this.horario + " el día " + this.fecha)
        console.log("Abonar " + this.costo + " antes de ingresar al establecimiento por ventanillas" )
    }
    else if (seleccionEntrada === "3") {
        let nuevoArtista = new Artista(nombre = "Los Besos", fecha = "18/01/2022", horario = "17:00 PM", costo = "600$")
        console.log("Usted seleccionó a " + this.nombre)
        console.log("El recital es a las " + this.horario + " el día " + this.fecha)
        console.log("Abonar " + this.costo + " antes de ingresar al establecimiento por ventanillas" )
    }
    else if (seleccionEntrada > 3 || seleccionEntrada < 1 ) {
        return console.log("Ingrese un numero válido")
    }
    }
compraDeEntradas()