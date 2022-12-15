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

}

// function renderImg(img) {
//   gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
// }

function drawText(text, x, y) {
  const line = gMeme.lines[gMeme.selectedLineIdx]
  gCtx.lineWidth = 1
  gCtx.fillStyle = document.querySelector('input[name="color-picker"]').value
  gCtx.strokeStyle = 'white'
  gCtx.font = `${line.size}px ${line.font}`;
  gCtx.textAlign = line.align
  gCtx.letterSpacing = "1px";
  gCtx.fillText(text, x, y - line.pos) // Draws (fills) a given text at the given (x, y) position.
  gCtx.strokeText(text, x, y - line.pos) // Draws (strokes) a given text at the given (x, y) position.
}

function onsetLineTxt() {
  const LINETXT = document.querySelector('input[name="line-text"]').value
  setLineTxt(LINETXT)
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
  document.querySelector('input[name="line-text"]').value = '';

  document.querySelector('input[name="line-text"]').placeholder = gMeme.lines[gMeme.selectedLineIdx].txt
}

function backToGallery() {
  document.querySelector('.gallery-container').style.display = 'block'
  document.querySelector('.gallery-container').style.display = 'grid'
  document.querySelector('.memeEditor-container').style.display = 'none'
  // document.querySelector('.memeEditor-container').style.display = 'flex'
}

function onFontSet(font) {
  setFont(font)
  renderMemes()
}

function onAlignText(dir) {
  setAlign(dir)
  renderMemes()
}

function onTextPosition(pos) {
  setPosition(pos)
  renderMemes()
}