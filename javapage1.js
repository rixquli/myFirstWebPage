function menuOpen(){
 var element= document.getElementById("menuId");
 element.innerHTML=
`<a href="Index/pythagore.html">Pythagore </a></br>
 Thales </br>
 <a href="https://youtu.be/dQw4w9WgXcQ">Autre</a></br>
 <a href="Index/equation.html">Equation</a>
 <a href="Index/projetfinal.html">Coder pour les débutants</a>`;
  element.style.position= "absolute";
  element.style.top= "7px";
  element.style.right= "2px"
  element.style.diplay= "flex";
  element.style.flexDirection= "column";
  element.style.border= "solid";
  element.style.borderSize= "1px";
  element.style.backgroundColor= "#00c4bf";
  let elementB= document.getElementById("menuIdButtonOpen");
  elementB.setAttribute("onclick", "menuClose()");
}

function menuClose(){
  var element= document.getElementById("menuId");
  element.innerHTML= "";
  let elementB= document.getElementById("menuIdButtonOpen");
  elementB.setAttribute("onclick", "menuOpen()");
  element.style.border= "none";
}
