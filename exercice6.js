function resultat() {
  // Déclarer les variables & récuperer les deux nombres saisie par utilisateur
  var number1 = document.getElementById('premier_nombre').value;
  var number2 = document.getElementById('deuxieme_nombre').value;
  // Afficher le reste de la division
  alert('Le reste de la division de '+number1+ ' % ' +number2+ ' est ' +number1%number2);
}
