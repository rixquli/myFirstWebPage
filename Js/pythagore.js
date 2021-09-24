function hypo(){
  var un= Math.abs(document.getElementById("1").value);
  var deux= Math.abs(document.getElementById("2").value);
  var preresultat= Math.sqrt(un*un + deux*deux);
  var resultat= Math.round(preresultat*100)/100;
  var element=document.getElementById("remplace");
  element.innerHTML= "L hypoténuse vaut : " + resultat;
  triangle(un, deux, resultat)
}

function pashypo(){
  var un= document.getElementById("1").value;
  var deux= document.getElementById("2").value;
  var preresultat= Math.abs(un*un - deux*deux);
  var prepreresultat= Math.sqrt(preresultat);
  var resultat= Math.round(prepreresultat*100)/100;
  var element= document.getElementById("remplace");
  element.innerHTML= "Le côté vaut : " + preresultat;
  triangle(un, deux, resultat)
}

//a test

function triangle(un, deux, resultat){

var canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(25, 25);
  //si un est plus petit que résultat alors résultat est l'hypoténuse
  if(un < resultat) {
ctx.lineTo(25, un*25);
ctx.lineTo(deux*25, un*25);
  } else if(un <= deux) { // si un est plus petit que deux alors de l'hypoténuse
ctx.lineTo(25, un*25);
ctx.lineTo(resultat*25, un*25);
} else { // sinon un est l'hypoténuse
ctx.lineTo(25, deux*25);
ctx.lineTo(resultat*25, deux*25);
}
ctx.lineTo(25, 25);
ctx.strokeStyle = '#4488EE'; //Nuance de bleu
ctx.lineWidth = 3;
ctx.closePath();
ctx.stroke();
}

