var sidenav = document.getElementById("Sidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");
var titre1 = document.getElementById("titre1");
var titre1t = document.getElementById("titre1t");
var titre1w = document.getElementById("titre1w");
var card = document.getElementById("card");


openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Ouvre le menu /width : 100% */
function openNav() {
  sidenav.classList.add("active");
  titre1.classList.add("active");
  titre1t.classList.add("active");
  titre1w.classList.add("active");
  card.classList.add("active");
}

/* Ferme le menu / width: 0 */
function closeNav() {
  sidenav.classList.remove("active");
  titre1.classList.remove("active");
  titre1t.classList.remove("active");
  titre1w.classList.remove("active");
  card.classList.remove("active");
}

