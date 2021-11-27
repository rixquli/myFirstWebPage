const base = document.querySelectorAll(".base");
const box = document.querySelector(".case");
var codeInnerHTML = [];

for (const allBase of base) {
  allBase.addEventListener("dragstart", dragStart);
  allBase.addEventListener("dragend", dragEnd);
}

function dragStart() {
  this.className += " tenu";
  //setTimeout(() => (this.className = "invisible"), 0);
  return (baseContain = this);
}

function dragEnd() {
  this.className = "base";
}

box.addEventListener("dragover", dragOver);

box.addEventListener("dragenter", dragEnter);

box.addEventListener("dragleave", dragLeave);

box.addEventListener("drop", dragDrop);

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "case";
}

function dragOver2(e) {
  e.preventDefault();

  box.removeEventListener("drop", dragDrop);
}

function dragLeave2() {
  this.className = "case2";

  box.addEventListener("dragover", dragOver);

  box.addEventListener("dragenter", dragEnter);

  box.addEventListener("dragleave", dragLeave);

  box.addEventListener("drop", dragDrop);
}

function dragDrop2() {
  this.parentElement.insertAdjacentHTML(
    "beforebegin",
    `<div><div class="case2"></div><div class="base">${baseContain.innerHTML}<br><input type="button" value="X" class="buttonRight"/></div></div>`
  );
  const buttonSup = document.querySelectorAll(".buttonRight");
  for (const buttonSupListFor of buttonSup) {
    buttonSupListFor.addEventListener("click", deleting);
  }
  const box2 = document.querySelectorAll(".case2");
  for (const allBase2 of box2) {
    allBase2.addEventListener("dragover", dragOver2);

    allBase2.addEventListener("dragenter", dragEnter);

    allBase2.addEventListener("dragleave", dragLeave2);

    allBase2.addEventListener("drop", dragDrop2);
  }
  Event.stopPropagation();
  box.addEventListener("dragover", dragOver);

  box.addEventListener("dragenter", dragEnter);

  box.addEventListener("dragleave", dragLeave);

  box.addEventListener("drop", dragDrop);

  codeHTML(this.parentElement.parentElement);
}

function dragDrop() {
  this.innerHTML += `<div><div class="case2"></div><div class="base">${baseContain.innerHTML}<br><input type="button" value="X" class="buttonRight"/></div></div>`;
  if (baseContain.textContent == "DIV") {
    this.innerHTML += `<div><div class="case2"></div><div class="base">/DIV<br></div>`;
  }
  const buttonSup = document.querySelectorAll(".buttonRight");
  for (const buttonSupListFor of buttonSup) {
    buttonSupListFor.addEventListener("click", deleting);
  }
  const box2 = document.querySelectorAll(".case2");
  for (const allBase2 of box2) {
    allBase2.addEventListener("dragover", dragOver2);

    allBase2.addEventListener("dragenter", dragEnter);

    allBase2.addEventListener("dragleave", dragLeave2);

    allBase2.addEventListener("drop", dragDrop2);
  }

  codeHTML(this.parentElement);
}

function deleting() {
  this.parentElement.parentElement.remove();
}

function codeHTML(a) {
  if(a.hasChildNodes()){
    var children = a.childNodes;
    var codeHtml = "";
    for(var i = 0; i < children.length; i++) {
      var codeHtml += children[i].textContent;
    }
    alert(codeHtml);
}
  //codeInnerHTML += `&lt${thischildNodes}&gt <br>`;
  //document.querySelector("#traduction").innerHTML = `${codeInnerHTML}`;
}

//const url = URL.createObjectURL(file);
//$(function () {
//  $("#inclusion").load("https://codepen.io/Ziratsu/pen/vvPYpp?editors=0110");
//});
