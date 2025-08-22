

// NAVIGATION DROPDOWN BUTTON
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownNav() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
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
}

// RESPONSIVE NAV MENU

document.addEventListener('DOMContentLoaded', function() {
            const navBar = document.getElementById('navBar');
            const menuOpen = document.getElementById('menuOpen');
            const menuClose = document.getElementById('menuClose');
            const navBackdrop = document.getElementById('navBackdrop');
            
            if (menuOpen && navBar) {
                menuOpen.addEventListener('click', function() {
                    navBar.style.display = 'flex';
                    navBackdrop.style.display = 'block';
                    menuOpen.style.display = 'none';
                });
            }
            if (menuClose && navBar) {
                menuClose.addEventListener('click', function() {
                  navBar.style.display = 'none';
                  menuOpen.style.display = 'inline';
                  navBackdrop.style.display = 'none';
                });
            }
            if (navBackdrop && navBar) {
                navBackdrop.addEventListener('click', function() {
                  navBar.style.display = 'none';
                  menuOpen.style.display = 'inline';
                  navBackdrop.style.display = 'none';
                });
            }
        });



// FAQ DROPDOWN MENUS



function faqClose() {
            document.getElementById("faq-body").style.height = 
            document.getElementById("faq-content").offsetHeight + "px";
        }



// UTILITY GALLERY MODAL

    function createUtilityModal() {
        const template = document.getElementById("utility-modal-card-template");
        const modal = template.parentNode;
        let modal_content = [
          { imgSrc: "images/utility-sheds/gallery/barn-sash.jpg",
            desc: "10' x 16' Utility Shed with 2x3 barn sash windows",
            loc: ""},
          { imgSrc: "images/utility-sheds/gallery/barnard-vt.jpg",
            desc: "10' x 14' Utility Shed with barn sash windows",
            loc: "Barnard, Vermont"},
          { imgSrc: "images/utility-sheds/gallery/barre-vt.jpg",
            desc: "8' x 10' Utility Shed",
            loc: "Barre, Vermont"},  
          { imgSrc: "images/utility-sheds/gallery/burlington-vt.jpg",
            desc: "10' x 12' Utility Shed with barn sash windows",
            loc: "Burlington, Vermont"},
          { imgSrc: "images/utility-sheds/gallery/colchester-vt.jpg",
            desc: "8' x 10' Utility Shed with vinyl windows upgrade",
            loc: "Colchester, Vermont"},
          { imgSrc: "images/utility-sheds/gallery/colchester-vt-overhang.jpg",
            desc: "12' x 16' Utility Shed with overhang, vent and window upgrades",
            loc: "Colchester, Vermont"},

          { imgSrc: "images/utility-sheds/gallery/essex-vt.jpg",
            desc: "8' x 10' Utility Shed with 4x10 large overhang",
            loc: "Essex Junction, Vermont"},
          { imgSrc: "images/utility-sheds/gallery/ira-vt.jpg",
            desc: "8' x 10' Utility Shed",
            loc: "Ira, Vermont"},
          { imgSrc: "images/utility-sheds/gallery/winhall-vt.jpg",
            desc: "12' x 14' Utility Shed with 5x14 large overhang",
            loc: "Winhall, Vermont"},

          { imgSrc: "images/utility-sheds/gallery/pittsfield-vt.jpg",
            desc: "8' x 12' Utility Shed",
            loc: "Pittsfield, Vermont"},
          { imgSrc: "images/utility-sheds/gallery/sandgate-vt.jpg",
            desc: "8' x 12' Utilty shed",
            loc: "Sandgate, Vermont"},
          { imgSrc: "images/utility-sheds/gallery/sburlington-vt.jpg",
            desc: "10' x 14' Utilty shed",
            loc: "South Burlington, Vermont"},

          { imgSrc: "images/utility-sheds/gallery/warren-vt.jpg",
            desc: "8' x 12' Utilty Shed",
            loc: "Warren, Vermont"},
          { imgSrc: "images/utility-sheds/gallery/waterbury-vt.jpg",
            desc: "10' x 14' Utility priced shed",
            loc: "Waterbury, Vermont"},
          { imgSrc: "images/utility-sheds/gallery/windham-vt.jpg",
            desc: "8' x 12' Utility Shed",
            loc: "Windham, Vermont"}
        ];
        modal_content.forEach(content => {
            let card = template.cloneNode(true);
            card.style = "";
            card.children[0].setAttribute("src", content.imgSrc);
            card.children[1].children[0].textContent = content.desc;
            card.children[1].children[1].textContent = content.loc;
            modal.appendChild(card);
        });
    }
    // document.addEventListener("click", function() {
    //     createUtilityModal(); 
    // });












// GALLERY TEMPLATE

// BLANK SHED GALLERY
    function createBLANKGallery() {
        const template = document.getElementById("BLANK-gallery-card-template");
        const gallery = template.parentNode;
        let gallery_content = [
          { imgSrc: "",
            desc: "",
            loc: ""},
          { imgSrc: "",
            desc: "",
            loc: ""},
          { imgSrc: "",
            desc: "",
            loc: ""},

          { imgSrc: "",
            desc: "",
            loc: ""},
          { imgSrc: "",
            desc: "",
            loc: ""},
          { imgSrc: "",
            desc: "",
            loc: ""},

          { imgSrc: "",
            desc: "",
            loc: ""},
          { imgSrc: "",
            desc: "",
            loc: ""},
          { imgSrc: "",
            desc: "",
            loc: ""},

          { imgSrc: "",
            desc: "",
            loc: ""},
          { imgSrc: "",
            desc: "",
            loc: ""},
          { imgSrc: "",
            desc: "",
            loc: ""},

          { imgSrc: "",
            desc: "",
            loc: ""},
          { imgSrc: "",
            desc: "",
            loc: ""},
          { imgSrc: "",
            desc: "",
            loc: ""}
        ];
        gallery_content.forEach(content => {
            let card = template.cloneNode(true);
            card.style = "";
            card.children[0].setAttribute("src", content.imgSrc);
            card.children[1].children[0].textContent = content.desc;
            card.children[1].children[1].textContent = content.loc;
            gallery.appendChild(card);
        });
    }
    document.addEventListener("DOMContentLoaded", function() {
        createBLANKGallery(); 
    });








// UTILITY SHED GALLERY
    function createUtilityGallery() {
        const template = document.getElementById("utility-gallery-card-template");
        const gallery = template.parentNode;
        let gallery_content = [
          { imgSrc: "images/utility-sheds/gallery/barnard-vt.jpg",
            desc: "10' x 14' Utility Shed with barn sash windows",
            loc: "Barnard, Vermont"},
          { imgSrc: "images/utility-sheds/gallery/barre-vt.jpg",
            desc: "8' x 10' Utility Shed",
            loc: "Barre, Vermont"}, 
          { imgSrc: "images/utility-sheds/gallery/barn-sash.jpg",
            desc: "10' x 16' Utility Shed with 2x3 barn sash windows",
            loc: "Brattleboro, Vermont"},

          { imgSrc: "images/utility-sheds/gallery/burlington-vt.jpg",
            desc: "10' x 12' Utility Shed with barn sash windows",
            loc: "Burlington, Vermont"},
          { imgSrc: "images/utility-sheds/gallery/colchester-vt.jpg",
            desc: "8' x 10' Utility Shed with vinyl windows upgrade",
            loc: "Colchester, Vermont"},
          { imgSrc: "images/utility-sheds/gallery/colchester-vt-overhang.jpg",
            desc: "12' x 16' Utility Shed with overhang, vent and window upgrades",
            loc: "Colchester, Vermont"},

          { imgSrc: "images/utility-sheds/gallery/essex-vt.jpg",
            desc: "8' x 10' Utility Shed with 4x10 large overhang",
            loc: "Essex Junction, Vermont"},
          { imgSrc: "images/utility-sheds/gallery/ira-vt.jpg",
            desc: "8' x 10' Utility Shed",
            loc: "Ira, Vermont"},
          { imgSrc: "images/utility-sheds/gallery/pittsfield-vt.jpg",
            desc: "8' x 12' Utility Shed",
            loc: "Pittsfield, Vermont"},

          { imgSrc: "images/utility-sheds/gallery/sandgate-vt.jpg",
            desc: "8' x 12' Utility shed",
            loc: "Sandgate, Vermont"},
          { imgSrc: "images/utility-sheds/gallery/sburlington-vt.jpg",
            desc: "10' x 14' Utility shed",
            loc: "South Burlington, Vermont"},
          { imgSrc: "images/utility-sheds/gallery/warren-vt.jpg",
            desc: "8' x 12' Utility Shed",
            loc: "Warren, Vermont"},

          { imgSrc: "images/utility-sheds/gallery/waterbury-vt.jpg",
            desc: "10' x 14' Utility priced shed",
            loc: "Waterbury, Vermont"},
          { imgSrc: "images/utility-sheds/gallery/winhall-vt.jpg",
            desc: "12' x 14' Utility Shed with 5x14 large overhang",
            loc: "Winhall, Vermont"},
          { imgSrc: "images/utility-sheds/gallery/windham-vt.jpg",
            desc: "8' x 12' Utility Shed",
            loc: "Windham, Vermont"}
        ];
        gallery_content.forEach(content => {
            let card = template.cloneNode(true);
            card.style = "";
            card.children[0].setAttribute("src", content.imgSrc);
            card.children[1].children[0].textContent = content.desc;
            card.children[1].children[1].textContent = content.loc;
            gallery.appendChild(card);
        });
    }
    document.addEventListener("DOMContentLoaded", function() {
        createUtilityGallery(); 
    });


    

// SELECT SHED GALLERY

    function createSelectGallery() {
        const template = document.getElementById("select-gallery-card-template");
        const gallery = template.parentNode;
        let gallery_content = [
          { imgSrc: "images/select-sheds/gallery/burlington-vt.jpg",
            desc: "Saltbox style Select Shed with a 2x2 barn sash window",
            loc: "Burlington, Vermont"},
          { imgSrc: "images/select-sheds/gallery/burlington-vt-10x12.jpg",
            desc: "10' x 12' Select Shed",
            loc: "Burlington, Vermont"},
          { imgSrc: "images/select-sheds/gallery/charlotte-vt.jpg",
            desc: "10' x 14' Select Shed with 2x3 barn sash windows",
            loc: "Charlotte, Vermont"},

          { imgSrc: "images/select-sheds/gallery/colchester-vt.jpg",
            desc: "10' x 16' Select Shed",
            loc: "Colchester, Vermont"},
          { imgSrc: "images/select-sheds/gallery/dorset-vt.jpg",
            desc: "12' x 16' Select Shed. 2x3 barn sash windows",
            loc: "Dorset, Vermont"},
          { imgSrc: "images/select-sheds/gallery/fayston-vt.jpg",
            desc: "10' x 12' Select Shed in Fayston, Vermont. 2x3 barn sash window",
            loc: "Fayston, Vermont"},

          { imgSrc: "images/select-sheds/gallery/fayston-vt-upgrade.jpg",
            desc: "12' x 14' Select Shed with metal roof , sliding door and barn sash window upgrade",
            loc: "Fayston, Vermont"},
          { imgSrc: "images/select-sheds/gallery/hubbardston-ma.jpg",
            desc: "10' x 14' Select Shed with 10/12 steep roof pitch upgrade and large overhang",
            loc: "Hubbardston, Massachusetts"},
          { imgSrc: "images/select-sheds/gallery/ira-vt.jpg",
            desc: "8' x 12' Select Shed with T1-11 siding and 2x2 barn sash window",
            loc: "Ira, Vermont"},

          { imgSrc: "images/select-sheds/gallery/jamaica-vt.jpg",
            desc: "10' x 14' Select Shed with metal roof upgrade",
            loc: "Jamaica, Vermont"},
          { imgSrc: "images/select-sheds/gallery/killington-vt.jpg",
            desc: "10' x 16' Select Shed with some nice upgrades. Steep roof, metal roof and gable barn sash window",
            loc: "Killington, Vermont"},
          { imgSrc: "images/select-sheds/gallery/lincoln-vt.jpg",
            desc: "10' x 16' saltbox style Select Shed with beautiful metal roof and siding upgrades",
            loc: "Lincoln, Vermont"},

          { imgSrc: "images/select-sheds/gallery/ludlow-vt.jpg",
            desc: "10' x 16' Select Shed with board and batten siding upgrade",
            loc: "Ludlow, Vermont"},
          { imgSrc: "images/select-sheds/gallery/middlesex-vt.jpg",
            desc: "8' x 14' saltbox style Select Shed",
            loc: "Middlesex, Vermont"},
          { imgSrc: "images/select-sheds/gallery/mtholly-vt.jpg",
            desc: "12' x 16' Select Shed with two sets of doors for snowmobiles. A large overhang for more space",
            loc: "Mt. Holly, Vermont"},

          { imgSrc: "images/select-sheds/gallery/peru-ma.jpg",
            desc: "10' x 20' Select Shed with plenty of storage space for a great price",
            loc: "Peru, Massachusetts"},
          { imgSrc: "images/select-sheds/gallery/plymouth vt.jpg",
            desc: "Multi-purpose Select Shed with metal roof and siding upgrades",
            loc: "Plymouth, Vermont"},
          { imgSrc: "images/select-sheds/gallery/proctor-vt.jpg",
            desc: "12' x 16' Select Shed with sliding doors, barn sash windows and heavy duty ramp",
            loc: "Proctor, Vermont"}
        ];
        gallery_content.forEach(content => {
            let card = template.cloneNode(true);
            card.style = "";
            card.children[0].setAttribute("src", content.imgSrc);
            card.children[1].children[0].textContent = content.desc;
            card.children[1].children[1].textContent = content.loc;
            gallery.appendChild(card);
        });
    }
    document.addEventListener("DOMContentLoaded", function() {
        createSelectGallery(); 
    });


    function replaceSelectGallery() {

        const template = document.getElementById("select-gallery-card-template");
        const gallery = template.parentNode;
        let gallery_content = [
          { imgSrc: "images/select-sheds/gallery/putney-vt.jpg",
            desc: "8' x 12' Select Shed with novelty siding and sliding doors upgrades",
            loc: "Putney, Vermont"},
          { imgSrc: "images/select-sheds/gallery/rutland-vt.jpg",
            desc: "10' x 14' Select Shed with 2x2 barn sash windows",
            loc: "Rutland, Vermont"},
          { imgSrc: "images/select-sheds/gallery/saratoga-ny.jpg",
            desc: "8' x 12' Select priced shed",
            loc: "Saratoga Springs, New York"},

          { imgSrc: "images/select-sheds/gallery/shelburne-vt.jpg",
            desc: "10' x 12' Select Shed with steep roof upgrade",
            loc: "Shelburne, Vermont"},
          { imgSrc: "images/select-sheds/gallery/sroyalton-vt.jpg",
            desc: "12' x 24' Select priced shed with a 6x24 large overhang. The double doors have an 8' wide opening",
            loc: "South Royalton, Vermont"},
          { imgSrc: "images/select-sheds/gallery/warren-vt.jpg",
            desc: "10' x 12' Select Shed with a 10/12 steep roof pitch upgrade and a barn sash for the gable",
            loc: "Warren, Vermont"},

          { imgSrc: "images/select-sheds/gallery/windham-nh.jpg",
            desc: "12' x 16' Select Shed with barn sash windows and flower boxes. 8’ wide double doors",
            loc: "Windham, New Hampshire"},
          { imgSrc: "",
            desc: "",
            loc: ""},
          { imgSrc: "",
            desc: "",
            loc: ""}

        ];
        
        while (gallery.firstChild) {
          gallery.removeChild(gallery.lastChild);
        }

        gallery.appendChild(template);
        gallery_content.forEach(content => {
            let card = template.cloneNode(true);
            card.style = "";
            card.children[0].setAttribute("src", content.imgSrc);
            card.children[1].children[0].textContent = content.desc;
            card.children[1].children[1].textContent = content.loc;
            gallery.appendChild(card);
        });
    }
    



// CUSTOM SHED GALLERY
    function createCustomGallery() {
        const template = document.getElementById("custom-gallery-card-template");
        const gallery = template.parentNode;
        let gallery_content = [
          { imgSrc: "images/custom-sheds/gallery/barnard-vt.jpg",
            desc: "14'x 18' Custom Shed with shiplap siding, barn sash windows, transom window, large overhang and sliding doors",
            loc: "Barnard, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/barnard-vt-2.jpg",
            desc: "14' x 18' Custom Shed with shiplap siding, barn sash windows, transom window, and sliding doors",
            loc: "Barnard, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/barre-vt.jpg",
            desc: "10' x 12' Custom pool house. Novelty siding and barn sash windows. 10/12 roof pitch",
            loc: "Barre, Vermont"},

          { imgSrc: "images/custom-sheds/gallery/10x16-custom.jpg",
            desc: "10' x 16' Custom Shed with transom window, barn sash windows and flower boxes",
            loc: "Bethany, Connecticut"},
          { imgSrc: "images/custom-sheds/gallery/burlington-vt.jpg",
            desc: "10' x 16' Custom Shed with 6x16 large overhang, single sliding barn door and barn sash windows. Shiplap siding and 10/12 roof pitch",
            loc: "Burlington, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/cavendish-vt.jpg",
            desc: "12' x 16' Custom Shed",
            loc: "Cavendish, Vermont"},

          { imgSrc: "images/custom-sheds/gallery/charlotte-vt.jpg",
            desc: "12' x 16' with shiplap siding, sliding barn doors, a few barn sash windows and an extra steep 12/12 roof pitch",
            loc: "Charlotte, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/charlotte-vt-2.jpg",
            desc: "12' x 24' Custom Shed with shiplap siding, large roof dormer, custom windows and door",
            loc: "Charlotte, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/charlotte-vt-3.jpg",
            desc: "12' x 24' Custom Shed",
            loc: "Charlotte, Vermont"},

          { imgSrc: "images/custom-sheds/gallery/charlotte-vt-4.jpg",
            desc: "10' x 14' Custom Shed with novelty siding and oversized barn sash windows",
            loc: "Charlotte, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/charlotte-vt-overhang.jpg",
            desc: "14' x 20' Custom Shed with novelty siding, large overhang, barn sash windows and wood louvered vents",
            loc: "Charlotte, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/charlotte-vt-shiplap.jpg",
            desc: "10' x 12' Custom Shed with a 6x12 overhang, shiplap siding, barn sash windows and metal roof. 10/12 roof pitch",
            loc: "Charlotte, Vermont"},

          
          { imgSrc: "images/custom-sheds/gallery/8x12-custom.jpg",
            desc: "8' x 12' Custom Shed with a 12/12 roof pitch and 7'4 sidewalls",
            loc: "Dorset, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/dorset-vt.jpg",
            desc: "12' x 20' Custom Shed with novelty siding, barn sash windows and a metal roof upgrade",
            loc: "Dorset, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/fayston-vt.jpg",
            desc: "12' x 20' with 8x20 overhang, and 45 degree, 12/12 roof pitch. The transom windows above the doors are a nice touch to gain some extra light",
            loc: "Fayston, Vermont"},

          { imgSrc: "images/custom-sheds/gallery/goshen-vt.jpg",
            desc: "12' x 22' Custom Shed with board and batten siding and steep 10/12 roof pitch",
            loc: "Goshen, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/hanover-nh.jpg",
            desc: "12' x 20' Custom Shed with sliding doors, board and batten siding, barn sash windows, and a heavy duty ramp",
            loc: "Hanover, New Hampshire"},
          { imgSrc: "images/custom-sheds/gallery/hebron-nh.jpg",
            desc: "12' x 16' with an extra steep 12/12 pitch roof, T1-11 siding and a 6x16 large overhang and sliding doors. 2' x 3' vinyl windows with screens",
            loc: "Hebron, New Hampshire"},

          { imgSrc: "images/custom-sheds/gallery/hinesburg-vt.jpg",
            desc: "12' x 18' Custom Shed with sliding barn doors, barn sash windows and novelty siding. 10/12 steep roof pitch",
            loc: "Hinesburg, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/huntington-vt.jpg",
            desc: "12' x 16' Custom Shed with novelty siding, large dormer, barn sash windows with flower boxes and wood louvered vents. 12/12 roof pitch",
            loc: "Huntington, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/huntington-vt-2.jpg",
            desc: "12' x 16' Custom Shed with novelty siding, large roof dormer, barn sash windows, transom window, single entry door, and a 45 degree, 12/12 roof pitch",
            loc: "Huntington, Vermont"},

          { imgSrc: "images/custom-sheds/gallery/jericho-vt.jpg",
            desc: "8' x 12' Custom Shed. T1-11 siding and 45 degree, 12/12 roof pitch",
            loc: "Jericho, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/landgrove-vt.jpg",
            desc: "12' x 16' Custom Shed with sliding doors and shiplap siding.",
            loc: "Landgrove, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/10x12-custom.jpg",
            desc: "10' x 12' Custom Shed with shiplap siding, barn sash windows and flower boxes",
            loc: "Leyden, Massachusetts"},

          { imgSrc: "images/custom-sheds/gallery/lyme-nh.jpg",
            desc: "10' x 12' Custom Shed with a 5' x 12' large overhang and shiplap siding",
            loc: "Lyme, New Hampshire"},
          { imgSrc: "images/custom-sheds/gallery/12x16-custom.jpg",
            desc: "12' x 16' Custom with board and batten siding, metal roof upgrade and large overhang with 10/12 roof pitch",
            loc: "Manchester, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/middletown-vt.jpg",
            desc: "12' x 16' Custom Shed with board and batten siding and large overhang. Metal roof and sliding door upgrades",
            loc: "Middletown Springs, Vermont"},

          { imgSrc: "images/custom-sheds/gallery/middletown-vt-2.jpg",
            desc: "12' x 24' Custom Shed/home addition",
            loc: "Middletown Springs, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/mooretown-vt.jpg",
            desc: "Custom Shed with shiplap siding, barn sash windows, and oversized transom above the doors that perfectly fits the gable. 12/12 45 degree roof pitch",
            loc: "Mooretown, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/moriah-ny.jpg",
            desc: "14' x 20' Custom Shed with a beautiful metal roof, transom window, sliding doors and wood louvered vents",
            loc: "Moriah, New York"},

          { imgSrc: "images/custom-sheds/gallery/newlondon-nh.jpg",
            desc: "14' x 18' Custom Shed. Cedar clapboard, cedar shakes, full loft with stairs",
            loc: "New London, New Hampshire"},
          { imgSrc: "images/custom-sheds/gallery/newlondon-nh-2.jpg",
            desc: "14' x 18' Custom Shed. A standard sized garage on the side. Full loft above with stairs",
            loc: "New London, New Hampshire"},
          { imgSrc: "images/custom-sheds/gallery/chittenden-vt.jpg",
            desc: "12' x 20' Custom Shed. Barn sash windows that go well with the board and batten siding",
            loc: "North Chittenden, Vermont"},

          { imgSrc: "images/custom-sheds/gallery/pawlet-vt.jpg",
            desc: "12' x 16' Custom Shed with large overhang, novelty siding and transom window",
            loc: "Pawlet, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/plymouth-vt.jpg",
            desc: "12' x 20' Custom Shed with transom window, sliding doors and shiplap siding",
            loc: "Plymouth, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/richmond-vt.jpg",
            desc: "10' x 16' Custom Shed with shiplap siding, transom window, barn sash windows and side entry door",
            loc: "Richmond, Vermont"},

          { imgSrc: "images/custom-sheds/gallery/rutland-vt.jpg",
            desc: "10' x 12' Custom garden shed with novelty siding and a large overhang",
            loc: "Rutland, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/sandlake-ny.jpg",
            desc: "12' x 16' Custom Shed with board and batten siding and oversized 8' wide double doors. Loft area for extra storage space. 10/12 roof pitch",
            loc: "Sand Lake, New York"},
          { imgSrc: "images/custom-sheds/gallery/shrewsbury-vt.jpg",
            desc: "12' x 20' Custom Shed with 10/12 steep roof pitch, board and batten siding, wood louvered vents and oversized 8' wide doors for a vehicle or tractor",
            loc: "Shrewsbury, Vermont"},

          { imgSrc: "images/custom-sheds/gallery/sunapee-nh.jpg",
            desc: "12' x 18' Custom Shed with novelty siding with 8' extra wide double doors. 10/12 roof pitch. Wide enough to park a vehicle for the winter",
            loc: "Sunapee, New Hampshire"},
          { imgSrc: "images/custom-sheds/gallery/townshend-vt.jpg",
            desc: "10' x 12' Custom Shed with shiplap siding",
            loc: "Townshend, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/single-door.jpg",
            desc: "10' x 12' Custom Shed with barn sash windows and a single door upgrade",
            loc: "Williamstown, Massachusetts"},
          
          { imgSrc: "images/custom-sheds/gallery/tall-shed.jpg",
            desc: "8' x 12' Custom Shed with a 12/12 roof pitch, shiplap siding, and tall sidewalls to give room for the transom window. Side single door for quick access",
            loc: "West Dover, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/wallingford-vt.jpg",
            desc: "12' x 18' Custom Shed with metal roof, shiplap siding and a small cupola",
            loc: "Wallingford, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/waterbury-vt.jpg",
            desc: "10' x 16' Custom Shed with a 6x16 overhang, metal roof, novelty siding, barn sash windows, and transom window. 10/12 steep roof pitch",
            loc: "Waterbury, Vermont"},

          { imgSrc: "images/custom-sheds/gallery/wdover-vt.jpg",
            desc: "12' x 16' Custom Shed with barn sash windows, shiplap siding and sliding doors",
            loc: "West Dover, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/wdover-vt2.jpg",
            desc: "12' x 20' Custom Shed with steep roof pitch, shiplap siding, transom window, barn sash windows and single entry door",
            loc: "West Dover, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/williston-vt.jpg",
            desc: "10' x 14' Custom Shed with board and batten siding, a large 5x14 overhang, vinyl windows and a 10/12 roof pitch",
            loc: "Williston, Vermont"},

          { imgSrc: "images/custom-sheds/gallery/williston-vt-2.jpg",
            desc: "12' x 16' Custom Shed with a 5x16 large overhang, novelty siding and sliding barn doors. 10/12 steep roof pitch",
            loc: "Williston, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/williston-vt-3.jpg",
            desc: "12' x 20' Custom Shed with board and batten siding, barn sash windows and a 45 degree roof pitch. Just an all-around beautiful shed",
            loc: "Williston, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/windsor-vt.jpg",
            desc: "12' x 16' Custom Shed with novelty siding, oversized transom window and 8’ wide double doors",
            loc: "Windsor, Vermont"},

          { imgSrc: "images/custom-sheds/gallery/woodstock-vt.jpg",
            desc: "14' x 20' Custom Shed with shiplap siding, barn sash windows, transom window, single door and wood louvered vents",
            loc: "Woodstock, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/woodstock-vt2.jpg",
            desc: "4' x 20' Custom Shed with shiplap siding, barn sash windows, transom window, single door and wood louvered vents",
            loc: "Woodstock, Vermont"},
          { imgSrc: "images/custom-sheds/gallery/wtownshend-vt.jpg",
            desc: "12' x 20' Custom Shed with shiplap siding, large overhang, single door, metal roof and barn sash windows",
            loc: "West Townshend, Vermont"}
        ];
        gallery_content.forEach(content => {
            let card = template.cloneNode(true);
            card.style = "";
            card.children[0].setAttribute("src", content.imgSrc);
            card.children[1].children[0].textContent = content.desc;
            card.children[1].children[1].textContent = content.loc;
            gallery.appendChild(card);
        });
    }
    document.addEventListener("DOMContentLoaded", function() {
        createCustomGallery(); 
    });



// SUGAR HOUSE GALLERY
    function createSugarHouseGallery() {
        const template = document.getElementById("sugarhouse-gallery-card-template");
        const gallery = template.parentNode;
        let gallery_content = [
          { imgSrc: "images/sugar-houses/gallery/granville-ny.jpg",
            desc: "8' x 12' Custom Sugarhouse",
            loc: "Granville, New York"},
          { imgSrc: "images/sugar-houses/gallery/greenwich-ny.jpg",
            desc: "12' x 16' Custom sugarhouse with cupola barn sashes that are fully functional",
            loc: "Greenwich, New York"},
          { imgSrc: "images/sugar-houses/gallery/greenwich-ny2.jpg",
            desc: "Board and batten siding, wood louvered vents, and barn sash window options",
            loc: "Greenwich, New York"},

          { imgSrc: "images/sugar-houses/gallery/hanover-nh.jpg",
            desc: "8' x 12' Select Sugarhouse",
            loc: "Hanover, New Hampshire"},
          { imgSrc: "images/sugar-houses/gallery/hanover-nh2.jpg",
            desc: "Barn sash windows and board and batten siding upgrade",
            loc: "Hanover, New Hampshire"},
          { imgSrc: "images/sugar-houses/gallery/hanover-nh3.jpg",
            desc: "Interior view of cupola",
            loc: "Hanover, New Hampshire"},

          { imgSrc: "images/sugar-houses/gallery/langdon-nh.jpg",
            desc: "12' x 16' Select Sugarhouse with T1-11 siding with some well-placed barn sash windows.",
            loc: "Langdon, New Hampshire"},
          { imgSrc: "images/sugar-houses/gallery/langdon-nh2.jpg",
            desc: "Fully functional cupola doors",
            loc: "Langdon, New Hampshire"},
          { imgSrc: "images/sugar-houses/gallery/manchester-vt.jpg",
            desc: "12' x 20' Custom Sugarhouse",
            loc: "Manchester, Vermont"},

          { imgSrc: "images/sugar-houses/gallery/manchester-vt2.jpg",
            desc: "Metal roof, barn sash windows, flower boxes and wood louvered vents",
            loc: "Manchester, Vermont"},
          { imgSrc: "images/sugar-houses/gallery/middletown-vt.jpg",
            desc: "14' x 18' Custom Sugarhouse with oversized 30”x39” barn sash windows and board and batten siding.",
            loc: "Middletown Springs, Vermont"},
          { imgSrc: "images/sugar-houses/gallery/peacham-vt.jpg",
            desc: "12' x 16' Custom Sugarhouse/Cabin. Front porch, large overhang and log cabin siding.",
            loc: "Peacham, Vermont"},

          { imgSrc: "images/sugar-houses/gallery/sroyalton-vt.jpg",
            desc: "10' x 12' Select Sugarhouse with an extra door and T1-11 siding. Affordable and functional!",
            loc: "South Royalton, Vermont"},
          { imgSrc: "images/sugar-houses/gallery/stowe-vt.jpg",
            desc: "Beautiful 12' x 24' Custom Sugarhouse with huge 8’ wide cupola",
            loc: "Stowe, Vermont"},
          { imgSrc: "images/sugar-houses/gallery/stowe-vt2.jpg",
            desc: "Double doors, single door, metal roof, barn sash windows and custom overhang for firewood",
            loc: "Stowe, Vermont"},

          { imgSrc: "images/sugar-houses/gallery/warren-vt.jpg",
            desc: "14' x 16' Custom Sugarhouse",
            loc: "Warren, Vermont"},
          { imgSrc: "images/sugar-houses/gallery/warren-vt2.jpg",
            desc: "Board and batten siding, wood louvered vents with oversized barn sash windows",
            loc: "Warren, Vermont"},
          { imgSrc: "images/sugar-houses/gallery/whiting-vt.jpg",
            desc: "12' x 20' Custom Sugarhouse with sliding doors, metal roof, 8’ wide cupola, board and batten siding and heavy duty ramp.",
            loc: "Whiting, Vermont"}
        ];
        gallery_content.forEach(content => {
            let card = template.cloneNode(true);
            card.style = "";
            card.children[0].setAttribute("src", content.imgSrc);
            card.children[1].children[0].textContent = content.desc;
            card.children[1].children[1].textContent = content.loc;
            gallery.appendChild(card);
        });
    }
    document.addEventListener("DOMContentLoaded", function() {
        createSugarHouseGallery(); 
    });


// BUILDING PROCESS GALLERY
        function createProcessGallery() {
        const template = document.getElementById("process-gallery-card-template");
        const gallery = template.parentNode;
        let gallery_content = [
          { imgSrc: "images/building-process/gallery/2x4-framing.jpg",
            desc: "2x4 wall framing",},
          { imgSrc: "images/building-process/gallery/30-year-shingle.jpg",
            desc: "Minimum 30 year warranty shingles",},
          { imgSrc: "images/building-process/gallery/4x4-runners.jpg",
            desc: "Pressure treated 4x4 runners with pressure treated 2x6 floor joists",},

          { imgSrc: "images/building-process/gallery/advan-tech-floor.jpg",
            desc: "AdvanTech tongue and groove floor sheathing",},
          { imgSrc: "images/building-process/gallery/conventional-framing.jpg",
            desc: "Conventional framing. 2x8 Ridge board and 2x6 rafters",},
          { imgSrc: "images/building-process/gallery/fascia-softfit.jpg",
            desc: "Fascia, soffit and corner trim returns",},

          { imgSrc: "images/building-process/gallery/heavyduty-door.jpg",
            desc: "Heavy duty door construction on all sheds",},
          { imgSrc: "images/building-process/gallery/ladder-framing.jpg",
            desc: "Conventional ladder framing and sub fascia",},
          { imgSrc: "images/building-process/gallery/metal-roof.jpg",
            desc: "Metal roofs are installed over zip system sheathing. No purlins. That means no condensation in your shed",},

          { imgSrc: "images/building-process/gallery/overlapping.jpg",
            desc: "Overlapping and locking double top plates",},
          { imgSrc: "images/building-process/gallery/t-11.jpg",
            desc: "T1-11, texture 1-11 siding",},
          { imgSrc: "images/building-process/gallery/zip-system.jpg",
            desc: "zip system sheathing",},

          { imgSrc: "images/building-process/gallery/boardbatten-siding.jpg",
            desc: "Board and batten siding",},
          { imgSrc: "images/building-process/gallery/novelty-siding.jpg",
            desc: "Novelty siding",},
          { imgSrc: "images/building-process/gallery/shiplap-siding.jpg",
            desc: "Shiplap siding",}
        ];
        gallery_content.forEach(content => {
            let card = template.cloneNode(true);
            card.style = "";
            card.children[0].setAttribute("src", content.imgSrc);
            card.children[1].children[0].textContent = content.desc;
            gallery.appendChild(card);
        });
    }
    document.addEventListener("DOMContentLoaded", function() {
        createProcessGallery(); 
    });

    