function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var opciones = ["piedra", "papel", "tijera"];
var valores = [0,1,2];
var boton = document.getElementById("boton");
var usuario;
var contador = 1 ;

window.setInterval("vidas()",30);

function actu(){
  document.getElementById('contador').innerHTML = contador;
}
function quest2() {
	location.reload(true);
}
function quest() {
  var maquina = opciones[aleatorio(0,2)];
  var usuario = prompt("piedra, papel o tijera").toLowerCase();
	if (usuario == "") {
		alert("Si no pones nada es imposible jugar...")
	} else if ((usuario == "piedra") || (usuario == "papel") || (usuario == "tijera")) {
		alert("El script de Leal ha escogido"+" "+maquina);
		if (maquina == usuario) {
				empate();
			}
			 	if (usuario == "piedra") {
					if (maquina == "tijera") {
						victoria();
						contador++
						comprobarc();
					} else if (maquina == "papel") {
						derrota();
						contador--
						comprobarc();
					}
			 	}
				if (usuario == "papel") {
					if (maquina == "piedra") {
						victoria();
						contador++
						comprobarc();
					} else if (maquina == "tijera") {
						derrota();
						contador--
						comprobarc();
					}
			}
			if (usuario == "tijera") {
				if (maquina == "papel") {
					victoria();
					contador++
					comprobarc();
				} else if (maquina == "piedra") {
					derrota();
					contador--
					comprobarc();
			  }
		}
	} else {
		alert("Escoge entre piedra, papel o tijera")
	}
 }

function empate() {
	var imgempate = document.getElementById("img1").src="https://media3.giphy.com/media/WsRFoTvgBjA7zE5EZi/giphy.gif";
	removebt();
	window.setInterval("refrescarpax()",3000);
}
function victoria() {
	var imgvictoria = document.getElementById("img1").src="https://img.wattpad.com/cc352d4796366ce38ba76e18c826ede42e466ce3/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f41625151337932436f75796937673d3d2d3433363537383436332e313463656465353831376261316137663434333435313437323736372e676966";
	removebt();
	window.setInterval("refrescarpax()",3000);
;
}
function derrota() {
	var imgderrota = document.getElementById("img1").src="https://img.wattpad.com/94ad44e36139f25cef4402a45db9a9999f742d1c/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5673646c757834706c6f415649513d3d2d3235333935383132372e313434633466306132376666336331362e676966";
	removebt();
	window.setInterval("refrescarpax()",3000);
}
 function refrescarpax() {
  document.getElementById("img1").src="https://www.omega-level.net/wp-content/uploads/2013/09/fight.gif";
	boton.style.display = "block"
 }
function removebt() {
	boton.style.display = "none"
}
function comprobarc(){
      if (contador === 0){
        alert('Te has quedado sin vidas </3');
				contador === 1
      } else if (contador == 3) {
        alert('Enhorabuena has conseguido <3 <3 <3 ');
      }
		}
function vidas() {
	document.getElementById('contador').innerHTML = ""
	for (var i = 0; i < contador; i++) {
		var img = document.createElement("img");
		img.src = "img/corazon.png";
		var src = document.getElementById("contador");
		src.appendChild(img);
	}
}
