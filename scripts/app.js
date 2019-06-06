//  Grid state
const width = 20
const height = 11
const squares = []
//Player state
let playerIndex = 210
//Enemy state
let enemyOneIndex = 23
let enemyTwoIndex = 27
// let enemyThreeIndex = 25
let playerIntervalID = false
let enemyOneIntervalId = false
let enemyTwoIntervalId = false
// let enemyThreeIntervalId = false
// // Missile / Bomb state
let missileInterval = false
let bombInterval = false
// Missle / Bomb position
let missileIndex = playerIndex -20
let bombIndex = enemyOneIndex +20
let bombIndex1 = enemyTwoIndex +20
// let bombIndex = enemyTwoIndex +20
let laser = false
let bomb1 = false
// Star Destoyer
// let destroyer = 19
// Bomb Position
// let bombIndex = enemyOneIndex +20
// let bomb1 = false
// Start state
// const start = document.querySelector('.start')
// start.addEventListener('click', onStartClick)

// ************************************************************************************************
// INTIALIZE THE CODE
// ************************************************************************************************
function init() {
  //  our code to excute the actionable functions starts in this 'init' function
  //
  // ************************************************************************************************
  // FILL GRID
  // ************************************************************************************************
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

  // ************************************************************************************************
  // LISTEN FOR 'CLICK' ON START BUTTON...THEN START
  // ************************************************************************************************


  const start = document.querySelector('.start')
  console.log(start)
  start.addEventListener('click', onStartClick)


  function onStartClick(){

    // ************************************************************************************************
    // PLAYER MOVEMENT & FIRING
    // ************************************************************************************************
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

    // *************************************************************************************************
    // ENEMY ONE MOVEMENT
    // *************************************************************************************************
    function moveEnemyOne(){
      // Looping through every square in the squares array and
      // each is a div element, and we're removing the class enemny from all
      // of the div elements
      squares.forEach(square => square.classList.remove('enemy'))
      //
      if (enemyOneIndex) squares[enemyOneIndex].classList.add('enemy')
      if (enemyTwoIndex) squares[enemyTwoIndex].classList.add('enemy')
      // if (enemyThreeIndex) squares[enemyThreeIndex].classList.add('enemy')
      // squares[missileIndex].classList.add('missile')
    }

    let moveLeftOrRight = 'left'
    let hasMovedDownOneBlock = false

    function isOnLeftOrRightOfGrid() {
      if (enemyOneIndex % 20 === 0) {
        return true
      }
      if ([19, 39, 59, 79, 99, 119, 139, 159, 179, 199, 219].includes(enemyOneIndex)) {
        return true
      }
      return false
    }
    // Enemy movement
    function handleEnemyOneMovement(){

      if (isOnLeftOrRightOfGrid() && !hasMovedDownOneBlock) {
        enemyOneIndex = enemyOneIndex + 20
        hasMovedDownOneBlock = true
        if (moveLeftOrRight === 'left') {
          moveLeftOrRight = 'right'
        } else {
          moveLeftOrRight = 'left'
        }
      } else {
        hasMovedDownOneBlock = false
        if (moveLeftOrRight === 'left') {
          enemyOneIndex = enemyOneIndex - 1
        } else if (moveLeftOrRight === 'right') {
          enemyOneIndex = enemyOneIndex + 1
        }
      }
      //
      //
      // enemyOneIndex = enemyOneIndex-1
      console.log(enemyOneIndex)
      moveEnemyOne()
    }


    // *************************************************************************************************
    // ENEMY TWO MOVEMENT
    // *************************************************************************************************
    function moveEnemyTwo(){
      //   // Looping through every square in the squares array and
      //   // each is a div element, and we're removing the class enemny from all
      //   // of the div elements
      //   squares.forEach(square => square.classList.remove('enemy'))
      //   //
      squares[enemyTwoIndex].classList.add('enemy')
      //   // squares[missileIndex].classList.add('missile')
    }
    //
    let moveLeftOrRight2 = 'left'
    let hasMovedDownOneBlock2 = false
    //
    function isOnLeftOrRightOfGrid2() {
      if (enemyTwoIndex % 20 === 0) {
        return true
      }
      if ([19, 39, 59, 79, 99, 119, 139, 159, 179, 199, 219].includes(enemyTwoIndex)) {
        return true
      }
      return false
    }
    // Enemy movement
    function handleEnemyTwoMovement(){

      if (isOnLeftOrRightOfGrid2() && !hasMovedDownOneBlock2) {
        enemyTwoIndex = enemyTwoIndex + 20
        hasMovedDownOneBlock2 = true
        if (moveLeftOrRight2=== 'left') {
          moveLeftOrRight2= 'right'
        } else {
          moveLeftOrRight2= 'left'
        }
      } else {
        hasMovedDownOneBlock2 = false
        if (moveLeftOrRight2=== 'left') {
          enemyTwoIndex = enemyTwoIndex - 1
        } else if (moveLeftOrRight2=== 'right') {
          enemyTwoIndex = enemyTwoIndex + 1
        }

        //
        //
        // enemyTwoIndex = enemyTwoIndex-1
        console.log(enemyTwoIndex)
        moveEnemyOne()
      }

      // **********************************************************************************************
      // PLAYER MISSILE
      // **********************************************************************************************

      //  Fire Missile
      function fireMissile(e){
        // console.log(e.keyCode)
        const shootBlast = document.querySelector('#blaster')

        if (e.keyCode === 32 && !laser) {
          laser = true
          shootBlast.play()
          missileIndex = playerIndex -20
          missileInterval = setInterval(moveMissile, 150)
          // setTimeout(resetMissile, 1500)
        }

      }

      //  Move Missile (upwards)
      function moveMissile() {
        enemyXplosion()
        enemyXplosionTwo()
        squares.forEach(square => square.classList.remove('missile'))
        missileIndex -= 20
        // console.log(squares[missileIndex])
        if (squares[missileIndex]) {
          squares[missileIndex].classList.add('missile')
        } else {
          resetMissile()
        }

      }

      //  Reset Missile (so that it doesn't stay onscreen)
      function resetMissile() {
        laser = false
        clearInterval(missileInterval)
        missileIndex = playerIndex -20
      }
      // 2. // Movement: Function to add and remove missile




      // **********************************************************************************************
      // ENEMY ONE EXPLOSION
      // **********************************************************************************************
      // Change initial picture to explosion state and trigger explosion sound
      const explode1 = document.querySelector('explosion')
      function enemyXplosion(e) {
        const hit = document.querySelector('#hit')

        if (missileIndex === enemyOneIndex) {
          const position = missileIndex
          // clearInterval takes 1 parameter and stops the interval
          clearInterval(enemyOneIntervalId)
          enemyOneIndex = null
          hit.play()
          squares[position].classList.remove('enemy')
          // Need to find what
          // explode.play()
          squares[position].classList.add('explosion')
          setTimeout( ()=> {
            //  SetTimeout will remove the enXplosionafter 1 second
            squares[position].classList.remove('explosion')

          }, 500)
        }
      }

      // **********************************************************************************************
      // ENEMY TWO EXPLOSION
      // **********************************************************************************************
      // Change initial picture to explosion state and trigger explosion sound
      const explode2 = document.querySelector('explosion')
      function enemyXplosionTwo(e) {
        const hit = document.querySelector('#hit')

        if (missileIndex === enemyTwoIndex) {
          const position = missileIndex
          // clearInterval takes 1 parameter and stops the interval
          clearInterval(enemyTwoIntervalId)
          enemyTwoIndex = null
          hit.play()
          squares[position].classList.remove('enemy')
          // Need to find what
          // explode.play()
          squares[position].classList.add('explosion')
          setTimeout( ()=> {
            //  SetTimeout will remove the enXplosionafter 1 second
            squares[position].classList.remove('explosion')

          }, 500)
        }
      }

      ///*******************************************************************************************
      // ENEMY BOMB
      // ******************************************************************************************


      //  Fire Bomb [sound]
      function fireBomb(){
        const shootBlast = document.querySelector('#blaster')

        shootBlast.play()
        bombIndex = enemyOneIndex +20
        // bombIndex1 = enemyTwoIndex +20
        // bombIndex = enemyTwoIndex +20

        // bombInterval = setInterval(moveBomb, 150)
        moveBomb()


      }
      setInterval(fireBomb, 5000)

      //  Move Bomb (downwards) [image]
      function moveBomb() {
        playerXplosion()
        squares.forEach(square => square.classList.remove('bomb'))
        bombIndex += 20
        // console.log(squares[bombIndex])
        if (squares[bombIndex]) {
          squares[bombIndex].classList.add('bomb')
        } else {
          resetBomb()
        }
        setTimeout(moveBomb, 500)
      }

      //  Reset Bomb (so that it doesn't stay onscreen)
      function resetBomb() {
        bomb1 = false
        // clearInterval(bombInterval)
        // bombIndex = playerIndex +20
      }
      // 2. // Movement: Function to add and remove missile





      // **********************************************************************************************
      // PLAYER EXPLOSION
      // **********************************************************************************************
      // Change initial picture to explosion state and trigger explosion sound
      const playerExplode = document.querySelector('explosion')
      function playerXplosion(e) {
        const hit = document.querySelector('#hit')

        if (bombIndex === playerIndex) {
          const position1 = bombIndex
          // clearInterval takes 1 parameter and stops the interval
          clearInterval(playerIntervalID)
          playerIndex = null
          hit.play()
          squares[position1].classList.remove('player')
          // Need to find what
          // explode.play()
          squares[position1].classList.add('explosion')
          setTimeout( ()=> {
            //  SetTimeout will remove the enXplosionafter 1 second
            squares[position1].classList.remove('explosion')

          }, 500)
          squares[playerIndex].classList.add('player')
        }
      }






      document.addEventListener('keydown', fireMissile)
      // document.addEventListener('keydown', fireBomb)


    }

    // Adding the class to the square
    squares[playerIndex].classList.add('player')
    window.addEventListener('keydown', handleKeyDown)


    squares[enemyOneIndex].classList.add('enemy')
    squares[enemyTwoIndex].classList.add('enemy')
    // squares[enemyThreeIndex].classList.add('enemy')
    // Enable to clear and stop enemmy from be ing re-drawn to screen
    enemyOneIntervalId = setInterval(handleEnemyOneMovement, 1000)
    enemyTwoIntervalId = setInterval(handleEnemyTwoMovement, 1000)
    // enemyThreeIntervalId = setInterval(handleEnemyThreeMovement, 1000)
  }

}




window.addEventListener('DOMContentLoaded', init)
