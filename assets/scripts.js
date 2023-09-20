document.addEventListener('DOMContentLoaded', (event) => {
    const galleryImages = [
        { src: './assets/images/Image-webp/aaron-paul.webp', tag: 'Concert', alt: 'Photo du plafond iluminé dans une salle de concert Aaron Paul' },
        { src: './assets/images/Image-webp/ali-morshedlou.webp', tag: 'Entreprises', alt: 'Portrait de profil d\'Ali Morshedlou' },
        { src: './assets/images/Image-webp/jason-goodman.webp', tag: 'Entreprises', alt: 'Jason Goodman capture d\'une femme souriant dans une entreprise' },
        { src: './assets/images/Image-webp/hannah-busing.webp', tag: 'Mariages', alt: 'Mariage capturé par Hannah Busing avec les mains du couple' },
        { src: './assets/images/Image-webp/ade-tunji.webp', tag: 'Portrait', alt: 'Portrait en gros plan d\'Ade Tunji aveuglé par le soleil' },
        { src: './assets/images/Image-webp/jakob-owens.webp', tag: 'Mariages', alt: 'Mariage par Jakob Owens avec le couple se tenant la main' },
        { src: './assets/images/Image-webp/nino-van-prattenburg.webp', tag: 'Portrait', alt: 'Portrait en noir et blanc de Nino Van Prattenburg regardant vers l\'objectif' },
        { src: './assets/images/Image-webp/austin-neill.webp', tag: 'Concert', alt: 'Austin Neill parlant dans le microphone sur scène lors d\'un concert' },
        { src: './assets/images/Image-webp/mateus-campos.webp', tag: 'Entreprises', alt: 'Mateus Campos Felipe souriant dans un bureau d\'entreprise' }
    ];

    const galleryContainer = document.querySelector('.container');
    const gallery = document.querySelector('.gallerie_img');
    gallery.classList.add('gallery');
    const tagContainer = document.createElement('div');
    tagContainer.classList.add('nav');

    const tags = ['Tous', ...Array.from(new Set(galleryImages.map(image => image.tag)))];

    tags.forEach(tag => {
        const tagElement = document.createElement('button');
        tagElement.classList.add('nav-link');
        tagElement.innerText = tag;
        tagElement.addEventListener('click', (event) => {
            filterByTag(tag);

            const allButtons = document.querySelectorAll('.nav-link');
            allButtons.forEach(button => {
                button.style.backgroundColor = '';
                button.style.color = '';
            });

            event.target.style.backgroundColor = '#BEB45A';
            event.target.style.color = 'white';
        });
        tagContainer.appendChild(tagElement);
        if (tag === 'Tous') {
            tagElement.click();
        }
    });

    galleryImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.classList.add('gallery-item', 'img-fluid');
        imgElement.src = image.src;
        imgElement.dataset.galleryTag = image.tag;
        imgElement.alt = image.alt;

        gallery.appendChild(imgElement);
    });

    galleryContainer.appendChild(tagContainer);
    galleryContainer.appendChild(gallery);

    function filterByTag(tag) {
        const galleryItems = gallery.querySelectorAll('.gallery-item');

        galleryItems.forEach(item => {
            if (tag === 'Tous' || item.dataset.galleryTag === tag) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
});
