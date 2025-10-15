// CUSTOM SHED GALLERY
function createCustomGallery() {
  const template = document.getElementById("customGalleryCardTemplate");
  const gallery = template.parentNode;
  let gallery_content = [
    {
      imgSrc: "images/custom-sheds/gallery/barnard-vt.jpg",
      desc: "14'x 18' Custom Shed with shiplap siding, barn sash windows, transom window, large overhang and sliding doors",
      loc: "Barnard, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/barnard-vt-2.jpg",
      desc: "14' x 18' Custom Shed with shiplap siding, barn sash windows, transom window, and sliding doors",
      loc: "Barnard, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/barre-vt.jpg",
      desc: "10' x 12' Custom pool house. Novelty siding and barn sash windows. 10/12 roof pitch",
      loc: "Barre, Vermont",
    },

    {
      imgSrc: "images/custom-sheds/gallery/10x16-custom.jpg",
      desc: "10' x 16' Custom Shed with transom window, barn sash windows and flower boxes",
      loc: "Bethany, Connecticut",
    },
    {
      imgSrc: "images/custom-sheds/gallery/burlington-vt.jpg",
      desc: "10' x 16' Custom Shed with 6x16 large overhang, single sliding barn door and barn sash windows. Shiplap siding and 10/12 roof pitch",
      loc: "Burlington, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/cavendish-vt.jpg",
      desc: "12' x 16' Custom Shed",
      loc: "Cavendish, Vermont",
    },

    {
      imgSrc: "images/custom-sheds/gallery/charlotte-vt.jpg",
      desc: "12' x 16' with shiplap siding, sliding barn doors, a few barn sash windows and an extra steep 12/12 roof pitch",
      loc: "Charlotte, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/charlotte-vt-2.jpg",
      desc: "12' x 24' Custom Shed with shiplap siding, large roof dormer, custom windows and door",
      loc: "Charlotte, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/charlotte-vt-3.jpg",
      desc: "12' x 24' Custom Shed",
      loc: "Charlotte, Vermont",
    },

    {
      imgSrc: "images/custom-sheds/gallery/charlotte-vt-4.jpg",
      desc: "10' x 14' Custom Shed with novelty siding and oversized barn sash windows",
      loc: "Charlotte, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/charlotte-vt-overhang.jpg",
      desc: "14' x 20' Custom Shed with novelty siding, large overhang, barn sash windows and wood louvered vents",
      loc: "Charlotte, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/charlotte-vt-shiplap.jpg",
      desc: "10' x 12' Custom Shed with a 6x12 overhang, shiplap siding, barn sash windows and metal roof. 10/12 roof pitch",
      loc: "Charlotte, Vermont",
    },

    {
      imgSrc: "images/custom-sheds/gallery/8x12-custom.jpg",
      desc: "8' x 12' Custom Shed with a 12/12 roof pitch and 7'4 sidewalls",
      loc: "Dorset, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/dorset-vt.jpg",
      desc: "12' x 20' Custom Shed with novelty siding, barn sash windows and a metal roof upgrade",
      loc: "Dorset, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/fayston-vt.jpg",
      desc: "12' x 20' with 8x20 overhang, and 45 degree, 12/12 roof pitch. The transom windows above the doors are a nice touch to gain some extra light",
      loc: "Fayston, Vermont",
    },

    {
      imgSrc: "images/custom-sheds/gallery/goshen-vt.jpg",
      desc: "12' x 22' Custom Shed with board and batten siding and steep 10/12 roof pitch",
      loc: "Goshen, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/hanover-nh.jpg",
      desc: "12' x 20' Custom Shed with sliding doors, board and batten siding, barn sash windows, and a heavy duty ramp",
      loc: "Hanover, New Hampshire",
    },
    {
      imgSrc: "images/custom-sheds/gallery/hebron-nh.jpg",
      desc: "12' x 16' with an extra steep 12/12 pitch roof, T1-11 siding and a 6x16 large overhang and sliding doors. 2' x 3' vinyl windows with screens",
      loc: "Hebron, New Hampshire",
    },

    {
      imgSrc: "images/custom-sheds/gallery/hinesburg-vt.jpg",
      desc: "12' x 18' Custom Shed with sliding barn doors, barn sash windows and novelty siding. 10/12 steep roof pitch",
      loc: "Hinesburg, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/huntington-vt.jpg",
      desc: "12' x 16' Custom Shed with novelty siding, large dormer, barn sash windows with flower boxes and wood louvered vents. 12/12 roof pitch",
      loc: "Huntington, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/huntington-vt-2.jpg",
      desc: "12' x 16' Custom Shed with novelty siding, large roof dormer, barn sash windows, transom window, single entry door, and a 45 degree, 12/12 roof pitch",
      loc: "Huntington, Vermont",
    },

    {
      imgSrc: "images/custom-sheds/gallery/jericho-vt.jpg",
      desc: "8' x 12' Custom Shed. T1-11 siding and 45 degree, 12/12 roof pitch",
      loc: "Jericho, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/landgrove-vt.jpg",
      desc: "12' x 16' Custom Shed with sliding doors and shiplap siding.",
      loc: "Landgrove, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/10x12-custom.jpg",
      desc: "10' x 12' Custom Shed with shiplap siding, barn sash windows and flower boxes",
      loc: "Leyden, Massachusetts",
    },

    {
      imgSrc: "images/custom-sheds/gallery/lyme-nh.jpg",
      desc: "10' x 12' Custom Shed with a 5' x 12' large overhang and shiplap siding",
      loc: "Lyme, New Hampshire",
    },
    {
      imgSrc: "images/custom-sheds/gallery/12x16-custom.jpg",
      desc: "12' x 16' Custom with board and batten siding, metal roof upgrade and large overhang with 10/12 roof pitch",
      loc: "Manchester, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/middletown-vt.jpg",
      desc: "12' x 16' Custom Shed with board and batten siding and large overhang. Metal roof and sliding door upgrades",
      loc: "Middletown Springs, Vermont",
    },

    {
      imgSrc: "images/custom-sheds/gallery/middletown-vt-2.jpg",
      desc: "12' x 24' Custom Shed/home addition",
      loc: "Middletown Springs, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/mooretown-vt.jpg",
      desc: "Custom Shed with shiplap siding, barn sash windows, and oversized transom above the doors that perfectly fits the gable. 12/12 45 degree roof pitch",
      loc: "Mooretown, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/moriah-ny.jpg",
      desc: "14' x 20' Custom Shed with a beautiful metal roof, transom window, sliding doors and wood louvered vents",
      loc: "Moriah, New York",
    },

    {
      imgSrc: "images/custom-sheds/gallery/newlondon-nh.jpg",
      desc: "14' x 18' Custom Shed. Cedar clapboard, cedar shakes, full loft with stairs",
      loc: "New London, New Hampshire",
    },
    {
      imgSrc: "images/custom-sheds/gallery/newlondon-nh-2.jpg",
      desc: "14' x 18' Custom Shed. A standard sized garage on the side. Full loft above with stairs",
      loc: "New London, New Hampshire",
    },
    {
      imgSrc: "images/custom-sheds/gallery/chittenden-vt.jpg",
      desc: "12' x 20' Custom Shed. Barn sash windows that go well with the board and batten siding",
      loc: "North Chittenden, Vermont",
    },

    {
      imgSrc: "images/custom-sheds/gallery/pawlet-vt.jpg",
      desc: "12' x 16' Custom Shed with large overhang, novelty siding and transom window",
      loc: "Pawlet, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/plymouth-vt.jpg",
      desc: "12' x 20' Custom Shed with transom window, sliding doors and shiplap siding",
      loc: "Plymouth, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/richmond-vt.jpg",
      desc: "10' x 16' Custom Shed with shiplap siding, transom window, barn sash windows and side entry door",
      loc: "Richmond, Vermont",
    },

    {
      imgSrc: "images/custom-sheds/gallery/rutland-vt.jpg",
      desc: "10' x 12' Custom garden shed with novelty siding and a large overhang",
      loc: "Rutland, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/sandlake-ny.jpg",
      desc: "12' x 16' Custom Shed with board and batten siding and oversized 8' wide double doors. Loft area for extra storage space. 10/12 roof pitch",
      loc: "Sand Lake, New York",
    },
    {
      imgSrc: "images/custom-sheds/gallery/shrewsbury-vt.jpg",
      desc: "12' x 20' Custom Shed with 10/12 steep roof pitch, board and batten siding, wood louvered vents and oversized 8' wide doors for a vehicle or tractor",
      loc: "Shrewsbury, Vermont",
    },

    {
      imgSrc: "images/custom-sheds/gallery/sunapee-nh.jpg",
      desc: "12' x 18' Custom Shed with novelty siding with 8' extra wide double doors. 10/12 roof pitch. Wide enough to park a vehicle for the winter",
      loc: "Sunapee, New Hampshire",
    },
    {
      imgSrc: "images/custom-sheds/gallery/townshend-vt.jpg",
      desc: "10' x 12' Custom Shed with shiplap siding",
      loc: "Townshend, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/single-door.jpg",
      desc: "10' x 12' Custom Shed with barn sash windows and a single door upgrade",
      loc: "Williamstown, Massachusetts",
    },

    {
      imgSrc: "images/custom-sheds/gallery/tall-shed.jpg",
      desc: "8' x 12' Custom Shed with a 12/12 roof pitch, shiplap siding, and tall sidewalls to give room for the transom window. Side single door for quick access",
      loc: "West Dover, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/wallingford-vt.jpg",
      desc: "12' x 18' Custom Shed with metal roof, shiplap siding and a small cupola",
      loc: "Wallingford, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/waterbury-vt.jpg",
      desc: "10' x 16' Custom Shed with a 6x16 overhang, metal roof, novelty siding, barn sash windows, and transom window. 10/12 steep roof pitch",
      loc: "Waterbury, Vermont",
    },

    {
      imgSrc: "images/custom-sheds/gallery/wdover-vt.jpg",
      desc: "12' x 16' Custom Shed with barn sash windows, shiplap siding and sliding doors",
      loc: "West Dover, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/wdover-vt2.jpg",
      desc: "12' x 20' Custom Shed with steep roof pitch, shiplap siding, transom window, barn sash windows and single entry door",
      loc: "West Dover, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/williston-vt.jpg",
      desc: "10' x 14' Custom Shed with board and batten siding, a large 5x14 overhang, vinyl windows and a 10/12 roof pitch",
      loc: "Williston, Vermont",
    },

    {
      imgSrc: "images/custom-sheds/gallery/williston-vt-2.jpg",
      desc: "12' x 16' Custom Shed with a 5x16 large overhang, novelty siding and sliding barn doors. 10/12 steep roof pitch",
      loc: "Williston, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/williston-vt-3.jpg",
      desc: "12' x 20' Custom Shed with board and batten siding, barn sash windows and a 45 degree roof pitch. Just an all-around beautiful shed",
      loc: "Williston, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/windsor-vt.jpg",
      desc: "12' x 16' Custom Shed with novelty siding, oversized transom window and 8’ wide double doors",
      loc: "Windsor, Vermont",
    },

    {
      imgSrc: "images/custom-sheds/gallery/woodstock-vt.jpg",
      desc: "14' x 20' Custom Shed with shiplap siding, barn sash windows, transom window, single door and wood louvered vents",
      loc: "Woodstock, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/woodstock-vt2.jpg",
      desc: "4' x 20' Custom Shed with shiplap siding, barn sash windows, transom window, single door and wood louvered vents",
      loc: "Woodstock, Vermont",
    },
    {
      imgSrc: "images/custom-sheds/gallery/wtownshend-vt.jpg",
      desc: "12' x 20' Custom Shed with shiplap siding, large overhang, single door, metal roof and barn sash windows",
      loc: "West Townshend, Vermont",
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
  createCustomGallery();
});
let currentPage = 0;