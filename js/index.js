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

/* ------------------------------------Slider-------------------------------- */

window.addEventListener('load', function () {

  let images = [];
  let indiceDeImagenes = 0;
  let time = 3000;

  images[0] = "./assets/images/2.jpg";
  images[1] = "./assets/images/3.jpg";
  images[2] = "./assets/images/5.jpg";
  images[3] = "./assets/images/6.jpg";
  images[4] = "./assets/images/7.jpg";
  images[5] = "./assets/images/8.jpg";
  images[6] = "./assets/images/9.jpg";
  images[7] = "./assets/images/10.jpg";
  images[8] = "./assets/images/11.jpg";
  images[9] = "./assets/images/12.jpg";
  images[10] = "./assets/images/13.jpg";
  images[11] = "./assets/images/14.jpg";
  images[12] = "./assets/images/15.jpg";
  images[13] = "./assets/images/16.jpg";
  images[14] = "./assets/images/17.jpg";
  images[15] = "./assets/images/22.jpg";

  function changeImages() {
    document.slider.src = images[indiceDeImagenes];

    if (indiceDeImagenes < 15) {
      indiceDeImagenes++;
    } else {
      indiceDeImagenes = 0;
    }
  }
  
  let inter = setInterval(() => {
    changeImages();
  }, time);

  document.getElementById('Leer').addEventListener("click",function () {
    indiceDeImagenes = 15;
  })
});
