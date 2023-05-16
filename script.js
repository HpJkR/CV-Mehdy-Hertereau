let background = document.getElementById("background");
let soleil = document.getElementById("soleil");
let pierre = document.getElementById("pierre");
let montgolfieredroite = document.getElementById("montgolfieredroite");
let montgolfieregauche = document.getElementById("montgolfieregauche");
let palmierdroite = document.getElementById("palmierdroite");
let palmiergauche = document.getElementById("palmiergauche");
let text = document.getElementById("text");
let header = document.getElementById("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  text.style.top = 50 + value * -0.5 + "%";
  montgolfieredroite.style.top = value * -1.5 + "px";
  montgolfieredroite.style.left = value * 2 + "px";
  montgolfieregauche.style.top = value * -1.5 + "px";
  montgolfieregauche.style.left = value * -5 + "px";
  soleil.style.marginTop = value * 1.5 + "px";
  pierre.style.top = value * 0.3 + "px";
  palmierdroite.style.left = value * 1 + "px";
  palmiergauche.style.left = value * -1 + "px";
});
