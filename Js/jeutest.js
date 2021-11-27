var replace = document.getElementById("replace");
window.addEventListener(
  "keydown",
  function (event) {
    if (event.defaultPrevented) {
      return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
    }

    switch (event.key) {
      case "ArrowDown":
        replace.innerHTML = "bas";
        // Faire quelque chose pour la touche "flèche vers le bas" pressée.
        break;
      case "ArrowUp":
        replace.innerHTML = "haut";
        // Faire quelque chose pour la touche "up arrow" pressée.
        break;
      case "ArrowLeft":
        replace.innerHTML = "gauche";
        // Faire quelque chose pour la touche "left arrow" pressée.
        break;
      case "ArrowRight":
        replace.innerHTML = "droite";
        // Faire quelque chose pour la touche "right arrow" pressée.
        break;
      case "Enter":
        alert("wqsxbg");
        // Faire quelque chose pour les touches "enter" ou "return" pressées.
        break;
      case "Escape":
        // Faire quelque chose pour la touche "esc" pressée.
        break;
      default:
        return; // Quitter lorsque cela ne gère pas l'événement touche.
    }

    // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
    event.preventDefault();
  },
  true
);
