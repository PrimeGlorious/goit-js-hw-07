import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const galleryItemsMarkup = makeGalleryItemMarkup(galleryItems);
populateGallery(galleryItemsMarkup);

function makeGalleryItemMarkup(items) {
  return items.map(({preview, original, description}) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>
  `).join('');
};

function populateGallery(markup) {
  galleryRef.innerHTML = markup;
};

const lightbox = new SimpleLightbox('.gallery__link', { captionSelector: 'img', captionType: 'attr', captionDelay: 250, captionPosition: 'bottom', captionsData: 'alt', });