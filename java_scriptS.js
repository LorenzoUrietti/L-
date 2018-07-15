// funzione di scroll della pagina
window.onscroll = function() {myFunction()};

// seleziona navbar
var navbar = document.getElementById("navbar");

// posizione offset della navbar
var sticky = navbar.offsetTop;

// aggiungere classe sticky alla navbar quando si scrolla. rimuoverla una volta tornati in testa alla pagina
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// lazy loading delle immagini
[].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});
