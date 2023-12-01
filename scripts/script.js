/*
Curt Manning
script.js
1 December 2023
Note: Enables hamburger menu and the rotation of the hamburger menu icon.
*/

document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector('.hamburger-menu');
    var nav = document.querySelector('nav');
  
    menu.addEventListener('click', function() {
      nav.classList.toggle('is-active');
      menu.classList.toggle('rotate');
    });
  });