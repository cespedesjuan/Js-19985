//* ENTREGABLE NR 5 (OBJETOS) [lo puse en una función para que no se trigeree en el liveserver mientras adjunto la entrega 6!]
function Login() {
    function Usuario (username, password, edad) {
        this.username = username;
        this.password = password;
        this.edad = edad;
    }
    const usuario1 = new Usuario(prompt("Ingresa un usuario"), prompt("Ingresa una contraseña"), prompt("Ingresa tu edad"));
    console.log(usuario1)
    alert("Tu usuario es " + usuario1.username);
    alert("Tu password es " + usuario1.password);
}

//* ENTREGABLE NR 6 (INCORPORAR ARRAYS) + 1ERA ENTREGA
 
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

