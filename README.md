# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: Space Invaders

Project 1 by:  Cliff Conolly

General Assembly Project 1:  Simple front-end game

Goal: To create a single page game
Timeframe: 9 days

Technologies used
* JavaScript (ES6)
* HTML5
* CSS
* GitHub

My Game – Space Invaders(with a Star Wars theme)

You can find a hosted version here ----> https://github.com/Cliff-Conolly/sei-project-1

## Game overview

Space Invaders is a 1978 arcade game created by Tomohiro Nishikado. It was manufactured and sold by Taito in Japan, and licensed in the United States by the Midway division of Bally. Within the shooter genre, Space Invaders was the first fixed shooter and set the template for the shoot’em up genre. The goal is to defeat wave after wave of descending aliens with a horizontally moving laser to earn as many points as possible. Occasionally, an alien mother-ship will go randomly from left or right or vice versa across the top of the screen. This version is a Star Wars theme, and rightly so given that the movie came out in 1977 and with its success came a plethora of copy cats who wanted to capitalize on this. It’s no stretch of the imagination that this game was also based on the movie.

The player controls the movement of the spaceship (X-Wing Fighter) in order to kill the enemy ships (Tie-Fighters) which are approaching closer as the game goes on.

Controls
* Spaceship (X-Wing Fighter): ←  →  keys
* Start game: Pressing "PRESS START" at top.
* End game: Game ends after all ships are killed (“End Button” will be added in future upgrades)

Game Instructions
1.	The game is started by clicking on the "PRESS START" button.

![Start](assets/screenshots/start.png)


2.	Once the game starts, the enemy Tie-Fighters will start to shoot down blasts which you will have to maneuver to get out of the way.



3. As you maneuver left to right, press the space-bar to fire your missiles to kill the ships.



4. When you have a kill on the enemy ship you will see and hear it explode and 10pts will be added to your score.



5. When the enemy kills you, you will also explode and one of your lives will be deducted and you will immediately receive a new ship.



5. When all of your ships have been hit, the game will be over.



## Process
The starting point for this game was creating the basic grid layout on which the dogfight could happen between the player and enemies and where they could move. This was created by a list of 'div's in the HTML. Each cell within the grid was an individual element. These cells are nestled within a container. The X-Wing and Tie-Fighters along with the other images for the blasters and explosions were images that I found on a website that uses photorealistic images that you can rotate in any direction to get the angle you want. Therefore, I aligned the fighters at an angle to make it appear more 3 dimensional and realistic as they face off. Original sound files from the movie for the respective X-Wing and Tie-Fighters were also used to simulate when they fired and also when they exploded from a missile.

Functions for every aspect included the firing and movement of the missiles by both the player and the enemy, score keeping, lives and game over. The biggest function (and most difficult) was the movement of the enemies as they came down closer to the player, dropping one level and firing at the same time.

The most satisfying moment was when I reverse engineered the player firing function and used it for the enemies to go in the opposite direction. Upon testing it, there were only two lines of code that were needed to fix the interval at which the enemy fired, and it ‘worked’! I was amazed because it was a surgical operation that took 1 ½ hours to do and that was the only bug!

## Challenges
The biggest challenge was trying to get multiple ships. It was only in hindsight that I should have used classes to accomplish this. The code I wrote for my first enemy ship could be duplicated, and I did it for a second ship but the code got buggier when I tried a third.
Wins
Being able to reverse engineer the firing mechanism for the player ship to the enemy ship so that the direction was reversed without major changes was a high point. Overall I really enjoyed the project and it became a passion project once I started to use the photorealistic images and original sounds.


## Future features

Future iterations will include more enemy ships, a Star Destroyer as the ‘mothership’. Also now that I can maneuver the photorealistic images in different directions, I will have an effect whereby every random shot that the makes on the Tie-Fighters, it will ‘appear’ to spin out of control towards the X-Wing Fighter to increase the difficulty level whereby the player has another object to escape from.

#### Live site: https://cliff-conolly.github.io/sei-project-1/
