/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

  mover: function(posX,posY,direccion) {

    this.x = this.x + posX;
    this.y = this.y + posY;

    function movY() {
        Jugador.ancho = 15;
        Jugador.alto = 30;
    }

    function movX() {
        Jugador.ancho = 30;
        Jugador.alto = 15;
    }

    switch (direccion){
      case 'izq':    {
            this.sprite = 'imagenes/auto_rojo_izquierda.png';
            movX();
            break;}
      case 'arriba': {
            this.sprite = 'imagenes/auto_rojo_arriba.png';
            movY();
            break;}
      case 'der':    {
            this.sprite = 'imagenes/auto_rojo_derecha.png';
            movX();
            break;}
      case 'abajo':  {
            this.sprite = 'imagenes/auto_rojo_abajo.png';
            movY();
            break;}
    }
  },

  perdervidas: function(cantVidas) {
     if (this.vidas >= 0) {
      this.vidas -= cantVidas;
      }
  }

}
