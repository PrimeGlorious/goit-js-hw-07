import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const galleryItemsMarkup = makeGalleryItemMarkup(galleryItems);
populateGallery(galleryItemsMarkup);

galleryRef.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) { return };

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
  `);

  instance.show();

  window.addEventListener('keydown', onModalClose);

  function onModalClose(e) {
    if (e.code === 'Escape') {
      instance.close();
    };
  };
};

function makeGalleryItemMarkup(items) {
  return items.map(({preview, original, description}) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
  `).join('');
};

function populateGallery(markup) {
  galleryRef.innerHTML = markup;
};