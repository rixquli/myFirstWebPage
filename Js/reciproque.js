const selectElementMenuBar = document.getElementById("recitheo");

selectElementMenuBar.addEventListener("change", function () {
  if (this.value == "theo") {
    window.location.href = `pythagore.html`;
  }
});

var selectElementEV = [
  document.getElementById("1"),
  document.getElementById("2"),
  document.getElementById("3"),
];

selectElementEV[0].addEventListener("change", calcul);
selectElementEV[1].addEventListener("change", calcul);
selectElementEV[2].addEventListener("change", calcul);

//var inputElement = document.querySelector("input");

//inputElement.addEventListener("change", calcul);

function calcul() {
  var selectElement = [
    document.getElementById("1").value,
    document.getElementById("2").value,
    document.getElementById("3").value,
  ];
  selectElement.map(Number);
  var selectElementR = document.getElementById("remplace");
  var zerocarrer = selectElement[0] * selectElement[0];
  var onecarrer = selectElement[1] * selectElement[1];
  var twocarrer = selectElement[2] * selectElement[2];
  var onetwo = onecarrer + twocarrer;
  if (
    zerocarrer > onecarrer + twocarrer ||
    onecarrer > zerocarrer + twocarrer ||
    twocarrer > onecarrer + zerocarrer ||
    zerocarrer < onecarrer + twocarrer ||
    onecarrer < zerocarrer + twocarrer ||
    twocarrer < onecarrer + zerocarrer
  ) {
    selectElementR.innerHTML = `AB² = ${zerocarrer} <br>
                                AC² + BC² = ${onecarrer + twocarrer} <br>
                                AB² ≠ BC² + CA² <br>
                                D'après la réciproque de Pythagore le triangle n'est pas rectangle en C`;
  } else if (zerocarrer == onetwo) {
    alert("OKKK");
    selectElementR.innerHTML = `AB² = ${zerocarrer} <br>
                                AC² + BC² = ${onecarrer}+${twocarrer} <br>
                                AB² = BC² + CA² <br>
                                D'après la réciproque de Pythagore le triangle est rectangle en C`;
  } else {
    alert("OK");
  }
}
