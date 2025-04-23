document.addEventListener("DOMContentLoaded", () => {
    const galerieProjetsImages = document.querySelectorAll('.galerie-projets img');
    const galerieImages = document.querySelectorAll('.galerie img');

    const allImages = [...galerieProjetsImages, ...galerieImages];

    allImages.forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();

            if (img.classList.contains('zoomed')) {
                img.classList.remove('zoomed');
            } else {
                allImages.forEach(i => i.classList.remove('zoomed'));
                img.classList.add('zoomed');
            }
        });
    });

    document.addEventListener('click', () => {
        allImages.forEach(i => i.classList.remove('zoomed'));
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.galerie-projets img');

    images.forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation(); // Empêche la propagation de l'événement de clic

            // Si déjà zoomée, on dézoome
            if (img.classList.contains('zoomed')) {
                img.classList.remove('zoomed');
            } else {
                // Supprime le zoom des autres images
                images.forEach(i => i.classList.remove('zoomed'));
                img.classList.add('zoomed');
            }

            // Création d'un overlay pour le zoom
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgba(0,0,0,0.85)';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.zIndex = 9999;
            overlay.style.cursor = 'zoom-out';

            const zoomImg = img.cloneNode();
            zoomImg.style.maxWidth = '90%';
            zoomImg.style.maxHeight = '90%';
            zoomImg.style.borderRadius = '10px';
            zoomImg.style.boxShadow = '0 0 30px rgba(255,255,255,0.3)';

            overlay.appendChild(zoomImg);
            document.body.appendChild(overlay);

            // Ferme l'overlay quand on clique dessus
            overlay.addEventListener('click', () => {
                overlay.remove();
            });
        });
    });

    // Dézoomer si on clique ailleurs que sur une image
    document.addEventListener('click', () => {
        images.forEach(i => i.classList.remove('zoomed'));
    });
});
