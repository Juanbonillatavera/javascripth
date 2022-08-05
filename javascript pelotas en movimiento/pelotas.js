/** 
 * practica de poo usando canvas 
 * MLM
 * 2022/08/04 */

/**
 * cargar recursos
 */
 var canvas = document.getElementById("canvas");
 var ctx = canvas.getContext("2d");


/**
 * definir valores iniciales
 */
var centro = {x:500,y:400};
var radio= 50;
var velocidad={x:5,y:2};
var direccion={x:-4,y:-2};

animar();

/** dibujar el mundo */
function dibujar() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.lineWidt=3;
    ctx.strokeStyle='red';
ctx.arc(centro.x,centro.y,radio,0, 2 * Math.PI);
ctx.stroke();

    

}


/** calcular valores */

function calcular() {
    centro.x += velocidad.x;
    centro.y += velocidad.y;
   
    //** controlar rebotes*/
   if (centro.x+radio>=canvas.width||centro.x<=radio) {
    velocidad.x*= -1;
     radio=50;

    
   }

   if (centro.y+radio>=canvas.height||centro.y<=radio) {
    velocidad.y*= -1;
    
  
    
   }





}

/**
 * ciclo de animaciones
 */

function animar() {
    dibujar();
    calcular();
    requestAnimationFrame(animar);    
}



