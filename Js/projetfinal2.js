var example4Right = document.querySelector(".case");
var example4Left = document.querySelector(".container");

new Sortable(example4Left, {
    group: {
		//temporaire
		setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
			dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
		},


        name: 'shared',
        pull: 'clone',
        put: false // Do not allow items to be put into this list
    },
    animation: 150,
    sort: false // To disable sorting: set sort to false
});

new Sortable(example4Right, {
	//temporaire
	setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
		dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
	},


    group: 'shared',
    animation: 150
});

//liste des choses a faire:
//faire de sorte que lors du transfert une croix s'ajoute et un logo parametre
//faire la traduction et afficher le résultat final a l'endroit prévu
//améliorer le style des cases