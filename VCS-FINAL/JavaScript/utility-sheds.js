
// UTILITY SHED GALLERY

function createUtilityGallery() {
  const template = document.getElementById("utilityGalleryCardTemplate");
  const gallery = template.parentNode;
  let gallery_content = [
    {
      imgSrc: "images/utility-sheds/gallery/webp/barnard-vt.webp",
      desc: "10' x 14' Utility Shed with barn sash windows",
      loc: "Barnard, Vermont",
    },
    {
      imgSrc: "images/utility-sheds/gallery/webp/barre-vt.webp",
      desc: "8' x 10' Utility Shed",
      loc: "Barre, Vermont",
    },
    {
      imgSrc: "images/utility-sheds/gallery/webp/barn-sash.webp",
      desc: "10' x 16' Utility Shed with 2x3 barn sash windows",
      loc: "Brattleboro, Vermont",
    },
    {
      imgSrc: "images/utility-sheds/gallery/webp/burlington-vt.webp",
      desc: "10' x 12' Utility Shed with barn sash windows",
      loc: "Burlington, Vermont",
    },
    {
      imgSrc: "images/utility-sheds/gallery/webp/colchester-vt.webp",
      desc: "8' x 10' Utility Shed with vinyl windows upgrade",
      loc: "Colchester, Vermont",
    },
    {
      imgSrc: "images/utility-sheds/gallery/webp/colchester-vt-overhang.webp",
      desc: "12' x 16' Utility Shed with overhang, vent and window upgrades",
      loc: "Colchester, Vermont",
    },
    {
      imgSrc: "images/utility-sheds/gallery/webp/essex-vt.webp",
      desc: "8' x 10' Utility Shed with 4x10 large overhang",
      loc: "Essex Junction, Vermont",
    },
    {
      imgSrc: "images/utility-sheds/gallery/webp/ira-vt.webp",
      desc: "8' x 10' Utility Shed",
      loc: "Ira, Vermont",
    },
    {
      imgSrc: "images/utility-sheds/gallery/webp/pittsfield-vt.webp",
      desc: "8' x 12' Utility Shed",
      loc: "Pittsfield, Vermont",
    },
    {
      imgSrc: "images/utility-sheds/gallery/webp/sandgate-vt.webp",
      desc: "8' x 12' Utility shed",
      loc: "Sandgate, Vermont",
    },
    {
      imgSrc: "images/utility-sheds/gallery/webp/sburlington-vt.webp",
      desc: "10' x 14' Utility shed",
      loc: "South Burlington, Vermont",
    },
    {
      imgSrc: "images/utility-sheds/gallery/webp/warren-vt.webp",
      desc: "8' x 12' Utility Shed",
      loc: "Warren, Vermont",
    },
    {
      imgSrc: "images/utility-sheds/gallery/webp/waterbury-vt.webp",
      desc: "10' x 14' Utility priced shed",
      loc: "Waterbury, Vermont",
    },
    {
      imgSrc: "images/utility-sheds/gallery/webp/winhall-vt.webp",
      desc: "12' x 14' Utility Shed with 5x14 large overhang",
      loc: "Winhall, Vermont",
    },
    {
      imgSrc: "images/utility-sheds/gallery/webp/windham-vt.webp",
      desc: "8' x 12' Utility Shed",
      loc: "Windham, Vermont",
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
  createUtilityGallery();
});
let currentPage = 0;