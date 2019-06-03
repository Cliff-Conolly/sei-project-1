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
  // Looping through every square in the squares array and
  // each is a div element, and we're removing the class enemny from all
  // of the div elements
  squares.forEach(square => square.classList.remove('enemy'))
  //
  squares[enemyIndex].classList.add('enemy')

}

let moveLeftOrRight = 'left'
let hasMovedDownOneBlock = false

function isOnLeftOrRightOfGrid() {
  if (enemyIndex % 20 === 0) {
  	return true;
  }
  if ([19, 39, 59, 79, 99, 119, 139, 159, 179, 199, 219].includes(enemyIndex)) {
	  return true;
  }
  return false;
}
// Enemy movement
function handleEnemyMovement(){

  if (isOnLeftOrRightOfGrid() && !hasMovedDownOneBlock) {
    	enemyIndex = enemyIndex + 20;
    hasMovedDownOneBlock = true;
    if (moveLeftOrRight === 'left') {
	    moveLeftOrRight = 'right';
    } else {
      moveLeftOrRight = 'left';
    }
    } else {
    	hasMovedDownOneBlock = false;
  	if (moveLeftOrRight === 'left') {
      	enemyIndex = enemyIndex - 1
      } else if (moveLeftOrRight === 'right') {
  	    enemyIndex = enemyIndex + 1;
    }
  }
  //
  //
  // enemyIndex = enemyIndex-1
  moveEnemy()
}
// window.addEventListener('keydown')

let missileIndex = playerIndex -20

function fireMissile(e){
  // console.log(e.keyCode)
  const playagame = document.querySelector('#blaster')

  if (e.keyCode === 32) {
    playagame.play()
  }
  const missileInterval = setInterval(moveMissile, 250)
  setTimeout(() => {
    clearInterval(missileInterval)
    missileIndex = playerIndex -20
  }, 2500)
}


// 2. // Movement: Function to add and remove missile

function moveMissile() {
  enemyXplosion()
  squares.forEach(square => square.classList.remove('missile'))
  missileIndex -= 20
  console.log(squares[missileIndex])
  squares[missileIndex].classList.add('missile')
}


// 3. // Impact : Change initial picture to explosion state and trigger explosion sound

function  enemyXplosion(e) {
  const enemyHit = document.querySelector('#enemyKill')
  if (missileIndex === enemyIndex) {
    enemyHit.play()
    squares[missileIndex].classList.remove('enemy')
  }
}

document.addEventListener('keydown', fireMissile)

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
