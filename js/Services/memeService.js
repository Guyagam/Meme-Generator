'use strict'

// var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
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
      color: 'red'
    },
    {
      txt: 'I sometimes play soccer',
      size: 20,
      align: 'center',
      color: 'blue'
    },
  ]
}

function getMeme() {
  return gMeme
}

function setLineTxt(text) {
  const line = gMeme.lines[gMeme.selectedLineIdx]
  line.txt = text
}



function setImg(picId) {
  gMeme.selectedImgId = picId
}


function setColor(color) {
  const line = gMeme.lines[gMeme.selectedLineIdx]
  line.color = color
}


function changeFontsize(diff) {
  const line = gMeme.lines[gMeme.selectedLineIdx]
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
