

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




// FAQ DROPDOWN MENUS



function faqClose() {
            document.getElementById("faq-body").style.height = 
            document.getElementById("faq-content").offsetHeight + "px";
        }




// /* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
// function faqDropdown() {
//   document.getElementById("faqDropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches(".dropbtn")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// }

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

    // const buttonNext = document.getElementById('pOneNext');
    // buttonNext.addEventListener("click", replaceSelectGallery);

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

    