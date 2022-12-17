'use strict'

// var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
let canvas = document.getElementById('my-canvas')

var gImgs = [
  { id: 1, url: 'meme-imgs (square)/1.jpg', keywords: ['funny', 'cat'] },
  { id: 2, url: 'meme-imgs (square)/2.jpg', keywords: ['funny', 'cat'] },
  { id: 3, url: 'meme-imgs (square)/3.jpg', keywords: ['funny', 'cat'] },
  { id: 4, url: 'meme-imgs (square)/4.jpg', keywords: ['funny', 'cat'] },
  { id: 5, url: 'meme-imgs (square)/5.jpg', keywords: ['funny', 'cat'] },
  { id: 6, url: 'meme-imgs (square)/6.jpg', keywords: ['funny', 'cat'] },
  { id: 7, url: 'meme-imgs (square)/7.jpg', keywords: ['funny', 'cat'] },
  { id: 8, url: 'meme-imgs (square)/8.jpg', keywords: ['funny', 'cat'] },
  { id: 9, url: 'meme-imgs (square)/9.jpg', keywords: ['funny', 'cat'] },
  { id: 10, url: 'meme-imgs (square)/10.jpg', keywords: ['funny', 'cat'] },
  { id: 11, url: 'meme-imgs (square)/11.jpg', keywords: ['funny', 'cat'] },
  { id: 12, url: 'meme-imgs (square)/12.jpg', keywords: ['funny', 'cat'] },
  { id: 13, url: 'meme-imgs (square)/13.jpg', keywords: ['funny', 'cat'] },
  { id: 14, url: 'meme-imgs (square)/14.jpg', keywords: ['funny', 'cat'] },
  { id: 15, url: 'meme-imgs (square)/15.jpg', keywords: ['funny', 'cat'] },
  { id: 16, url: 'meme-imgs (square)/16.jpg', keywords: ['funny', 'cat'] }, ,
  { id: 17, url: 'meme-imgs (square)/17.jpg', keywords: ['funny', 'cat'] },
  { id: 18, url: 'meme-imgs (square)/18.jpg', keywords: ['funny', 'cat'] },
];
var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      size: 20,
      align: 'center',
      stroke: 'white',
      color: 'red',
      font: 'Impact',
      pos: 0,
      x: canvas.width / 2,
      y: 50

    },
    {
      txt: 'I sometimes play soccer',
      size: 20,
      align: 'center',
      stroke: 'white',
      color: 'red',
      font: 'Impact',
      pos: 0,
      x: canvas.width / 2,
      y: canvas.height - 110

    },
  ]
}

function getMeme() {
  return gMeme
}

function setLineTxt(text) {
  gMeme.lines[gMeme.selectedLineIdx].txt = text
}



function setImg(picId) {
  gMeme.selectedImgId = picId
}

function setStroke(color) {
  const line = gMeme.lines[gMeme.selectedLineIdx]
  line.stroke = color
}


function setColor(color) {
  const line = gMeme.lines[gMeme.selectedLineIdx]
  line.color = color
}


function changeFontsize(diff) {
  const line = gMeme.lines[gMeme.selectedLineIdx]
  console.log(line)
  if (line.size < 15) {
    alert('Dont ruin Your Eyes!')
    line.size = 15
    return
  }
  line.size += diff

}

function changeLines(diff) {
  gMeme.selectedLineIdx += diff
  if (gMeme.selectedLineIdx >= gMeme.lines.length) {
    gMeme.selectedLineIdx = 0
  }
}



function setFont(font) {
  gMeme.lines[gMeme.selectedLineIdx].font = font
  console.log(gMeme.lines[gMeme.selectedLineIdx].font)
}

function setAlign(dir) {
  gMeme.lines[gMeme.selectedLineIdx].align = dir

}

function setPosition(pos) {
  gMeme.lines[gMeme.selectedLineIdx].pos += pos
}

function clearLine() {
  const line = gMeme.lines
  console.log(line)
  console.log(line[gMeme.selectedLineIdx])

  if (gMeme.selectedLineIdx !== 0 && gMeme.selectedLineIdx !== 1) {
    line.splice(gMeme.selectedLineIdx, 1)
  }
  else if (gMeme.selectedLineIdx === 0) {

    line[gMeme.selectedLineIdx].txt = ''
    line[gMeme.selectedLineIdx].size = 20
    line[gMeme.selectedLineIdx].align = 'center'
    line[gMeme.selectedLineIdx].color = 'black'
    line[gMeme.selectedLineIdx].font = 'Impact'
    line[gMeme.selectedLineIdx].pos = 0
    line[gMeme.selectedLineIdx].x = canvas.width / 2
    line[gMeme.selectedLineIdx].y = 50
  }
  else {
    line[gMeme.selectedLineIdx].txt = ''
    line[gMeme.selectedLineIdx].size = 20
    line[gMeme.selectedLineIdx].align = 'center'
    line[gMeme.selectedLineIdx].color = 'black'
    line[gMeme.selectedLineIdx].font = 'Impact'
    line[gMeme.selectedLineIdx].pos = 0
    line[gMeme.selectedLineIdx].x = canvas.width / 2
    line[gMeme.selectedLineIdx].y = canvas.height - 110
  }
}


function addLine() {
  let newLine = {
    txt: 'I am new Line',
    size: 20,
    align: 'center',
    color: 'black',
    font: 'Impact',
    pos: 0,
    x: canvas.width / 2,
    y: canvas.height / 2
  }
  gMeme.lines.push(newLine)
  console.log(gMeme.lines)
}