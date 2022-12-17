'use strict'
let gElCanvas
let gCtx

function onInit() {
  gElCanvas = document.getElementById('my-canvas')
  gCtx = gElCanvas.getContext('2d')
}



function renderMemes() {
  const currMeme = getMeme()
  const line = gMeme.lines
  var img = new Image();
  img.onload = function () {
    gElCanvas.width = this.naturalWidth;
    gElCanvas.height = this.naturalHeight;
    gCtx.drawImage(this, 0, 0);
    drawText()
  };
  img.src = `meme-imgs (square)/${currMeme.selectedImgId}.jpg`;

}
// function renderImg(img) {
//   gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
// }

function drawText() {
  let meme = getMeme()
  let memeLines = meme.lines
  // const line = gMeme.lines[gMeme.selectedLineIdx]
  memeLines.forEach(line => {
    gCtx.lineWidth = 1
    gCtx.fillStyle = line.color
    gCtx.strokeStyle = line.stroke
    gCtx.font = `${line.size}px ${line.font}`;
    gCtx.textAlign = line.align
    gCtx.letterSpacing = "1px";
    gCtx.fillText(line.txt, line.x, line.y - line.pos) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(line.txt, line.x, line.y - line.pos) // Draws (strokes) a given text at the given (x, y) position.
  })

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

function onsetStroke(value) {
  setStroke(value)
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
  document.querySelector('.line-count').innerText = gMeme.selectedLineIdx + 1
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



function onClearLine() {
  clearLine()
  renderMemes()
}


function onAddLine() {
  addLine()
  renderMemes()
}


function downloadImg(elLink) {
  const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
  elLink.href = imgContent
}




function onUploadImg() {
  const imgDataUrl = gElCanvas.toDataURL('image/jpeg') // Gets the canvas content as an image format

  // A function to be called if request succeeds
  function onSuccess(uploadedImgUrl) {
    // Encode the instance of certain characters in the url
    const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
  }
  // Send the image to the server
  doUploadImg(imgDataUrl, onSuccess)
}