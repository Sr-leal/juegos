var a = [];
var d = [];
var c = [];
var papel = [a,d,c];
m = 999999;
 function solicitud() {
   contador = -1;
   contador2 = 0;
   do {
      contador2++;
       contador++;
       var b = prompt('añade texto');
       if (contador == 3) {
         contador = 0;
         console.log("se acaba de restar 1 al contador del bucle y es"+" "+contador);
       }
       if (!(b == "/parar")) {
         if (contador == 0) {
           a.push(b)
         } else {
           if (contador == 1) {
             d.push(b)
           } else {
             c.push(b)
           }
         }
       } //If para parar la insercción de datos
       console.log("contador de la insercción de texto"+" "+contador);
        console.log("contador del bucle"+" "+contador2);
       console.log(a);
       console.log(d);
       console.log(c);
       document.getElementById('oracion').innerHTML= visualizar();
   } while ((contador2 < m)&&(b !== ("/parar")&&("/borrar")));
   if (b == "/borrar") {
     document.getElementById('oracion').innerHTML= "";
   }
}

function visualizar(){

  var v =("<table width=200 border=1 cellpadding=1 cellspacing=1>");
  for (i=0;i<papel.length;i++){
    v+=("<tr>")
   	  for (j=0;j<papel[i].length;j++){
        v+=('<td id="'+[i]+[j]+'">' + papel[i][j] + "</td>")
   	  }
      v+=("</tr>")
    }
    v+=("</table>")
    return v;
}
