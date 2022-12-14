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
  var img = new Image();
  const line = gMeme.lines
  img.addEventListener("load", function () {
    renderImg(img)
    drawText(line[0].txt, gElCanvas.width / 2, 15)
    drawText(line[1].txt, gElCanvas.width / 2, gElCanvas.height)
  }, false);
  img.src = `meme-imgs (square)/${currMeme.selectedImgId}.jpg`;
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
}