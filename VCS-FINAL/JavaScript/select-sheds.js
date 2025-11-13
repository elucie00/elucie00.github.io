
// SELECT SHED GALLERY

function createSelectGallery() {
  const template = document.getElementById("selectGalleryCardTemplate");
  const gallery = template.parentNode;
  let gallery_content = [
    {
      imgSrc: "images/select-sheds/gallery/webp/burlington-vt.webp",
      desc: "Saltbox style Select Shed with a 2x2 barn sash window",
      loc: "Burlington, Vermont",
    },
    {
      imgSrc: "images/select-sheds/gallery/webp/burlington-vt-10x12.webp",
      desc: "10' x 12' Select Shed",
      loc: "Burlington, Vermont",
    },
    {
      imgSrc: "images/select-sheds/gallery/webp/charlotte-vt.webp",
      desc: "10' x 14' Select Shed with 2x3 barn sash windows",
      loc: "Charlotte, Vermont",
    },

    {
      imgSrc: "images/select-sheds/gallery/webp/colchester-vt.webp",
      desc: "10' x 16' Select Shed",
      loc: "Colchester, Vermont",
    },
    {
      imgSrc: "images/select-sheds/gallery/webp/dorset-vt.webp",
      desc: "12' x 16' Select Shed. 2x3 barn sash windows",
      loc: "Dorset, Vermont",
    },
    {
      imgSrc: "images/select-sheds/gallery/webp/fayston-vt.webp",
      desc: "10' x 12' Select Shed in Fayston, Vermont. 2x3 barn sash window",
      loc: "Fayston, Vermont",
    },

    {
      imgSrc: "images/select-sheds/gallery/webp/fayston-vt-upgrade.webp",
      desc: "12' x 14' Select Shed with metal roof , sliding door and barn sash window upgrade",
      loc: "Fayston, Vermont",
    },
    {
      imgSrc: "images/select-sheds/gallery/webp/hubbardston-ma.webp",
      desc: "10' x 14' Select Shed with 10/12 steep roof pitch upgrade and large overhang",
      loc: "Hubbardston, Massachusetts",
    },
    {
      imgSrc: "images/select-sheds/gallery/webp/ira-vt.webp",
      desc: "8' x 12' Select Shed with T1-11 siding and 2x2 barn sash window",
      loc: "Ira, Vermont",
    },

    {
      imgSrc: "images/select-sheds/gallery/webp/jamaica-vt.webp",
      desc: "10' x 14' Select Shed with metal roof upgrade",
      loc: "Jamaica, Vermont",
    },
    {
      imgSrc: "images/select-sheds/gallery/webp/killington-vt.webp",
      desc: "10' x 16' Select Shed with some nice upgrades. Steep roof, metal roof and gable barn sash window",
      loc: "Killington, Vermont",
    },
    {
      imgSrc: "images/select-sheds/gallery/webp/lincoln-vt.webp",
      desc: "10' x 16' saltbox style Select Shed with beautiful metal roof and siding upgrades",
      loc: "Lincoln, Vermont",
    },

    {
      imgSrc: "images/select-sheds/gallery/webp/ludlow-vt.webp",
      desc: "10' x 16' Select Shed with board and batten siding upgrade",
      loc: "Ludlow, Vermont",
    },
    {
      imgSrc: "images/select-sheds/gallery/webp/middlesex-vt.webp",
      desc: "8' x 14' saltbox style Select Shed",
      loc: "Middlesex, Vermont",
    },
    {
      imgSrc: "images/select-sheds/gallery/webp/mtholly-vt.webp",
      desc: "12' x 16' Select Shed with two sets of doors for snowmobiles. A large overhang for more space",
      loc: "Mt. Holly, Vermont",
    },

    {
      imgSrc: "images/select-sheds/gallery/webp/peru-ma.webp",
      desc: "10' x 20' Select Shed with plenty of storage space for a great price",
      loc: "Peru, Massachusetts",
    },
    {
      imgSrc: "images/select-sheds/gallery/webp/plymouth vt.webp",
      desc: "Multi-purpose Select Shed with metal roof and siding upgrades",
      loc: "Plymouth, Vermont",
    },
    {
      imgSrc: "images/select-sheds/gallery/webp/proctor-vt.webp",
      desc: "12' x 16' Select Shed with sliding doors, barn sash windows and heavy duty ramp",
      loc: "Proctor, Vermont",
    },
    {
      imgSrc: "images/select-sheds/gallery/webp/putney-vt.webp",
      desc: "8' x 12' Select Shed with novelty siding and sliding doors upgrades",
      loc: "Putney, Vermont",
    },
    {
      imgSrc: "images/select-sheds/gallery/webp/rutland-vt.webp",
      desc: "10' x 14' Select Shed with 2x2 barn sash windows",
      loc: "Rutland, Vermont",
    },
    {
      imgSrc: "images/select-sheds/gallery/webp/saratoga-ny.webp",
      desc: "8' x 12' Select priced shed",
      loc: "Saratoga Springs, New York",
    },

    {
      imgSrc: "images/select-sheds/gallery/webp/shelburne-vt.webp",
      desc: "10' x 12' Select Shed with steep roof upgrade",
      loc: "Shelburne, Vermont",
    },
    {
      imgSrc: "images/select-sheds/gallery/webp/sroyalton-vt.webp",
      desc: "12' x 24' Select priced shed with a 6x24 large overhang. The double doors have an 8' wide opening",
      loc: "South Royalton, Vermont",
    },
    {
      imgSrc: "images/select-sheds/gallery/webp/warren-vt.webp",
      desc: "10' x 12' Select Shed with a 10/12 steep roof pitch upgrade and a barn sash for the gable",
      loc: "Warren, Vermont",
    },
    {
      imgSrc: "images/select-sheds/gallery/webp/windham-nh.webp",
      desc: "12' x 16' Select Shed with barn sash windows and flower boxes. 8' wide double doors",
      loc: "Windham, New Hampshire",
    },
  ];
  let i = 0;
  gallery_content.forEach((content) => {
    let card = template.cloneNode(true);
    if (i < 18) {
      card.style = "";
    }
    card.children[0].setAttribute("src", content.imgSrc);
    card.children[1].children[0].textContent = content.desc;
    card.children[1].children[1].textContent = content.loc;
    card.setAttribute("id", "");
    gallery.appendChild(card);
    i++;
  });
  template.remove();
  document.getElementById("page").innerHTML =
    "<p>Page 1/" + Math.ceil(gallery.children.length / 18) + "</p>";
  document.getElementById("page2").innerHTML =
    "<p>Page 1/" + Math.ceil(gallery.children.length / 18) + "</p>";
}
document.addEventListener("DOMContentLoaded", function () {
  createSelectGallery();
});
let currentPage = 0;