'use strict'
let gElCanvas
let gCtx

function onInit() {
  gElCanvas = document.getElementById('my-canvas')
  gCtx = gElCanvas.getContext('2d')
  renderMemes()
}


function renderMemes() {
  const currMeme = getMeme()
  var img = new Image();   // Create new img element
  const lineIdx = gMeme.selectedLineIdx
  const line = gMeme.lines[lineIdx]
  console.log(line)
  img.addEventListener("load", function () {
    renderImg(img)
    drawText(line.txt, gElCanvas.width / 2, 15)
  }, false);
  img.src = `meme-imgs (square)/${currMeme.selectedImgId}.jpg`;
}

function renderImg(img) {
  gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(text, x, y) {
  gCtx.lineWidth = 2
  // gCtx.strokeStyle = 'brown'
  gCtx.fillStyle = 'white'
  gCtx.font = "1.5em Impact";
  gCtx.textAlign = 'center'
  gCtx.letterSpacing = "1px";

  gCtx.textBaseline = 'middle'

  gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
  gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}

function onsetLineTxt() {
  const LINETXT = document.querySelector('input[name="line-text"]').value
  setLineTxt(LINETXT)
  renderMemes()
}