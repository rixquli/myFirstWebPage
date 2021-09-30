function hypo(){
  var un= Math.abs(document.getElementById("1").value);
  var deux= Math.abs(document.getElementById("2").value);
  var preresultat= Math.sqrt(un*un + deux*deux);
  var resultat= Math.round(preresultat*100)/100;
  var element=document.getElementById("remplace");
  element.innerHTML= "L hypoténuse vaut : " + resultat;
  triangle(un, deux, resultat);
  phraseReponse(un, deux, resultat);
}

function pashypo(){
  var un= document.getElementById("1").value;
  var deux= document.getElementById("2").value;
  var preresultat= Math.abs(un*un - deux*deux);
  var prepreresultat= Math.sqrt(preresultat);
  var resultat= Math.round(prepreresultat*100)/100;
  var element= document.getElementById("remplace");
  element.innerHTML= "Le côté vaut : " + preresultat;
  triangle(un, deux, resultat);
  phraseReponse(un, deux, resultat);
}

//a test

function triangle(un, deux, resultat){

var canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(25, 25);
  //si un est plus petit que r??sultat alors r??sultat est l'hypot??nuse
  if(un < resultat) {
ctx.lineTo(25, un*25);
ctx.lineTo(deux*25, un*25);
  } else if(un <= deux) { // si un est plus petit que deux alors de l'hypot??nuse
ctx.lineTo(25, un*25);
ctx.lineTo(resultat*25, un*25);
} else { // sinon un est l'hypot??nuse
ctx.lineTo(25, deux*25);
ctx.lineTo(resultat*25, deux*25);
}
ctx.lineTo(25, 25);
ctx.strokeStyle = '#4488EE'; //Nuance de bleu
ctx.lineWidth = 3;
ctx.closePath();
ctx.stroke();
}

function phraseReponse(un, deux, resultat){
  var elementP= document.getElementById("phraseReponse");
  elementP.innerHTML= `Le triangle est rectangle en B </br>
  D'apres le th?oreme de Pythagore : </br>
  AC2= AB2+BC2 </br>
  AC2= ${un} 2+${deux} 2 </br>
  AC2= ${un*un}+${deux*deux} </br>
  AC= racine de ${un*un + deux*deux} </br>
  AC= ${resultat}`;
}