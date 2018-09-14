//Declaración de variables

var nombreUsuario = ("Patricio Torello");
var saldoCuenta = 3800;
var limiteExtraccion = 1000;

var agua = 350;
var telefono = 425;
var luz = 210 ;
var internet = 570 ;

var cuentaAmiga1 = 1234567 ;
var cuentaAmiga2 = 7654321 ;

var codigoSeguridad = 2708;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
	iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar

function sumarDinero (dinero){
	var suma = saldoCuenta + parseInt(dinero);
	saldoCuenta = suma;
}

function restarDinero (dinero){
	var resta = saldoCuenta - parseInt(dinero);
	saldoCuenta = resta;
}


function validacion (parametro) {
	if (typeof parametro == "object" || typeof parametro == "undefined" || isNaN(parametro) || parametro === "" ) {
		return false;
	} else {
		var numeroachequear = parseInt (parametro);
		if (typeof numeroachequear == "number") {
			return true;
		} else {
			return false;
		}
	}
}


function cambiarLimiteDeExtraccion() {
	var nuevoLimite = prompt("Ingrese nuevo limite de extraccion");
	limiteExtraccion = nuevoLimite;
	if (validacion(nuevoLimite)) {
		actualizarLimiteEnPantalla();
		alert ("Nuevo limite de extracción: " + nuevoLimite);
	} else { 
		console.log("Terminamos esta function"); 
	} 
}

function haySaldoDisponible (dinero) {
	var dineroInicial = saldoCuenta;
	if (dinero < limiteExtraccion && dinero < saldoCuenta && dinero % 100 == 0){
		restarDinero (dinero);
		actualizarSaldoEnPantalla();
		alert ("Saldo anterior: " + dineroInicial + "\nDinero extraido: " + dinero + "\nSaldo actual: " + saldoCuenta );		
	} else if (dinero > saldoCuenta) {
		alert ("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
	}  else if (dinero >= limiteExtraccion) {
		alert ("La cantidad de dinero que deseas extraer, es mayor a tu limite de extracción");
	}  else if (dinero % 100 != 0) {
		alert ("Solo puedes extraer billetes de $100.");
	};  
}

function extraerDinero() {
	var dineroExtraido = prompt("Cuanto dinero desea extraer?");
	if (validacion(dineroExtraido)) {
		haySaldoDisponible (dineroExtraido);
	} else { 
		console.log("Terminamos esta function");
	};
}


function depositarDinero() {
	var dineroInicial = saldoCuenta;
	var dineroDepositado = prompt("Cuanto dinero desea depositar?");
	if (validacion (dineroDepositado)) {
		sumarDinero (dineroDepositado);
		actualizarSaldoEnPantalla();
		alert ("Saldo anterior: " + dineroInicial + "\nDinero depositado: " + dineroDepositado + "\nSaldo actual: " + saldoCuenta );
	} else {
		console.log("Terminamos esta function");
	};
}



function servicioPagar (servicio, elnombredelservicio) {
	var saldoCuentaAntesDePagarServicios = saldoCuenta;
	if (servicio < saldoCuenta) {
			restarDinero(servicio);
			actualizarSaldoEnPantalla();
			alert ("Has pagado el servicio de " + elnombredelservicio + "\n 1- Saldo Anterior: " + saldoCuentaAntesDePagarServicios + "\n 2- Dinero descontado: " + servicio + "\n 3- Saldo actual: " + saldoCuenta );
	} else {
			alert ("No hay suficiente saldo en tu cuenta para pagar este servicio.");
	};
}


function pagarServicio() {
	var servicio = window.prompt ("Ingrese el numero que corresponda con el numero que queres pagar: \n1- Agua \n2- Luz \n3- Internet \n4- Telefono" );
	if (validacion(servicio)){
		switch ( servicio ) {
			case "1":
				servicioPagar (agua, "agua");
				break;
			case "2":
				servicioPagar (luz, "luz");
				break;
			case "3":
				servicioPagar (internet, "internet");
				break;
			case "4":
				servicioPagar (telefono, "telefono");
				break;
			};
	} else {  
	    console.log("Terminamos esta function");	
	}		
}



function transferirDinero() {
	var dineroInicial = saldoCuenta;
	var dineroTransferido = prompt("Cuanto dinero desea transferir?");
	if (validacion(dineroTransferido)) {
		if (dineroTransferido <= dineroInicial) {
			var cuentaDestino = prompt("A que nro de cuenta desea transferir?");
			if (cuentaDestino == cuentaAmiga1 || cuentaDestino == cuentaAmiga2) {
				restarDinero(dineroTransferido);
				actualizarSaldoEnPantalla();
				alert ("Se han transferido " + dineroTransferido + "\nCuenta destino: " + cuentaDestino );
			} else {
				alert ("Solo puede transferirse dinero a una cuenta amiga.");
			}
		} else {
			alert("No puede transferirse esa cantidad de dinero.");
		}
	} else {
		console.log("Terminamos esta function");
	}	
	
}



function iniciarSesion() {
	var inicioSesion = prompt("Ingrese el codigo de seguridad de su cuenta");
	if (inicioSesion == codigoSeguridad) {
		alert("Bienvenido Patricio Torello, ya puedes comenzar a hacer operaciones.");
	} else {
		var bloquearSaldo = 0;
		saldoCuenta = bloquearSaldo;
		actualizarSaldoEnPantalla();
		alert("Tu dinero ha sido retenido por razones de seguridad");
	}
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