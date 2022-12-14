'use strict'

function onGalleryInit() {
  renderGallery()
}

function renderGallery() {
  const gallery = document.querySelector('.gallery-container')
  const strHTML = gImgs.map(img =>
    `  <img onclick="onImgSelect(this)" src="${img.url}"id=${img.id}/>
    `
  )
  gallery.innerHTML = strHTML.join('')
}


function onImgSelect(pic) {

}