var sidenav = document.getElementById("Sidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");
var titre1 = document.getElementById("titre1");
var titre1t = document.getElementById("titre1t");
var titre1w = document.getElementById("titre1w");
var card = document.getElementById("card");


let pageActuelle;
 
if (window.location.pathname === '/index.html'){
  pageActuelle = 'index';
} else if (window.location.pathname === '/restaurant.html'){
  pageActuelle = 'restaurant';
}else if (window.location.pathname === '/animal.html'){
  pageActuelle = 'animaux';
}else if (window.location.pathname === '/contact.html'){
  pageActuelle = 'contact';
}else if (window.location.pathname === '/boutique.html'){
  pageActuelle = 'boutique';
}



openBtn.addEventListener('click', () => {
  if (pageActuelle === 'index'){
    openNav();
    masqueIndex();
  }else if (pageActuelle === 'restaurant'){
    openNav();
    masqueRestau();
  }else if (pageActuelle === 'animaux'){
    openNav();
    masqueAnimaux();
  }else if (pageActuelle === 'contact'){
    openNav();
  }else if (pageActuelle === 'boutique'){
    openNav();
  }

})

closeBtn.addEventListener('click', () => {
  if (pageActuelle === 'index'){
    closeNav();
    setTimeout(function(){ 
      demasqueIndex();
    }, 400);
  }else if (pageActuelle === 'restaurant'){
    closeNav();
    setTimeout(function(){
      demasqueRestau();
    }, 400);
  }else if (pageActuelle === 'animaux'){
    closeNav();
    setTimeout(function(){
      demasqueAnimaux();
    }, 400);
  }else if (pageActuelle === 'contact'){
    closeNav();
  }else if (pageActuelle === 'boutique'){
    closeNav();
  }

})

/* Masque les element de INDEX*/
function masqueIndex(){
  titre1.classList.add("active");
  titre1t.classList.add("active");
  titre1w.classList.add("active");
}
function demasqueIndex(){
  titre1.classList.remove("active");
  titre1t.classList.remove("active");
  titre1w.classList.remove("active");
}

/* Masque les element de ANIMAUX*/
function masqueAnimaux(){
  card.classList.add("active");
}
function demasqueAnimaux(){
  card.classList.remove("active");
}

/* Masque les element de RESTAURANT*/
function masqueRestau(){
  card.classList.add("active");
}
function demasqueRestau(){
  card.classList.remove("active");
}

/* Ouvre et ferme la NAV */
function openNav() {
  sidenav.classList.add("active");
}
function closeNav() {
  sidenav.classList.remove("active");
}

