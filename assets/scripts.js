document.addEventListener('DOMContentLoaded', (event) => {
    // Crééation d'un tableau d'objets avec les données dedans
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
    
// Sélection de l'emplacement dans le HTML
    const gallery = document.querySelector('.gallery');

    // Création div pour les boutons filtres
    const tagContainer = document.createElement('div');
    tagContainer.classList.add('nav');

    const tags = ['Tous', ...Array.from(new Set(galleryImages.map(image => image.tag)))];
    // Pour chaque tag, création d'un bouton qui filtre les images lorsqu'il sera cliqué
    tags.forEach(tag => {
        const tagElement = document.createElement('button');
        tagElement.classList.add('nav-link');
        tagElement.innerText = tag;
        tagElement.addEventListener('click', () => filterByTag(tag));
        tagContainer.appendChild(tagElement);
    });

    galleryImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.classList.add('gallery-item', 'img-fluid');
        imgElement.src = image.src;
        imgElement.dataset.galleryTag = image.tag;
        imgElement.alt = image.alt;
        const itemColumn = document.createElement('div');
        itemColumn.classList.add('item-column');
        itemColumn.appendChild(imgElement);
        gallery.appendChild(itemColumn);
    });

    gallery.prepend(tagContainer);
    gallery.style.display = 'block'; 


    // fonction appelée lorsque l'on clique sur un bouton 
    function filterByTag(tag) {
        const galleryItems = gallery.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            if (tag === 'Tous' || item.dataset.galleryTag === tag) {
                item.parentElement.style.display = 'block';
            } else {
                item.parentElement.style.display = 'none';
            }
        });
    }
});