// //  Grid state


// const width = 20
// const height = 11
// const squares = []
// //Player state
// let playerIndex = 210
// //Enemy state
// let enemyOneIndex = 23
// let enemyTwoIndex = 27
// // let enemyThreeIndex = 25
// const playerIntervalID = false
// let enemyOneIntervalId = false
// let enemyTwoIntervalId = false
// // let enemyThreeIntervalId = false
// // // Missile / Bomb state
// let missileInterval = false
// const bombInterval = false
// // Missle / Bomb position
// let missileIndex = playerIndex -20
// let bombIndex = enemyOneIndex +20
// let bombIndex2 = enemyTwoIndex +20
// // let bombIndex = enemyTwoIndex +20
// let laser = false
// let bomb1 = false
// let total = 0
// let minusShip = 3
// // Star Destoyer
// // let destroyer = 19
// // Bomb Position
// // let bombIndex = enemyOneIndex +20`
// // let bomb1 = false
// // Start state
// // const start = document.querySelector('.start')
// // start.addEventListener('click', onStartClick)

// // ************************************************************************************************
// // INTIALIZE THE CODE
// // ************************************************************************************************
// function init() {
//   //  our code to excute the actionable functions starts in this 'init' function
//   //
//   // ************************************************************************************************
//   // FILL GRID
//   // ************************************************************************************************
//   // get hold of that parent grid div
//   const grid = document.querySelector('.grid')

//   // used a for loop to fill my grid with induvidual squares, as many as the with times the width
//   for (let i = 0; i < width * height; i++) {
//     const square = document.createElement('div')
//     square.classList.add('grid-item')
//     // square.innerHTML = i
//     squares.push(square)
//     grid.append(square)
//   }

//   // Starfield background



//   // ************************************************************************************************
//   // LISTEN FOR 'CLICK' ON START BUTTON...THEN START
//   // ************************************************************************************************


//   const start = document.querySelector('.start')
//   console.log(start)
//   start.addEventListener('click', onStartClick)


//   function onStartClick(){

//     // ************************************************************************************************
//     // PLAYER MOVEMENT & FIRING
//     // ************************************************************************************************
//     function movePlayer() {
//       squares.forEach(square => square.classList.remove('player'))
//       squares[playerIndex].classList.add('player')
//     }

//     function handleKeyDown(e) {
//       let playerShouldMove = true
//       switch(e.keyCode) {
//         case 39:
//           if (playerIndex % width < width - 1) {
//             playerIndex++
//           }
//           break
//         case 37:
//           if (playerIndex % width > 0) {
//             playerIndex--
//           }
//           break
//         default:
//           playerShouldMove = false
//       }
//       if (playerShouldMove) movePlayer()
//     }

//     // *************************************************************************************************
//     // ENEMY ONE MOVEMENT
//     // *************************************************************************************************
//     function moveEnemyOne(){
//       // Looping through every square in the squares array and
//       // each is a div element, and we're removing the class enemny from all
//       // of the div elements
//       squares.forEach(square => square.classList.remove('enemy'))
//       //
//       if (enemyOneIndex) squares[enemyOneIndex].classList.add('enemy')
//       if (enemyTwoIndex) squares[enemyTwoIndex].classList.add('enemy')
//       // if (enemyThreeIndex) squares[enemyThreeIndex].classList.add('enemy')
//       // squares[missileIndex].classList.add('missile')
//     }

//     let moveLeftOrRight = 'left'
//     let hasMovedDownOneBlock = false

//     function isOnLeftOrRightOfGrid() {
//       if (enemyOneIndex % 20 === 0) {
//         return true
//       }
//       if ([19, 39, 59, 79, 99, 119, 139, 159, 179, 199, 219].includes(enemyOneIndex)) {
//         return true
//       }
//       return false
//     }
//     // Enemy movement
//     function handleEnemyOneMovement(){

//       if (isOnLeftOrRightOfGrid() && !hasMovedDownOneBlock) {
//         enemyOneIndex = enemyOneIndex + 20
//         hasMovedDownOneBlock = true
//         if (moveLeftOrRight === 'left') {
//           moveLeftOrRight = 'right'
//         } else {
//           moveLeftOrRight = 'left'
//         }
//       } else {
//         hasMovedDownOneBlock = false
//         if (moveLeftOrRight === 'left') {
//           enemyOneIndex = enemyOneIndex - 1
//         } else if (moveLeftOrRight === 'right') {
//           enemyOneIndex = enemyOneIndex + 1
//         }
//       }
//       //
//       //
//       // enemyOneIndex = enemyOneIndex-1
//       console.log(enemyOneIndex)
//       moveEnemyOne()
//     }


//     // *************************************************************************************************
//     // ENEMY TWO MOVEMENT
//     // *************************************************************************************************
//     function moveEnemyTwo(){
//       //   // Looping through every square in the squares array and
//       //   // each is a div element, and we're removing the class enemny from all
//       //   // of the div elements
//       //   squares.forEach(square => square.classList.remove('enemy'))
//       //   //
//       squares[enemyTwoIndex].classList.add('enemy')
//       //   // squares[missileIndex].classList.add('missile')
//     }
//     //
//     let moveLeftOrRight2 = 'left'
//     let hasMovedDownOneBlock2 = false
//     //
//     function isOnLeftOrRightOfGrid2() {
//       if (enemyTwoIndex % 20 === 0) {
//         return true
//       }
//       if ([19, 39, 59, 79, 99, 119, 139, 159, 179, 199, 219].includes(enemyTwoIndex)) {
//         return true
//       }
//       return false
//     }
//     // Enemy movement
//     function handleEnemyTwoMovement(){

//       if (isOnLeftOrRightOfGrid2() && !hasMovedDownOneBlock2) {
//         enemyTwoIndex = enemyTwoIndex + 20
//         hasMovedDownOneBlock2 = true
//         if (moveLeftOrRight2=== 'left') {
//           moveLeftOrRight2= 'right'
//         } else {
//           moveLeftOrRight2= 'left'
//         }
//       } else {
//         hasMovedDownOneBlock2 = false
//         if (moveLeftOrRight2=== 'left') {
//           enemyTwoIndex = enemyTwoIndex - 1
//         } else if (moveLeftOrRight2=== 'right') {
//           enemyTwoIndex = enemyTwoIndex + 1
//         }

//         //
//         //
//         // enemyTwoIndex = enemyTwoIndex-1
//         console.log(enemyTwoIndex)
//         moveEnemyOne()
//       }
//     }

//     // **********************************************************************************************
//     // PLAYER MISSILE
//     // **********************************************************************************************

//     //  Fire Missile
//     function fireMissile(e){
//       // console.log(e.keyCode)
//       const shootBlast = document.querySelector('#blaster')

//       if (e.keyCode === 32 && !laser) {
//         laser = true
//         shootBlast.play()
//         missileIndex = playerIndex -20
//         missileInterval = setInterval(moveMissile, 150)
//         // setTimeout(resetMissile, 1500)
//       }

//     }


//     //  Move Missile (upwards)
//     function moveMissile() {
//       enemyXplosion()
//       enemyXplosionTwo()
//       squares.forEach(square => square.classList.remove('missile'))
//       missileIndex -= 20
//       // console.log(squares[missileIndex])
//       if (squares[missileIndex]) {
//         squares[missileIndex].classList.add('missile')
//       } else {
//         resetMissile()
//       }

//     }

//     //  Reset Missile (so that it doesn't stay onscreen)
//     function resetMissile() {
//       laser = false
//       clearInterval(missileInterval)
//       missileIndex = playerIndex -20
//     }
//     // 2. // Movement: Function to add and remove missile

//     // **********************************************************************************************
//     // SCORE COUNTER
//     // **********************************************************************************************
//     function add10() {
//       total = total + 10
//       document.getElementById('total').innerHTML = total
//     }

//     // **********************************************************************************************
//     // LIVES COUNTER
//     // **********************************************************************************************
//     function minusLife() {
//       minusShip = minusShip - 1
//       document.getElementById('minusShip').innerHTML = minusShip
//       if (minusShip === 0) {
//         gameOver()
//         // setTimeout(() => {
//         //   alert('Game Over')
//         // }, 500)
//       }
//     }

//     function gameOver() {
//       grid.style.display = 'none'
//       const gameover = document.querySelector('.gameover')
//       gameover.style.display = 'block'
//     }



//     // **********************************************************************************************
//     // ENEMY ONE EXPLOSION
//     // **********************************************************************************************
//     // Change initial picture to explosion state and trigger explosion sound
//     const explode1 = document.querySelector('explosion')
//     function enemyXplosion(e) {
//       const hit = document.querySelector('#hit')

//       if (missileIndex === enemyOneIndex) {
//         const position = missileIndex
//         // clearInterval takes 1 parameter and stops the interval
//         clearInterval(enemyOneIntervalId)
//         enemyOneIndex = null
//         hit.play()
//         squares[position].classList.remove('enemy')
//         // Need to find what
//         // explode.play()
//         squares[position].classList.add('explosion')
//         setTimeout( ()=> {
//           //  SetTimeout will remove the enXplosion after 1 second
//           squares[position].classList.remove('explosion')
//           add10()

//         }, 500)
//       }
//     }

//     // **********************************************************************************************
//     // ENEMY TWO EXPLOSION
//     // **********************************************************************************************
//     // Change initial picture to explosion state and trigger explosion sound
//     const explode2 = document.querySelector('explosion')
//     function enemyXplosionTwo(e) {
//       const hit = document.querySelector('#hit')

//       if (missileIndex === enemyTwoIndex) {
//         const position = missileIndex
//         // clearInterval takes 1 parameter and stops the interval
//         clearInterval(enemyTwoIntervalId)
//         enemyTwoIndex = null
//         hit.play()
//         squares[position].classList.remove('enemy')
//         // Need to find what
//         // explode.play()
//         squares[position].classList.add('explosion')
//         setTimeout( ()=> {
//           //  SetTimeout will remove the enXplosionafter 1 second
//           squares[position].classList.remove('explosion')
//           add10()
//         }, 500)
//       }
//     }

//     ///*******************************************************************************************
//     // ENEMY BOMB
//     // ******************************************************************************************


//     //  Fire Bomb [sound]
//     function fireBomb(){
//       // console.log('firing')
//       const shootBlast = document.querySelector('#enemyBlaster')

//       shootBlast.play()
//       bombIndex = enemyOneIndex + 20
//       bombIndex2 = enemyTwoIndex +20
//       // bombIndex = enemyTwoIndex +20

//       // bombInterval = setInterval(moveBomb, 150)
//       moveBomb()


//     }
//     setTimeout(fireBomb, 2000)
//     // fireBomb()

//     // gameTimerId = setInterval(() => {}, 1000)
//     // clearInterval(gameTimerId)

//     //  Move Bomb (downwards) [image]
//     function moveBomb() {
//       playerXplosion()
//       squares.forEach(square => square.classList.remove('bomb'))
//       bombIndex += width
//       // console.log(bombIndex)
//       // console.log(squares[bombIndex])
//       if (squares[bombIndex || bombIndex2 ]) {
//         squares[bombIndex || bombIndex2 ].classList.add('bomb')
//         setTimeout(moveBomb, 300)
//       } else {
//         resetBomb()
//         fireBomb()
//       }
//     }

//     //  Reset Bomb (so that it doesn't stay onscreen)
//     function resetBomb() {
//       bomb1 = false
//       // clearInterval(bombInterval)
//       // bombIndex = playerIndex +20
//     }
//     // 2. // Movement: Function to add and remove missile





//     // **********************************************************************************************
//     // PLAYER EXPLOSION
//     // **********************************************************************************************
//     // Change initial picture to explosion state and trigger explosion sound
//     const playerExplode = document.querySelector('explosion')
//     function playerXplosion(e) {
//       const xhit = document.querySelector('#xhit')

//       if (bombIndex === playerIndex) {
//         const position1 = bombIndex
//         // clearInterval takes 1 parameter and stops the interval
//         clearInterval(playerIntervalID)
//         playerIndex = 210
//         const xHit =
//         xhit.play()
//         squares[position1].classList.remove('player')
//         // Need to find what
//         // explode.play()
//         squares[position1].classList.add('explosion')
//         setTimeout( ()=> {
//           //  SetTimeout will remove the enXplosionafter 1 second
//           squares[position1].classList.remove('explosion')

//         }, 500)
//         console.log('playerIndex', playerIndex)
//         console.log('squares[playerIndex]', squares[playerIndex])
//         minusLife()
//         squares[playerIndex].classList.add('player')
//       }
//     }

//     // function checkLoss (y) {
//     //     if (y >= this.player.pos.y) {
//     //        this.reset();
//     //     }
//     // },
//     //



//     document.addEventListener('keydown', fireMissile)
//     // document.addEventListener('keydown', fireBomb)




//     // Adding the class to the square
//     squares[playerIndex].classList.add('player')
//     window.addEventListener('keydown', handleKeyDown)


//     squares[enemyOneIndex].classList.add('enemy')
//     squares[enemyTwoIndex].classList.add('enemy')
//     // squares[enemyThreeIndex].classList.add('enemy')
//     // Enable to clear and stop enemmy from be ing re-drawn to screen
//     enemyOneIntervalId = setInterval(handleEnemyOneMovement, 1000)
//     enemyTwoIntervalId = setInterval(handleEnemyTwoMovement, 1000)
//     // enemyThreeIntervalId = setInterval(handleEnemyThreeMovement, 1000)
//   }





// }




// window.addEventListener('DOMContentLoaded', init)






const KEY_CODE_LEFT = 37;
const KEY_CODE_RIGHT = 39;
const KEY_CODE_SPACE = 32;

const GAME_WIDTH = 1000;
const GAME_HEIGHT = 600;

const PLAYER_WIDTH = 20;
const PLAYER_MAX_SPEED = 600.0; // Speed player can move in pixels per second
const LASER_MAX_SPEED = 800.0; // Speed laser can shoot at
const LASER_COOLDOWN = 0.25;   // Time at which Player lasers can be fired between each other

const ENEMIES_PER_ROW = 10;
const ENEMY_HORIZONTAL_PADDING = 80;
const ENEMY_VERTICAL_PADDING = 70;
const ENEMY_VERTICAL_SPACING = 80;
const ENEMY_COOLDOWN = 3;  // Time at which Enemy lasers can be fired between each other

// To remember which of our keys are pressed; 
// set to TRUE if keydown and FALSE if keyup
const GAME_STATE = {
  lastTime: Date.now(), // Absolute time of previous frame
  leftPressed: false,
  rightPressed: false,
  spacePressed: false,
  playerX: 0,
  playerY: 0,
  playerCooldown: 0,
  lasers: [], // Loop through all the Player lasers and update their positions
  enemies: [], // Loop through all the enemies and update their positions
  enemyLasers: [], // Loop through all the Enemy lasers and update their positions
  enemyExplode: [], // Loop through all the Enemy explosions and update their positions
  gameOver: false
};

// Hit-testing: determines when one element intersects with another element.
// When there is an intersection of two elements( ie.rectangles), game is over!
function rectsIntersect(r1, r2) {
  return !(
    r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top
  );
}



function setPosition(el, x, y) {
  el.style.transform = `translate(${x}px, ${y}px)`;
}

function clamp(v, min, max) {
  if (v < min) {
    return min;
  } else if (v > max) {
    return max;
  } else {
    return v;
  }
}

function rand(min, max) {
  if (min === undefined) min = 0;
  if (max === undefined) max = 1;
  return min + Math.random() * (max - min);
}

/********** PLAYER **********/

function createPlayer(container) {
  GAME_STATE.playerX = GAME_WIDTH / 2;
  GAME_STATE.playerY = GAME_HEIGHT - 50;
  const player = document.createElement("img");
  player.src = "assets/images/Lukes-X-Wing.png";
  player.className = "player";
  container.appendChild(player);
  setPosition(player, GAME_STATE.playerX, GAME_STATE.playerY);
}

function destroyPlayer(container, player) {
  container.removeChild(player);
  GAME_STATE.gameOver = true;
  const audio = new Audio("assets/audio/playerExplosion.wav");
  audio.play();
}


// Checks which key (left or right) has been pressed and moves the player.
function updatePlayer(dt, container) {
  if (GAME_STATE.leftPressed) {
    GAME_STATE.playerX -= dt * PLAYER_MAX_SPEED;
  }
  if (GAME_STATE.rightPressed) {
    GAME_STATE.playerX += dt * PLAYER_MAX_SPEED;
  }

  // Set player X value
  GAME_STATE.playerX = clamp(
    GAME_STATE.playerX,
    PLAYER_WIDTH,
    GAME_WIDTH - PLAYER_WIDTH
  );

  // Check to see if spacebar key is down, and if it is, create a new laser;
  // the laser is created at the current position of the player.
  // The playerCooldown has to be equal or less than zero (0) seconds
  // for the laser to fire again, which is every 0.5 seconds.
  if (GAME_STATE.spacePressed && GAME_STATE.playerCooldown <= 0) {
    createLaser(container, GAME_STATE.playerX, GAME_STATE.playerY);
    GAME_STATE.playerCooldown = LASER_COOLDOWN;
  }
  if (GAME_STATE.playerCooldown > 0) {
    GAME_STATE.playerCooldown -= dt;
  }

  const player = document.querySelector(".player");
  setPosition(player, GAME_STATE.playerX, GAME_STATE.playerY);
}


/********** PLAYER LASERS **********/

function createLaser(container, x, y) {
  const element = document.createElement("img");
  element.src = "assets/images/X-Wing-laser.png";
  element.className = "laser";
  container.appendChild(element);
  const laser = { x, y, element };
  GAME_STATE.lasers.push(laser);
  const audio = new Audio("assets/audio/blaster-firing.mp3");
  audio.play();
  setPosition(element, x, y);
}


// Remove laser from top of screen; ie. it disappers when it reaches
// the top of 'div.game' container and does not spill over
function destroyLaser(container, laser) {
  container.removeChild(laser.element);
  laser.isDead = true;
}

function updateLasers(dt, container) {
  const lasers = GAME_STATE.lasers;
  for (let i = 0; i < lasers.length; i++) {
    const laser = lasers[i];
    laser.y -= dt * LASER_MAX_SPEED;
    if (laser.y < 0) {
      destroyLaser(container, laser);
    }
    setPosition(laser.element, laser.x, laser.y);
    const r1 = laser.element.getBoundingClientRect();
    const enemies = GAME_STATE.enemies;
    for (let j = 0; j < enemies.length; j++) {
      const enemy = enemies[j];
      if (enemy.isDead) continue;
      const r2 = enemy.element.getBoundingClientRect();
      if (rectsIntersect(r1, r2)) {
        // Enemy was hit
        destroyEnemy(container, enemy);
        destroyLaser(container, laser);
        // createEnemyExplosion(container, explode);
        break;
      }
    }
  }
  GAME_STATE.lasers = GAME_STATE.lasers.filter(e => !e.isDead);
}

/********** ENEMY **********/

function createEnemy(container, x, y) {
  const element = document.createElement("img");
  element.src = "assets/images/Tie-Fighter-1.png";
  element.className = "enemy";
  container.appendChild(element);
  const enemy = {
    x,
    y,
    cooldown: rand(2, ENEMY_COOLDOWN), // Set the time between random Enemy firing
    element                              // to 5 seconds
  };
  GAME_STATE.enemies.push(enemy);
  setPosition(element, x, y);
}

// Remove the Enemy child from the DOM
function destroyEnemy(container, enemy) {
  const audio = new Audio("assets/audio/TIE_fighter_explode.mp3");
  audio.play();
  container.removeChild(enemy.element);
  enemy.isDead = true;
  const element = document.createElement("img");
  element.src = "assets/images/enemyExplosion.png";
  // element.className = "enemyExplosion";
  // container.appendChild(element);
  // setPosition(element, x, y);
  // const enemyExplode = {x, y, element}

}

// Makes the enemies rotate a bit so that they 
// are harder to shoot
function updateEnemies(dt, container) {
  const dx = Math.sin(GAME_STATE.lastTime / 1000.0) * 50;
  const dy = Math.cos(GAME_STATE.lastTime / 1000.0) * 10;

  const enemies = GAME_STATE.enemies;
  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    const x = enemy.x + dx;
    const y = enemy.y + dy;
    setPosition(enemy.element, x, y);
    enemy.cooldown -= dt;
    if (enemy.cooldown <= 0) {
      createEnemyLaser(container, x, y);
      enemy.cooldown = ENEMY_COOLDOWN;
    }
  }
  GAME_STATE.enemies = GAME_STATE.enemies.filter(e => !e.isDead);
}

function createLaser(container, x, y) {
  const element = document.createElement("img");
  element.src = "assets/images/X-Wing-laser.png";
  element.className = "laser";
  container.appendChild(element);
  const laser = { x, y, element };
  GAME_STATE.lasers.push(laser);
  const audio = new Audio("assets/audio/blaster-firing.mp3");
  audio.play();
  setPosition(element, x, y);
}




/********** EXPLOSIONS **********/

function createEnemyExplosion(container, x, y) {
  const element = document.createElement("img");
  element.src = "assets/images/enemyExplosion.png";
  element.className = "explode";
  container.appendChild(element);
  const explode = { x, y, element };
  GAME_STATE.enemyExplode.push(explode);
  setPosition(element, x, y);


}

function destroyEnemyExplosion(container, enemyExplosion) {
  container.removeChild(enemyExplosion.element);
  enemyExplosion.isDead = true;
}

/********** ENEMY LASERS **********/

function createEnemyLaser(container, x, y) {
  const element = document.createElement("img");
  element.src = "assets/images/enemy-laser.png";
  element.className = "enemy-laser";
  container.appendChild(element);
  const laser = { x, y, element };
  GAME_STATE.enemyLasers.push(laser);
  setPosition(element, x, y);
}

function updateEnemyLasers(dt, container) {
  const lasers = GAME_STATE.enemyLasers;
  for (let i = 0; i < lasers.length; i++) {
    const laser = lasers[i];
    laser.y += dt * LASER_MAX_SPEED;
    if (laser.y > GAME_HEIGHT) {
      destroyLaser(container, laser);
    }
    setPosition(laser.element, laser.x, laser.y);
    const r1 = laser.element.getBoundingClientRect();
    const player = document.querySelector(".player");
    const r2 = player.getBoundingClientRect();
    if (rectsIntersect(r1, r2)) {
      // Player was hit
      destroyPlayer(container, player);
      break;
    }
  }
  GAME_STATE.enemyLasers = GAME_STATE.enemyLasers.filter(e => !e.isDead);
}


function init() {
  const container = document.querySelector(".game");
  createPlayer(container);
// Calculate the X position of each enemy ship
  const enemySpacing = (GAME_WIDTH - ENEMY_HORIZONTAL_PADDING * 2) / (ENEMIES_PER_ROW - 1);
  for (let j = 0; j < 3; j++) {
    const y = ENEMY_VERTICAL_PADDING + j * ENEMY_VERTICAL_SPACING;
    for (let i = 0; i < ENEMIES_PER_ROW; i++) {
      const x = i * enemySpacing + ENEMY_HORIZONTAL_PADDING;
      createEnemy(container, x, y);
    }
  }
}

function playerHasWon() {
  return GAME_STATE.enemies.length === 0;
}

// Update loop will make sure that Player will be updated
function update(e) {
  const currentTime = Date.now();
  const dt = (currentTime - GAME_STATE.lastTime) / 1000.0;

  if (GAME_STATE.gameOver) {
    document.querySelector(".game-over").style.display = "block";
    return;
  }

  if (playerHasWon()) {
    document.querySelector(".congratulations").style.display = "block";
    return;
  }


// Hold the positions of all players and lasers on screen;
// we fire a laser when the player presses a space bar. 
  const container = document.querySelector(".game");
  updatePlayer(dt, container);
  updateLasers(dt, container);
  updateEnemies(dt, container);
  updateEnemyLasers(dt, container);

  GAME_STATE.lastTime = currentTime;
  window.requestAnimationFrame(update); // will update screen only if tab is visible
                                        // and reduce power consumption if tab is invisible
}

// Set state to true
function onKeyDown(e) {
  if (e.keyCode === KEY_CODE_LEFT) {
    GAME_STATE.leftPressed = true;
  } else if (e.keyCode === KEY_CODE_RIGHT) {
    GAME_STATE.rightPressed = true;
  } else if (e.keyCode === KEY_CODE_SPACE) {
    GAME_STATE.spacePressed = true;
  }
}


// Set state to false 
function onKeyUp(e) {
  if (e.keyCode === KEY_CODE_LEFT) {
    GAME_STATE.leftPressed = false;
  } else if (e.keyCode === KEY_CODE_RIGHT) {
    GAME_STATE.rightPressed = false;
  } else if (e.keyCode === KEY_CODE_SPACE) {
    GAME_STATE.spacePressed = false;
  }
}

init();
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);
window.requestAnimationFrame(update);

