

// NAVIGATION DROPDOWN BUTTON
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }




  }
}




// GALLERY TEMPLATE


    function createGallery() {
        const template = document.getElementById('gallery-card-template');
        const gallery = template.parentNode;
        let gallery_content = [
          {
                imgSrc: 'images/utility-sheds/barn-sash.jpg',
                desc: '10x16 Utility shed with 2x3 barn sash windows',
                loc: ''
            },
            {
                imgSrc: 'images/utility-sheds/barnard-vt.jpg',
                desc: '10x14 Utility shed with barn sash windows',
                loc: 'Barnard, Vermont'
            },
            {
                imgSrc: 'images/utility-sheds/barre-vt.jpg',
                desc: '8x10 Utility shed',
                loc: 'Barre, Vermont'
            },  
          {
                imgSrc: 'images/utility-sheds/burlington-vt.jpg',
                desc: '10x12 Utility shed with barn sash windows',
                loc: 'Burlington, Vermont'
            },
            {
                imgSrc: 'images/utility-sheds/colchester-vt.jpg',
                desc: '8x10 Utility shed with vinyl windows upgrade',
                loc: 'Colchester, Vermont'
            },
            {
                imgSrc: 'images/utility-sheds/colchester-vt-overhang.jpg',
                desc: '12x16 Utility shed with overhang, vent and window upgrades',
                loc: 'Colchester, Vermont'
            },


            {
                imgSrc: 'images/utility-sheds/essex-vt.jpg',
                desc: '8x10 Utility shed with 4x10 large overhang',
                loc: 'Essex Junction, Vermont'
            },
            {
                imgSrc: 'images/utility-sheds/ira-vt.jpg',
                desc: '8x10 Utility shed',
                loc: 'Ira, Vermont'
            },
            {
                imgSrc: 'images/utility-sheds/winhall-vt.jpg',
                desc: '12x14 Utility shed with 5x14 large overhang',
                loc: 'Winhall, Vermont'
            },


            {
                imgSrc: 'images/utility-sheds/pittsfield-vt.jpg',
                desc: '8x12 Utility shed',
                loc: 'Pittsfield, Vermont'
            },
            {
                imgSrc: 'images/utility-sheds/sandgate-vt.jpg',
                desc: '8x12 Utilty shed',
                loc: 'Sandgate, Vermont'
            },
            {
                imgSrc: 'images/utility-sheds/sburlington-vt.jpg',
                desc: '10x14 Utilty shed',
                loc: 'South Burlington, Vermont'
            },


            {
                imgSrc: 'images/utility-sheds/warren-vt.jpg',
                desc: '8x12 Utilty shed',
                loc: 'Warren, Vermont'
            },
            {
                imgSrc: 'images/utility-sheds/waterbury-vt.jpg',
                desc: '10x14 Utility priced shed',
                loc: 'Waterbury, Vermont'
            },
            {
                imgSrc: 'images/utility-sheds/windham-vt.jpg',
                desc: '8x12 Utility shed',
                loc: 'Windham, Vermont'
            }
        ];

        gallery_content.forEach(content => {
            let card = template.cloneNode(true);
            card.style = '';
            card.children[0].setAttribute('src', content.imgSrc);
            card.children[1].children[0].textContent = content.desc;
            card.children[1].children[1].textContent = content.loc;
            gallery.appendChild(card);
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        createGallery(); 
    });