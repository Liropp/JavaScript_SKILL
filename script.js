'use strict';
window
// Vous devez déclarer 3 variables,
var player;
var random;
var computer;

// demandez à l'utilisateur son choix (pierre, feuille ou ciseaux)
player = window.prompt('Choisissez pierre feuille ou ciseaux');
// modifier la casse en minusule
player = player.toLowerCase();

// affectez une valeur aleatoire entre 0 et 1 à la variable random
// @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
random = Math.random();

// definissez le choix de l'ordianteur (1/3 de chance pour chacun des choix)
// si 1/3 affectez pierre à la variable computer
if(random < 1 / 3)
{
    computer = 'pierre';
}
else if(random < 2 / 3) 
{
    computer = 'feuille';
}
else
{
    computer = 'ciseaux';
}

// affichez le choix de l'ordinateur dans le document
document.write("<p>Choix de l'ordinateur : <strong>" + computer + "</strong></p>");

if(computer == player)
{
	document.write("<p>égalité</p>");
}
else
{
	switch (computer)
{
	case "pierre" :
		if(player == "feuille")
		{
			document.write("<p>player win</p>")
		}
		else
		{
			document.write("<p>computer win</p>")
		}
	break;
		case "feuille" :
		if(player == "ciseaux")
		{
			document.write("<p>player win</p>")
		}
		else
		{
			document.write("<p>computer win</p>")
		}
	break;
		case "ciseaux" :
		if(player == "pierre")
		{
			document.write("<p>player win</p>")
		}
		else
		{
			document.write("<p>computer win</p>")
		}
	break;
}
}