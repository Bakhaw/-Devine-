var Ordinateur = function() {
  var choixOrdi = Math.round(Math.random() * 100);
  console.log(choixOrdi);
  var choixJoueur = prompt("Choisissez un nombre entre 1 et 100")
  for (i=0;i<9;i++) {
  if (choixJoueur < choixOrdi ) {choixJoueur = prompt ("Plus grand");}
  else if (choixJoueur > choixOrdi) {choixJoueur = prompt ("Plus petit");}
  else if (choixJoueur == choixOrdi) {return "Bravo";}
  }
  return "Perdu, plus d'essais restants"
}
 Ordinateur()
