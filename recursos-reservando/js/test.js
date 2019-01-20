var expect = chai.expect;

describe('Test de reservando', function(){

    describe('Testeando la funcion reservaHorario del objeto restaurant', function() {

        it('Reserva correctamente un horario disponible en un restaurant', function() {
          var restaurantTest = listado.restaurantes[2];

          restaurantTest.reservarHorario('11:30');

          expect(restaurantTest.horarios[0]).to.equal('12:00');
          expect(restaurantTest.horarios[1]).to.equal('22:30');
          expect(restaurantTest.horarios.length).to.equal(2);
        });

        it('Horario inexistente en un restaurant', function() {
            var restaurantTest = listado.restaurantes[1];

            restaurantTest.reservarHorario('17:30');

            expect(restaurantTest.horarios[0]).to.equal('12:30');
            expect(restaurantTest.horarios[1]).to.equal('14:30');
            expect(restaurantTest.horarios[2]).to.equal('15:00');
            expect(restaurantTest.horarios.length).to.equal(3);
        });

        it('Horario de reserva vacio', function() {
            var restaurantTest = listado.restaurantes[3];

            restaurantTest.reservarHorario();

            expect(restaurantTest.horarios[0]).to.equal('12:00');
            expect(restaurantTest.horarios[1]).to.equal('15:00');
            expect(restaurantTest.horarios[2]).to.equal('17:30');
            expect(restaurantTest.horarios.length).to.equal(3);
        });
    });


    describe('Testeando la funcion obtenerPuntuacion del objeto restaurant', function() {
        it('Calcula el promedio de puntuacion cuando el restaurant tiene calificaciones', function() {
            expect(listado.restaurantes[2].obtenerPuntuacion()).to.equal(7);
            expect(listado.restaurantes[9].obtenerPuntuacion()).to.equal(6);
        });
  
        it('Calcula el promedio de puntuacion cuando el restaurant no tiene calificaciones', function() {
          listado.restaurantes[23].calificaciones = [];
          expect(listado.restaurantes[23].obtenerPuntuacion()).to.equal(0);
       });
      });

      describe('Testeando la calificacion del objeto restaurant', function() {
        it('Valida correctamente que la calificacion sea un numero o no tenga decimales', function() {
            
            listado.restaurantes[1].calificar();
  
            expect(listado.restaurantes[1].calificaciones.length).to.equal(5);
  
            listado.restaurantes[1].calificar('OK');
  
            expect(listado.restaurantes[1].calificaciones.length).to.equal(5);

            listado.restaurantes[1].calificar(2.5);
  
            expect(listado.restaurantes[1].calificaciones.length).to.equal(5);
        });
  
        it('Valida que la calificacion sea mayor a cero y menor a 11', function() {
          

          listado.restaurantes[1].calificar(0);
  
          expect(listado.restaurantes[1].calificaciones.length).to.equal(5);
  
          listado.restaurantes[1].calificar(11);
  
          expect(listado.restaurantes[1].calificaciones.length).to.equal(5);
  
          listado.restaurantes[1].calificar(5);
  
          expect(listado.restaurantes[1].calificaciones.length).to.equal(6);
        });
      });

      
    describe('Testeando la funcion buscarRestaurant del objeto listado', function() {
        it('Encuentra correctamente un restaurant mediante su id', function() {
          expect(listado.buscarRestaurante(7).id).to.equal(7);
        });
  
        it('Funciona correctamente si el id no existe', function() {
          expect(listado.buscarRestaurante(500)).to.equal('No se ha encontrado ningún restaurant');
        });
      });

    
      describe('Testeando la funcion obtenerRestaurantes del objeto listado', function() {
        
        it('Funciona sin filtros', function() {
          expect(listado.obtenerRestaurantes(null,null,null).length).to.equal(24);
        });

        it('Funciona filtrando solamente por rubro', function() {
          expect(listado.obtenerRestaurantes('Pasta',null,null).length).to.equal(5);
        });
  
        it('Funciona filtrando solamente por ciudad', function() {
          expect(listado.obtenerRestaurantes(null,'Londres',null).length).to.equal(4);
        });
  
        it('Funciona filtranso solamente por horario', function() {
          expect(listado.obtenerRestaurantes(null,null,'08:00').length).to.equal(0);
        });
  
        it('Funciona utilizando los filtros de ciudad, rubro y horario', function() {
          expect(listado.obtenerRestaurantes('Pasta','Berlín','15:00').length).to.equal(1);
        });

        it('Funciona correctamente segun los distintos filtros', function() {
          expect(listado.obtenerRestaurantes(null,null,null).length).to.equal(24);
          expect(listado.obtenerRestaurantes(null,'Nueva York',null).length).to.equal(7);
          expect(listado.obtenerRestaurantes('Hamburguesa',null,null).length).to.equal(4);
          expect(listado.obtenerRestaurantes(null,null,'08:00').length).to.equal(0);
          expect(listado.obtenerRestaurantes('Pasta','Berlín','12:00').length).to.equal(1);
        });
  
      });  

      describe('Testeando la funcion precioBase del objeto reserva', function() {
        it('Calucla correctamente el precio base', function() {
          expect(listadoDeReservas[0].precioBase()).to.equal(2800);
          expect(listadoDeReservas[1].precioBase()).to.equal(300);
        });
      });
  
      describe('Testeando la funcion precioFinal del objeto reserva', function() {
        it('Calucla correctamente el precio final', function() {
          expect(listadoDeReservas[0].precioFinal()).to.equal(2310);
          expect(listadoDeReservas[1].precioFinal()).to.equal(100);
        });
      });


});
