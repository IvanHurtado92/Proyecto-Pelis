let texto = () => document.getElementById("txt1").innerText = 'Come caca'

let comando = "<p>Hola</p>"

let prueba = () => document.getElementById('cuerpo').innerHTML += comando

let limpiar = () => document.getElementById('cuerpo').innerHTML = ''

let nalga = prompt('Dime tu nombre')
// alert(nalga)

let cambiarDato = () => document.getElementById('txt2').innerHTML = nalga
