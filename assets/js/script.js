//fonction validation "onclick", je veux obtenir cette fonction
function majority() {
  //declaration des variables date anniversaire et pointure
  //get getElementById = obtenir les informations par l'identifiant age
  var age = document.getElementById('age').value;
  //if est une condition, je demande une alerte si la personne est majeur ou si elle est mineur
  if (age >= 18){
    alert ("Vous êtes majeur");
  } else
    alert ("Vous êtes mineur");
  }
