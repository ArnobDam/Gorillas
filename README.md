# Gorillas (JavaScript Project)

Welcome to [Gorillas](https://arnobdam.github.io/Gorillas/), my projectile motion game coded via Javascript, HTML & CSS. Gorillas is a projectile motion game involving two rival gorillas throwing bananas at each other. One gorilla is controlled by the user and the other by the computer opponent / AI. The banana's path implements projectile motion physics, including vector math and trigonometry. This game was creating by combining my love of arcade game, physics and computer programming. I hope you enjoy playing!

## Functionality & MVPs

In Gorillas, users will be able to:

1. Determine the angle of the banana thrown via a rotating line guage. Upon hitting the space bar once, the current angle of the gauge will be locked into place.
2. After locking the angle in place, the line gauge will then contiuosly increase and decrease in length. Upon hitting the space bar again, the power of the banana throw will llock in the gorilla will throw the banana!

3. Bananas are thrown needing to avoid the raondmly generated landscape generated between themselves and the rival gorilla. If the banana collides with any of the landscape, the game boundaries or the rival gorilla, the turn switches.
4. The rival gorilla's AI involves pseudo-randomly generating x- and y-vectors which determing the angle and speed of their banana's throw. The AI determine that rival gorilla succeeds with their throw 10-15% of the time.

In addition, this project will include:

1. Instructions detailing how to play the game.
2. Sprites animating the gorillas and bananas, as well as static sprites depicting the landscape, background & lives.
3. An arcade-based CSS style, as well as an animated background in the gameview.

## Wireframe:

- [Wireframe Preview](https://wireframe.cc/pro/pp/89fcc9894600345)

## Technologies & Libraries:

- Javascript
- HTML
- CSS
- Canvas API
- Publicly Available Sprite Libraries

## Implementation Timeline 

- Friday afternoon & weekend: Setup project, get webpack up and running. Create all necessary classes, including gorilla, banana, landscape/tree and possibly boundary. Create and load basic game page, including the two gorillas in their proper positions and randomly generate. Implement projectile motion code in the banana class. 

- Monday: Create the two gauges for throwing the bananas. Hook up the banana to each gorillas.

- Tuesday: Create turns, with logic that switches turns when the banana collides with the landscape, boundary, or other banana.

- Wednesday: Create instructions, a game over page, and nice title logo. Update all graphics and add sprites.

- Thursday: Complete anything missing from previous days' goals. If completed, add music and a mute button, lives, and funcionality to increase game difficulty (stated above) as the opponent's lives decrease.




