
// SUGAR HOUSE GALLERY

function createSugarGallery() {
  const template = document.getElementById("sugarGalleryCardTemplate");
  const gallery = template.parentNode;

  let gallery_content = [
    {
      imgSrc: "images/sugar-houses/gallery/webp/granville-ny.webp",
      desc: "8' x 12' Custom Sugarhouse",
      loc: "Granville, New York",
    },
    {
      imgSrc: "images/sugar-houses/gallery/webp/greenwich-ny.webp",
      desc: "12' x 16' Custom sugarhouse with cupola barn sashes that are fully functional",
      loc: "Greenwich, New York",
    },
    {
      imgSrc: "images/sugar-houses/gallery/webp/greenwich-ny2.webp",
      desc: "Board and batten siding, wood louvered vents, and barn sash window options",
      loc: "Greenwich, New York",
    },

    {
      imgSrc: "images/sugar-houses/gallery/webp/hanover-nh.webp",
      desc: "8' x 12' Select Sugarhouse",
      loc: "Hanover, New Hampshire",
    },
    {
      imgSrc: "images/sugar-houses/gallery/webp/hanover-nh2.webp",
      desc: "Barn sash windows and board and batten siding upgrade",
      loc: "Hanover, New Hampshire",
    },
    {
      imgSrc: "images/sugar-houses/gallery/webp/hanover-nh3.webp",
      desc: "Interior view of cupola",
      loc: "Hanover, New Hampshire",
    },

    {
      imgSrc: "images/sugar-houses/gallery/webp/langdon-nh.webp",
      desc: "12' x 16' Select Sugarhouse with T1-11 siding with some well-placed barn sash windows.",
      loc: "Langdon, New Hampshire",
    },
    {
      imgSrc: "images/sugar-houses/gallery/webp/langdon-nh2.webp",
      desc: "Fully functional cupola doors",
      loc: "Langdon, New Hampshire",
    },
    {
      imgSrc: "images/sugar-houses/gallery/webp/manchester-vt.webp",
      desc: "12' x 20' Custom Sugarhouse",
      loc: "Manchester, Vermont",
    },

    {
      imgSrc: "images/sugar-houses/gallery/webp/manchester-vt2.webp",
      desc: "Metal roof, barn sash windows, flower boxes and wood louvered vents",
      loc: "Manchester, Vermont",
    },
    {
      imgSrc: "images/sugar-houses/gallery/webp/middletown-vt.webp",
      desc: "14' x 18' Custom Sugarhouse with oversized 30”x39” barn sash windows and board and batten siding.",
      loc: "Middletown Springs, Vermont",
    },
    {
      imgSrc: "images/sugar-houses/gallery/webp/peacham-vt.webp",
      desc: "12' x 16' Custom Sugarhouse/Cabin. Front porch, large overhang and log cabin siding.",
      loc: "Peacham, Vermont",
    },

    {
      imgSrc: "images/sugar-houses/gallery/webp/sroyalton-vt.webp",
      desc: "10' x 12' Select Sugarhouse with an extra door and T1-11 siding. Affordable and functional!",
      loc: "South Royalton, Vermont",
    },
    {
      imgSrc: "images/sugar-houses/gallery/webp/stowe-vt.webp",
      desc: "Beautiful 12' x 24' Custom Sugarhouse with huge 8' wide cupola",
      loc: "Stowe, Vermont",
    },
    {
      imgSrc: "images/sugar-houses/gallery/webp/stowe-vt2.webp",
      desc: "Double doors, single door, metal roof, barn sash windows and custom overhang for firewood",
      loc: "Stowe, Vermont",
    },

    {
      imgSrc: "images/sugar-houses/gallery/webp/warren-vt.webp",
      desc: "14' x 16' Custom Sugarhouse",
      loc: "Warren, Vermont",
    },
    {
      imgSrc: "images/sugar-houses/gallery/webp/warren-vt2.webp",
      desc: "Board and batten siding, wood louvered vents with oversized barn sash windows",
      loc: "Warren, Vermont",
    },
    {
      imgSrc: "images/sugar-houses/gallery/webp/whiting-vt.webp",
      desc: "12' x 20' Custom Sugarhouse with sliding doors, metal roof, 8' wide cupola, board and batten siding and heavy duty ramp.",
      loc: "Whiting, Vermont",
    },
  ];
  let i = 0;
  gallery_content.forEach((content) => {
    let card = template.cloneNode(true);
    if (i < 12) {
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
    "<p>Page 1/" + Math.ceil(gallery.children.length / 12) + "</p>";
  document.getElementById("page2").innerHTML =
    "<p>Page 1/" + Math.ceil(gallery.children.length / 12) + "</p>";
}
document.addEventListener("DOMContentLoaded", function () {
  createSugarGallery();
});
let currentPage = 0;