'use strict'
let gElCanvas
let gCtx

function onInit() {
  gElCanvas = document.getElementById('my-canvas')
  gCtx = gElCanvas.getContext('2d')

  renderMemes()
}


function renderMemes() {
  document.querySelector('input[name="line-text"]').placeholder = gMeme.lines[gMeme.selectedLineIdx].txt
  const currMeme = getMeme()
  const line = gMeme.lines
  var img = new Image();
  img.src = `meme-imgs (square)/${currMeme.selectedImgId}.jpg`;
  img.onload = function () {
    gElCanvas.width = this.naturalWidth;
    gElCanvas.height = this.naturalHeight;
    gCtx.drawImage(this, 0, 0);
    drawText(line[0].txt, gElCanvas.width / 2, 25)
    drawText(line[1].txt, gElCanvas.width / 2, gElCanvas.height)
  };
  // img.addEventListener("load", function () {
  //   renderImg(img)

  // }, false);
}

function renderImg(img) {
  gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(text, x, y) {
  const line = gMeme.lines[gMeme.selectedLineIdx]
  gCtx.lineWidth = 2
  gCtx.fillStyle = line.color
  gCtx.strokeStyle = 'white'
  gCtx.font = `${line.size}px Impact`;
  gCtx.textAlign = line.align
  gCtx.letterSpacing = "1px";
  gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
  gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}

function onsetLineTxt() {
  const LINETXT = document.querySelector('input[name="line-text"]').value
  setLineTxt(LINETXT)
  document.querySelector('input[name="line-text"]').value = '';
  renderMemes()
}


function onsetColor(value) {
  setColor(value)
  renderMemes()
}



function onChangeFont(diff) {
  changeFontsize(diff)
  renderMemes()
}

function onSwitchLines(num) {
  changeLines(num)
  document.querySelector('input[name="line-text"]').placeholder = gMeme.lines[gMeme.selectedLineIdx].txt
}

function backToGallery() {
  document.querySelector('.gallery-container').style.display = 'block'
  document.querySelector('.gallery-container').style.display = 'grid'
  document.querySelector('.memeEditor-container').style.display = 'none'
  // document.querySelector('.memeEditor-container').style.display = 'flex'
}