import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';


document.addEventListener("DOMContentLoaded", () =>{
    ["#cojair-gallery", "#listassist-gallery"].forEach((galleryId) => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: galleryId,
            children: 'a',
            pswpModule: () => import('photoswipe')
        });
        lightbox.init();
    });
});
