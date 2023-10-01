var sidenav = document.getElementById("Sidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");


openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Ouvre le menu /width : 100% */
function openNav() {
  sidenav.classList.add("active");

}

/* Ferme le menu / width: 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

