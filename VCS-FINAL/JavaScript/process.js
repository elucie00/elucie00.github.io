// BUILDING PROCESS GALLERY
function createProcessGallery() {
  const template = document.getElementById("processGalleryCardTemplate");
  const gallery = template.parentNode;
  let gallery_content = [
    {
      imgSrc: "images/building-process/gallery/2x4-framing.jpg",
      desc: "Contractor grade framing lumber, no big box store sub-standard materials",
    },
    {
      imgSrc: "images/building-process/gallery/overlapping.jpg",
      desc: "Overlapping and locking double top plates offer superior strength and stability and prevents wall sagging",
    },
    {
      imgSrc: "images/building-process/gallery/4x4-runners.jpg",
      desc: "4x4 pressure treated runners and floor joists. Don't settle for low quality 2x4 floor joists",
    },

    {
      imgSrc: "images/building-process/gallery/advan-tech-floor.jpg",
      desc: "AdvanTech tongue and groove floor sheathing, superior to standard plywood",
    },
    {
      imgSrc: "images/building-process/gallery/conventional-framing.jpg",
      desc: "Conventional framing with 2x8 Ridge board and 2x6 rafters. The strongest type of construction for handling snow loads",
    },
    {
      imgSrc: "images/building-process/gallery/fascia-softfit.jpg",
      desc: "Fascia soffit and overhands protect your shed from the weather",
    },

    {
      imgSrc: "images/building-process/gallery/heavyduty-door.jpg",
      desc: "Heavy duty door construction on all sheds",
    },
    {
      imgSrc: "images/building-process/gallery/ladder-framing.jpg",
      desc: "Conventional ladder framing and sub fascia ensures structural integrity even under the heaviest snow",
    },
    {
      imgSrc: "images/building-process/gallery/metal-roof.jpg",
      desc: "Metal roofs are installed over zip system sheathing. No purlins. That means no condensation in your shed",
    },

    {
      imgSrc: "images/building-process/gallery/zip-system.jpg",
      desc: "Zip system sheathing is waterproof and far higher quality than standard plywood or regular osb",
    },
    {
      imgSrc: "images/building-process/gallery/30-year-shingle.jpg",
      desc: "Minimum 30 year warranty shingles",
    },
    {
      imgSrc: "images/building-process/gallery/t-11.jpg",
      desc: "T1-11 siding",
    },

    {
      imgSrc: "images/building-process/gallery/boardbatten-siding.jpg",
      desc: "Board and batten siding",
    },
    {
      imgSrc: "images/building-process/gallery/novelty-siding.jpg",
      desc: "Novelty siding",
    },
    {
      imgSrc: "images/building-process/gallery/shiplap-siding.jpg",
      desc: "Shiplap siding",
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
    "<p>Page 1/" + Math.floor(gallery.children.length / 18 + 1) + "</p>";
  document.getElementById("page2").innerHTML =
    "<p>Page 1/" + Math.floor(gallery.children.length / 18 + 1) + "</p>";
}
document.addEventListener("DOMContentLoaded", function () {
  createProcessGallery();
});
let currentPage = 0;