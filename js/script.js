//* ENTREGABLE NR 3
function ejercicioFor() {
    let numero = prompt ("Ingrese un numero del 1 al 10");
    parseInt(numero, 10)
    for (numero; numero > 0; numero--)
    alert("Clickeame " + numero + " veces más" )
}


function Login() {
  let username = prompt("Ingrese su nombre de usuario (MÍNIMO 8 CARACTERES)");
  if (username.length < 8) {
    return alert(
      "Tu usuario tiene que tener 8 carácteres mínimo, volvé a intentarlo."
    );
  } else if (username.length > 7) {
        let pin = prompt("Ingrese su PIN (MÍNIMO 6 NÚMEROS)");
        if (pin.length < 6) {
            return alert("Tu PIN tiene estar formado por 6 números");
        }
        else if (pin.length >= 6); {
            alert("Login exitoso")
        }
    }
}

//* Desafío complementario  con 3 funciones adjuntas

function esPar (num) {
    num = prompt("Ingresa un numero")
    parseInt(num, 10)
    if (num % 2 == 0){
    alert("Es par")
    }
    else {
        alert("Es impar")
    }
}

function impuestoGamer (num) {
    num = prompt("Ingresa el precio del juego que querés comprar")
    resultado = parseInt(num,10) + (parseInt(num,10) * 0.65)
    alert(resultado)
}

function promedio (a,b,c) {
    a= prompt("Ingresa primera nota")
    b= prompt("Ingresa segunda nota")
    c= prompt("Ingresa tercera nota")
    resultado = (parseInt(a,10) + parseInt(b,10) + parseInt(c,10)) / 3
    alert("Tu promedio es de " + resultado)
}
esPar()
impuestoGamer()
promedio()