# Gorillas (JS-Project)

## Background

Hi! Welcome to Gorillas, my projectile motion game coded via Javascript. This game involves two rival gorillas. The goal of the game is to throw bananas and hit the other gorilla at the other end of the screen. One gorilla is controlled by the user and the other by the computer opponent / AI. The banana's physics follows projectile motion. The user decides the direction and speed of the banana thrown via two seperate gauges which appear before throwing. A jungle landscape is randomly generated between the two gorillas, and the user and AI gorilla have to throw the banana in a path avoid this landscape. Each time a gorilla is hit by a banana their lives decrease by one, and the game is concluded when a gorilla loses all their lives!

## Functionality & MVPs

In Gorillas, users will be able to:

1. Determine the angle of the banana thrown via a line gauge which rotates back and forth between 0 and 90 degrees. Upon hitting the space bar / clicking the mouse, the current angle of the gauge will be locked into place.
2. After locking the angle in place, a new line gauge appears which determines the speed of the banana. This line gauge continously decreases and increases in length, until the user once again hits the the space bar / clicks the mouse, this time locking the speed of the banana.
3. The user throws the banana as to avoid the landscape generated between themselves and the rival gorilla. If the banana collides with any of the landscape, the landscape halts the banana's path the turn ends.
4. The user competes against a rival AI gorilla, and the user and AI gorilla alternate turns throwing bananas at each other. The rival gorilla's angle and speed when throwing the banana is pseudo-randomly generated so the rival gorilla succeeds with their throw 10-20% of the time.

In addition, this project will include:

1. Instructions detailing how to play the game.
2. Sprites animating the gorillas and bananas, as well as static sprites depicting the landscape, background & lives.
3. Lives for each gorilla (if time permits), which decrease when hit with a banana.
4. Increasing difficulty as the game persists (if time permits). If the user has more lives than the rival gorilla, the speed of the gauges will increase (making it more difficult to throw accurately) and/or the rival gorilla will become more accurate.




