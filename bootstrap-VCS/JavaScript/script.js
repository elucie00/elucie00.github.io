    function createGallery() {
        console.log('test2');
        const template = document.getElementById('gallery-card-template');
        console.log('test3');
        const gallery = template.parentNode;
        console.log('test4');
        let gallery_content = [
            {
                imgSrc: 'images/utility-sheds/burlington-vt.jpg',
                desc: '10x12 Utility shed with barn sash windows',
                loc: 'Burlington, Vermont'
            },
            {
                imgSrc: 'images/utility-sheds/colchester-vt-overhang.jpg',
                desc: '8x10 Utility shed with vinyl windows upgrade',
                loc: 'Colchester, Vermont'
            },
            {
                imgSrc: 'images/utility-sheds/colchester-vt.jpg',
                desc: '10x12 Utility shed with barn sash windows',
                loc: 'Burlington, Vermont'
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
            }
        ];

        console.log('test5');
        gallery_content.forEach(content => {
            let card = template.cloneNode(true);
            card.style = '';
            card.children[0].setAttribute('src', content.imgSrc);
            card.children[1].children[0].textContent = content.desc;
            card.children[1].children[1].textContent = content.loc;
            gallery.appendChild(card);
        });
        console.log('pen15');
    }

    document.addEventListener('DOMContentLoaded', function() {
        console.log('test1');
        createGallery(); 
    });