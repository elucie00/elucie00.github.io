// RESPONSIVE NAV MENU

document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.getElementById("navBar");
  const menuOpen = document.getElementById("menuOpen");
  const menuClose = document.getElementById("menuClose");
  const navBackdrop = document.getElementById("navBackdrop");

  if (menuOpen && navBar) {
    menuOpen.addEventListener("click", function () {
      navBar.style.display = "flex";
      navBackdrop.style.display = "block";
      menuOpen.style.display = "none";
    });
  }
  if (menuClose && navBar) {
    menuClose.addEventListener("click", function () {
      navBar.style.display = "none";
      menuOpen.style.display = "inline";
      navBackdrop.style.display = "none";
    });
  }
  if (navBackdrop && navBar) {
    navBackdrop.addEventListener("click", function () {
      navBar.style.display = "none";
      menuOpen.style.display = "inline";
      navBackdrop.style.display = "none";
    });
  }
});
