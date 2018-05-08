// Enemies our player must avoid
const timer = document.getElementsByClassName('timer');
let time = 0;
let interval = setInterval(countTime, 1000);
let gameCompleted = false;
const restart = document.getElementsByClassName('restart');
const gameStatus = document.getElementsByClassName('gamestatus');

restart[0].addEventListener('click', restartGame);
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x; // initial x position
    this.y = y; // initial y position
    this.speed = (Math.floor(Math.random() * 6) + 5) * 80 - 100;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > 505) {
        this.x = - 200 - (Math.floor(Math.random() * 6) + 5) * 100;
        this.speed = (Math.floor(Math.random() * 6) + 5) * 80 - 150;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    checkCollesion(this);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our player, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    this.x = 2 * 101; // initial x position
    this.y = 5 * 83 - 20;  // initial y position
};

// Update the players's position, required method for game
// Parameter: key value
Player.prototype.update = function (keyValue) {
    switch (keyValue) {
        case 'left':
            if (this.x > 0) {
                this.x -= 101;
            }
            break;
        case 'right':
            if (this.x < 404) {
                this.x += 101;
            }
            break;
        case 'up':
            if (this.y > 0) {
                this.y -= 83;
            }
            break;
        case 'down':
            if (this.y < 395) {
                this.y += 83;
            }
            break;
        default:
            break;
    }

};

//handles user inputs
Player.prototype.handleInput = function (keyValue) {
    // update player if key is in allowedKeys
    if (keyValue && !gameCompleted) this.update(keyValue);

};

// Draw the [player] on the screen, required method for game
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    if ((this.y === - 20) && !gameCompleted) {
        gameComplete();
        gameCompleted = true;
    }

};

// Now instantiate your objects. 
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
allEnemies.push(new Enemy(- 200 - Math.random() * 200, 1 * 83 - 20));
allEnemies.push(new Enemy(- 200 - Math.random() * 200, 1 * 83 - 20));

allEnemies.push(new Enemy(- 200 - Math.random() * 200, 2 * 83 - 20));
allEnemies.push(new Enemy(- 200 - Math.random() * 200, 2 * 83 - 20));

allEnemies.push(new Enemy(- 200 - Math.random() * 200, 3 * 83 - 20));
allEnemies.push(new Enemy(- 200 - Math.random() * 200, 3 * 83 - 20));

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// this function updates the game timer
function countTime() {
    if (!gameCompleted) {
        time++;
    timer[0].innerText = parseInt(time / 60) + ':' + (time % 60);
    }   
}

// this function handles game restart by setting the proper values for player object 
// and for other variables
function restartGame() {
    time = 0; 
    player.x = 2 * 101; // initial x position
    player.y = 5 * 83 - 20;  // initial y position
    gameCompleted =false;
    gameStatus[0].innerHTML = '';
    timer[0].innerText = '0:0';
}

// this function handles game complete 
function gameComplete() {
    let msg = 'Congratulations! Youn won in ' + timer[0].innerText + 'm:s';
    msg += '\nclick Restart to play a new game.' 
    gameStatus[0].innerText = msg;
    gameCompleted = true;

}

// this function checks the collision between player and enemy.
// if collesion is detected, the game will be reset.
//the collision test simply by checking overlap of player image and enemy image.
//it takes enemy object as argument and apply the check with the player object.
function checkCollesion(enemy) {
    if (enemy.y == player.y) {
        if (((enemy.x + 70) >= player.x) && ((enemy.x + 70) <= player.x + 100)) {
            restartGame();
        }
    }
    
    
}