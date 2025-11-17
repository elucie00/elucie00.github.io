// NAVIGATION GALLERY DROPDOWN BUTTON
function dropdownGallery() {
  document.getElementById("galleryDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// NAVIGATION SHOP SHEDS DROPDOWN BUTTON
function dropdownShop() {
  document.getElementById("shopDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// RESPONSIVE NAV BAR MOBILE

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
      document.body.style.overflow = "hidden";
    });
  }
  if (menuClose && navBar) {
    menuClose.addEventListener("click", function () {
      navBar.style.display = "none";
      menuOpen.style.display = "inline";
      navBackdrop.style.display = "none";
      document.body.style.overflow = "scroll";
      button.navBackdrop.style.display = "none";
    });
  }
  if (navBackdrop && navBar) {
    navBackdrop.addEventListener("click", function () {
      navBar.style.display = "none";
      menuOpen.style.display = "inline";
      navBackdrop.style.display = "none";
      document.body.style.overflow = "scroll";
    });
  }
  if (menuOpen && navBar){
    document.body.style.overflow = "scroll";
  }

});



// GENERATE GALLERY MODALS
let currentCard;

function createGalleryModal(ele) {
  if (ele === null) {
    return;
  }
  currentCard = ele;

  let modalGalleryContainer = document.getElementById("modalGalleryContainer");

  modalGalleryContainer.children[0].children[1].children[2].children[0].setAttribute(
    "src",
    ele.children[0].src
  );

  modalGalleryContainer.children[0].children[0].children[0].innerHTML =
    ele.children[1].children[0].innerHTML;
  if (modalGalleryContainer.style.display === "none") {
    modalGalleryContainer.style.display = "flex";
  }

  // close modal if esc key is clicked
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modalGalleryContainer.style.display = "none";
    }
  });

  // get index count of current card
  let parent = currentCard.parentNode;
  let index = Array.prototype.indexOf.call(parent.children, currentCard);

  let indexTotal = parent.childElementCount;
  // checking if current card is hidden
  if (currentCard.style.display === "none") {
    // calculate current page

    if (currentPage != Math.floor(index / 12)) {
      // call page change function
      currentPage = Math.floor(index / 12);
      replaceShedGallery(0);
    }
  }
  // disable prev button on first page and next button on last page
  let modalPrev = document.getElementById("modalPrev");
  let modalNext = document.getElementById("modalNext");
  if (index == 0) {
    modalPrev.disabled = true;
  } else if (index > 0) {
    modalPrev.disabled = false;
  }
  if (index == indexTotal - 1) {
    modalNext.disabled = true;
  } else if (index < indexTotal - 1) {
    modalNext.disabled = false;
  }

  // scroll to card
  ele.scrollIntoView();
}

function switchCard(next) {
  createGalleryModal(
    next ? currentCard.nextElementSibling : currentCard.previousElementSibling
  );
}

function replaceShedGallery(pageSwitch) {
  let galleryContainer = document.getElementById("galleryContainer");
  const maxPage = Math.ceil(galleryContainer.children.length / 12 - 1);
  // disable buttons if page number index is less than 0 or more than the number of elements/12
  if (currentPage + pageSwitch < 0 || currentPage + pageSwitch > maxPage) {
    return;
  }
  // disable prev button on first page and next button on last page
  let prevButton = document.getElementById("prev");
  let nextButton = document.getElementById("next");
  let prevButton2 = document.getElementById("prev2");
  let nextButton2 = document.getElementById("next2");
  prevButton.disabled = false;
  prevButton2.disabled = false;
  if (currentPage + pageSwitch == 0) {
    prevButton.disabled = true;
    prevButton2.disabled = true;
  }
  nextButton.disabled = false;
  nextButton2.disabled = false;
  if (currentPage + pageSwitch == maxPage) {
    nextButton.disabled = true;
    nextButton2.disabled = true;
  }

  // get rid of first page elements
  for (let i = 0; i < galleryContainer.children.length; i++) {
    let galleryChild = galleryContainer.children[i];
    if (galleryChild.style !== "display: none") {
      galleryChild.style = "display: none";
    }
    // reveal next set of images
    if (Math.floor(i / 12) === currentPage + pageSwitch) {
      galleryChild.style = "";
    }
  }

  // update current page number on top page switch
  currentPage = currentPage + pageSwitch;
  document.getElementById("page").innerHTML =
    "<p>Page " + (currentPage + 1) + "/" + (maxPage + 1) + "</p>";
  document.getElementById("page2").innerHTML =
    "<p>Page " + (currentPage + 1) + "/" + (maxPage + 1) + "</p>";
  document.getElementById("gallery").scrollIntoView();
}