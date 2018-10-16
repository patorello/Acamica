var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorColor = document.getElementById("indicador-de-color"); 
    indicadorColor.style.backgroundColor = colorActual;
    // asignandoColor(colorActual);
  })
);

  //COMPLETAR

var paletaColores = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');

function nombresDeColores() {
  for (var i=0;i<nombreColores.length;i++){
    var coloresCreados = document.createElement("div");
    coloresCreados.className = "color-paleta";
    coloresCreados.style.backgroundColor = nombreColores[i];
    paletaColores.appendChild(coloresCreados);
  }
}

nombresDeColores();

function grillaDePixeles() {
  for (var i=0;i<1750;i++){
    var pixelesCreados = document.createElement("div");
    // pixelesCreados.className = "color-paleta";
    // pixelesCreados.style.backgroundColor = "skyblue";
    grillaPixeles.appendChild(pixelesCreados);
  }
}

grillaDePixeles();


paletaColores.addEventListener("click",asignandoColor);

function asignandoColor(e){
  indicadorColor = document.getElementById("indicador-de-color");
  var colorActivo = e.target.style.backgroundColor; 
  indicadorColor.style.backgroundColor = colorActivo;
}

grillaPixeles.addEventListener("click", pintandoGrilla);

function pintandoGrilla(e){
  var colorActual = indicadorColor.style.backgroundColor; 
  e.target.style.backgroundColor = colorActual;
}

  
var moviendo = grillaPixeles.addEventListener("mousedown", function(){console.log("Aprieto")});
var soltando = grillaPixeles.addEventListener("mouseup", function(){console.log("Suelto")});





