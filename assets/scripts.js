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

    // Création d'un tableau de tags map à partir des images
    const tags = ['Tous', ...Array.from(new Set(galleryImages.map(image => image.tag)))];

     // Pour chaque tag, création élément bouton
    tags.forEach(tag => {

    // Ajout d'un add event pour filtrer les images par tag lorsqu'on clique sur le bouton
        const tagElement = document.createElement('button');
        tagElement.classList.add('nav-link');
        tagElement.innerText = tag;
        tagElement.addEventListener('click', (event) => {
            filterByTag(tag);

            const allButtons = document.querySelectorAll('.nav-link');
            allButtons.forEach(button => {
    // Réinitialisation du style de tous les boutons
                button.style.backgroundColor = '';
                button.style.color = '';
            });

    // style du bouton cliqué
            event.target.style.backgroundColor = '#BEB45A';
            event.target.style.color = 'black';
        });
        tagContainer.appendChild(tagElement);
        if (tag === 'Tous') {
            tagElement.click();
        }
    });

    // Pour chaque image de la galerie, création d'un élément img et on l'ajoute à la galerie
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

    // Fonction pour filtrer les images par tag
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


document.addEventListener('DOMContentLoaded', (event) => {
    const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {

    // Création de la modale
            const modal = document.createElement('div');
            modal.classList.add('modal');

    // Création de l'image de la modale
            const img = document.createElement('img');
            img.src = item.src;
            modal.appendChild(img);

    //bouton précédent
            const prevButton = document.createElement('button');
            prevButton.classList.add('prev');
            prevButton.textContent = '<';
            prevButton.addEventListener('click', (e) => {
                e.stopPropagation();
                let prevIndex = index - 1;
                if (prevIndex < 0) {
                    prevIndex = galleryItems.length - 1;
                }
                while (galleryItems[prevIndex].style.display === 'none') {
                    prevIndex--;
                    if (prevIndex < 0) {
                        prevIndex = galleryItems.length - 1;
                    }
                }
                img.src = galleryItems[prevIndex].src;
                index = prevIndex;
            });
            modal.appendChild(prevButton);

    //bouton suivant
            const nextButton = document.createElement('button');
            nextButton.classList.add('next');
            nextButton.textContent = '>';
            nextButton.addEventListener('click', (e) => {
                e.stopPropagation();
                let nextIndex = index + 1;
                if (nextIndex >= galleryItems.length) {
                    nextIndex = 0;
                }
                while (galleryItems[nextIndex].style.display === 'none') {
                    nextIndex++;
                    if (nextIndex >= galleryItems.length) {
                        nextIndex = 0;
                    }
                }
                img.src = galleryItems[nextIndex].src;
                index = nextIndex;
            });
            modal.appendChild(nextButton);

    //écouteur d'événements pour fermer la modale lorsqu'on clique dessus
            modal.addEventListener('click', () => {
                document.body.removeChild(modal);
            });

            document.body.appendChild(modal);
        });
    });
});