import{g as n}from"./gallery-items-ed16b741.js";/* empty css               */const r=document.querySelector(".gallery"),s=c(n);o(s);r.addEventListener("click",i);function i(e){if(e.preventDefault(),!e.target.classList.contains("gallery__image"))return;const a=basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
  `);a.show(),window.addEventListener("keydown",t);function t(l){l.code==="Escape"&&a.close()}}function c(e){return e.map(({preview:a,original:t,description:l})=>`
  <li class="gallery__item">
    <a class="gallery__link" href="${t}">
      <img
        class="gallery__image"
        src="${a}"
        data-source="${t}"
        alt="${l}"
      />
    </a>
  </li>
  `).join("")}function o(e){r.innerHTML=e}
