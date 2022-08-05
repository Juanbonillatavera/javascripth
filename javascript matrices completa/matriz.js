/**
 * practica de javaScrip utilizando matrices
 */

//variables globales +++++++++++

var matriz = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];

window.onload=function (){
    document.getElementById("opciones").addEventListener('change',ejecutarOpcion);
}
    function ejecutarOpcion(){
        let opcion=document.getElementById("opciones").value ;
        borrarmatriz();
        switch(opcion){
          
             case '1':
               mostrarmatriz();
                break;
            case '2':
                
                mostrarDiagonal();
                break;
            case '3':
                mostrarmatriz();
                mostrarDiagonalInversa();
                break;
            case '4':
                mostrarmatriz();
                mostrarmatrizSuperiorDerecha();
                
              break;
            case '5':
                mostrarmatriz();
                mostrarmatrizSuperiorIzquierda();
                
                break;
            case '6':
                mostrarmatriz();
                break;
            case '7':
                mostrarmatriz();

                break;
            case '8':
                generarMatriz();
                mostrarmatriz();
                console.log(matriz);
                break;

             default:
               break;
        
                
           
        }
}


function generarMatriz() {
    for (let f = 0; f < matriz.length; f++) {

        for (let c = 0; c < matriz.length; c++) {
            matriz[f][c]= generarAleatorio(10,100);
        }
            
            


        }
    }

function mostrarmatriz(){


       for (let f = 0; f < matriz.length; f++){

         for (let c = 0; c <matriz.length; c++) {

            let ident = 'i-f' + f + 'c'+ c;
            document.getElementById(ident).innerText=matriz[f][c];
        }
    }


}

function mostrarDiagonal() {
    for (let f=0; f< matriz.length;f++ ) {
        //ensambar el id "d-f3c3"
        let ident='d-f'+f+'c'+f;
        //mostrar lo de la caja correspondiente
        document.getElementById(ident).innerText =matriz[f][f];
    } 

}

 /**
  * Generea un numero entero aleatorio
  * entre min y max
  * @param {int} min valor minimo a generar
  * @param {int} max valor maximo a generar
  */
function generarAleatorio(min,max)  {
    let numero = Math.round(Math.random() * (max - min)) + min;
    return numero;
    
}

function mostrarDiagonalInversa() {
    for (let f=0; f< matriz.length;f++ ) {
        let c=matriz.length-1-f
        //ensambar el id "d-f3c3"

        let ident='d-f'+f+'c'+c;
        //mostrar lo de la caja correspondiente
        document.getElementById(ident).innerText =matriz[f][c];
    } 

}

function borrarmatriz(){


    for (let f = 0; f < matriz.length; f++){

      for (let c = 0; c <matriz.length; c++) {

         let ident = 'd-f' + f + 'c'+ c;
         document.getElementById(ident).innerText='';
     }
 }
}

function mostrarmatrizSuperiorDerecha(){


    for (let f = 0; f < matriz.length; f++){

      for (let c = f; c < matriz.length; c++) {

         let ident = 'd-f' + f + 'c'+ c;
         document.getElementById(ident).innerText=matriz[f][c];
     }
 }
}

function mostrarmatrizSuperiorIzquierda(){


    for (let f = 0; f < matriz.length; f++){

      for (let c = 0; f <matriz.length -c; c++) {
      

         let ident = 'd-f' + f + 'c'+ c;

         document.getElementById(ident).innerText=matriz[f][c];
     }
 }
}






