import{g as r}from"./gallery-items-ed16b741.js";/* empty css               */const i=document.querySelector(".gallery"),o=n(r);c(o);function n(l){return l.map(({preview:a,original:e,description:t})=>`
  <li class="gallery__item">
    <a class="gallery__link" href="${e}">
        <img class="gallery__image" src="${a}" alt="${t}" />
    </a>
  </li>
  `).join("")}function c(l){i.innerHTML=l}new SimpleLightbox(".gallery__link",{captionSelector:"img",captionType:"attr",captionDelay:250,captionPosition:"bottom",captionsData:"alt"});
