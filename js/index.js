/* -----------------------------------Burguer-------------------------------- */
// Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  var burgerMenu = document.querySelector(".header__menu-burger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });

/* ---------------------------------Burguer_Menu------------------------------ */

hamburger.addEventListener("click", function() {
  // Toggle class "header__menu-burgersOn"
  burgerMenu.classList.toggle("header__menu-burgersOn");
});
