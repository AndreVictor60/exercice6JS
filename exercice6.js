function resultat() {
  // Déclarer les variables & récuperer les deux nombres saisie par utilisateur
  var number1 = document.getElementById('premier_nombre').value;
  var number2 = document.getElementById('deuxieme_nombre').value;
  // vérificaation
    if(isNaN(number1) == true || isNaN(number2) == true){
      alert('Ceci n\'est pas un texte');
    }
    else {
        // Afficher le reste de la division
      alert('Le reste de la division de '+number1+ ' % ' +number2+ ' est ' +number1%number2);
    }
}
