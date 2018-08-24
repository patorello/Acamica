//Declaración de variables

var nombreUsuario = ("Patricio Torello");
var saldoCuenta = 3800;
var limiteExtraccion = 1000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar

function sumarDinero (dinero){
	var suma = saldoCuenta + dinero;
	saldoCuenta = suma;
}

function restarDinero (dinero){
	var resta = saldoCuenta - dinero;
	saldoCuenta = resta;
}

function cambiarLimiteDeExtraccion() {

}

function extraerDinero() {

}

function depositarDinero() {
	var dineroDepositado = parseInt(prompt("Cuanto dinero desea depositar?"));
	sumarDinero (dineroDepositado);
	return actualizarSaldoEnPantalla(); 
}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}