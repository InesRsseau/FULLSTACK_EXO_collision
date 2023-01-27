// On récupère les deux images, la taille de leur balise servira de boite collision (vous pouvez la voir facilement avec l'inspecteur)
const mario = document.querySelector("#mario");
const luigi = document.querySelector("#luigi");

// getBoundingClientRect récupère toutes les infos utiles sur l'image et sa boite de collision
console.log(mario);

// On détecte la pression d'une touche
document.addEventListener("keydown", moveMario);

function moveMario(e) {
  console.log(e);
  switch (e.keyCode) {
    //On déplace Mario en fonction de la touche pressée
    //case Luigi : 800/970 de large ; 400/560 de haut

    //vers la droite
    case 39:
      if(
        (luigi.getBoundingClientRect().x < mario.getBoundingClientRect().x + mario.width + 6) //luigi gauche < droite de mario
        &&(mario.getBoundingClientRect().x + 6 < luigi.getBoundingClientRect().x + luigi.width) //mario gauche < luigi droite
        &&(luigi.getBoundingClientRect().y < mario.getBoundingClientRect().y + mario.height ) //luigi haut < mario bas
        &&(mario.getBoundingClientRect().y < luigi.getBoundingClientRect().y + luigi.height)){ //mario haut < luigi bas
        mario.style.left = mario.getBoundingClientRect().x + 6 + "px";
        setTimeout("console.log('Hello World!');", 500);
        mario.style.left = mario.getBoundingClientRect().x - 8 + "px";
      }
      else{
        mario.style.left = mario.getBoundingClientRect().x + 6 + "px";
      }
      break;

    //vers la gauche
    case 37:
      if(
        (luigi.getBoundingClientRect().x < mario.getBoundingClientRect().x + mario.width - 6) //luigi gauche < droite de mario
        &&(mario.getBoundingClientRect().x - 6 < luigi.getBoundingClientRect().x + luigi.width) //mario gauche < luigi droite
        &&(luigi.getBoundingClientRect().y < mario.getBoundingClientRect().y + mario.height ) //luigi haut < mario bas
        &&(mario.getBoundingClientRect().y < luigi.getBoundingClientRect().y + luigi.height)){ //mario haut < luigi bas
        mario.style.left = mario.getBoundingClientRect().x - 6 + "px";
        setTimeout("console.log('Hello World!');", 500);
        mario.style.left = mario.getBoundingClientRect().x + 8 + "px";
      }
      else{
      mario.style.left = mario.getBoundingClientRect().x - 6 + "px";
      }
      break;

    //vers le bas
    case 40:
      if(
        (luigi.getBoundingClientRect().x < mario.getBoundingClientRect().x + mario.width) //luigi gauche < droite de mario
        &&(mario.getBoundingClientRect().x < luigi.getBoundingClientRect().x + luigi.width) //mario gauche < luigi droite
        &&(luigi.getBoundingClientRect().y < mario.getBoundingClientRect().y + mario.height + 6 ) //luigi haut < mario bas
        &&(mario.getBoundingClientRect().y + 6 < luigi.getBoundingClientRect().y + luigi.height)){ //mario haut < luigi bas
        mario.style.top = mario.getBoundingClientRect().y + 6 + "px";
        setTimeout("console.log('Hello World!');", 500);
        mario.style.top = mario.getBoundingClientRect().y - 8 + "px";
      }
      else{
      mario.style.top = mario.getBoundingClientRect().y + 6 + "px";
      }
      break;

    //vers le haut
    case 38:
      if(
        (luigi.getBoundingClientRect().x < mario.getBoundingClientRect().x + mario.width) //luigi gauche < droite de mario
        &&(mario.getBoundingClientRect().x < luigi.getBoundingClientRect().x + luigi.width) //mario gauche < luigi droite
        &&(luigi.getBoundingClientRect().y < mario.getBoundingClientRect().y - 6 + mario.height ) //luigi haut < mario bas
        &&(mario.getBoundingClientRect().y - 6 < luigi.getBoundingClientRect().y + luigi.height)){ //mario haut < luigi bas
        mario.style.top = mario.getBoundingClientRect().y - 6 + "px";
        setTimeout("console.log('Hello World!');", 500);
        mario.style.top = mario.getBoundingClientRect().y + 8 + "px";
      }
      else{
      mario.style.top = mario.getBoundingClientRect().y - 6 + "px";
      }
      break;
  }
}
