// Grid state
const width = 20
const height = 11
const squares = []
//Player state
let playerIndex = 210
//Enemy state
let enemyIndex = 23
function movePlayer() {
  squares.forEach(square => square.classList.remove('player'))
  squares[playerIndex].classList.add('player')
}

function handleKeyDown(e) {
  let playerShouldMove = true
  switch(e.keyCode) {
    case 39:
      if (playerIndex % width < width - 1) {
        playerIndex++
      }
      break
    case 37:
      if (playerIndex % width > 0) {
        playerIndex--
      }
      break
    // case 38:
    //   if (playerIndex - width >= 0) {
    //     playerIndex -= width
    //   }
    //   break
    // case 40:
    //   if (playerIndex + width < width * width) {
    //     playerIndex += width
    //   }
      // break
    default:
      playerShouldMove = false
  }
  if (playerShouldMove) movePlayer()
}
function moveEnemy(){
  squares.forEach(square => square.classList.remove('enemy'))
  squares[enemyIndex].classList.add('enemy')

}
// Enemy movement
function handleEnemyMovement(){
  enemyIndex = enemyIndex++
  // enemyIndex = enemyIndex+20
// enemyIndex = enemyIndex-1
  moveEnemy()
}
// window.addEventListener('keydown')
function fireMissle(e){
  console.log(e.keyCode)
  const playagame = document.querySelector('#audio')

  if (e.keyCode === 32) {
    playagame.play()
  }
}

document.addEventListener('keydown', fireMissle)

function init() {
  //  our code goes here
  //





  // get hold of that parent grid div
  const grid = document.querySelector('.grid')

  // used a for loop to fill my grid with induvidual squares, as many as the with times the width
  for (let i = 0; i < width * height; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item')
    square.innerHTML = i
    squares.push(square)
    grid.append(square)
  }
// Adding the class to the square
  squares[playerIndex].classList.add('player')
  window.addEventListener('keydown', handleKeyDown)

  squares[enemyIndex].classList.add('enemy')
 setInterval(handleEnemyMovement, 500)
}

window.addEventListener('DOMContentLoaded', init)
