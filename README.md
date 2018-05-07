## frontend-nanodegree-arcade-game
===============================

## Table of Contents

* [How to run the application](#how-to-run)
* [Instructions](#instructions)
* [Contributing](#contributing)
* [HTML changes](#htmlchanges)
* [CSS Changes](#csschanges)
* [JavaScript changes](#jschanges)
* [Dependencies](#dependencies)

## how-to-run
just open the index.html file in your web browser.
use arrow keys to move the player.
player should avoid collisin with the enemies

## Instructions

Before changing the Project, please review the HTML, CSS, and JavaScript files carefullty until you get good understanding of the Project structure.
The changes I have made are in the JavaScript file as described in this README.

## Contributing

I'll be more than happy to reveive a pull request from you!

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## htmlchanges

No major changes made to the HTML source file from Udacity. Jsut added the following:
Timer display, game restart button, and game complete message.

## csschanges

No changes made to the CSS source file from Udacity.

## jschanges

All my work falls in the app.js file. 

Bseside creating the `Player` Class and instantiated player and enemy object, I created many new functions as described below:

`gameComplete()` this function is called upon successfull game completion.

`checkCollesion(enemy)` this function where collision test logic is implemented.

`countTime()` this function simply increment the time interval ellapsed in millisecond since the game started.

`restartGame()` this function performs initializations to start a new game.


## dependencies

This project uses the following resource files:

Local files:

[app.js] (app.js)

[engine.js] (engine.js)

[resources.js] (resources.js)

[app.css] (app.css)
