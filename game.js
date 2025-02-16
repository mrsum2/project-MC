// game.js

document.getElementById("single-player-button").addEventListener("click", startGame);

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gameRunning = false;
let player = { x: canvas.width / 2, y: canvas.height / 2, width: 50, height: 50, color: "green", health: 100, hunger: 100, inventory: [], velocityY: 0, isFalling: false, lastY: canvas.height / 2 };
let entities = [];

function startGame() {
    document.getElementById("menu").style.display = "none";
    canvas.style.display = "block";
    gameRunning = true;
    spawnEntities();
    gameLoop();
}

function gameLoop() {
    if (!gameRunning) return;
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

function update() {
    // Update game state (e.g., player movement, entity behavior)
    if (player.hunger > 0) {
        player.hunger -= 0.01; // Example hunger decrease over time
    } else {
        player.health -= 0.1; // Example health decrease when hunger is 0
    }

    handleFallDamage();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawEntities();
    drawUI();
}

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawEntities() {
    entities.forEach(entity => {
        ctx.fillStyle = entity.color;
        ctx.fillRect(entity.x, entity.y, entity.width, entity.height);
    });
}

function drawUI() {
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(`Health: ${player.health.toFixed(1)}`, 10, 20);
    ctx.fillText(`Hunger: ${player.hunger.toFixed(1)}`, 10, 40);
}

function spawnEntities() {
    // Example: Spawn some basic entities
    entities.push({ x: 100, y: 100, width: 50, height: 50, color: "brown", type: "tree" });
    entities.push({ x: 200, y: 200, width: 50, height: 50, color: "gray", type: "rock" });
}

// Handle fall damage
function handleFallDamage() {
    if (player.y < player.lastY) {
        player.isFalling = true;
    } else if (player.isFalling && player.y >= canvas.height - player.height) {
        player.isFalling = false;
        const fallDistance = player.lastY - (canvas.height - player.height);
        if (fallDistance > 50) {
            player.health -= fallDistance / 10; // Adjust the damage calculation as needed
        }
    }
    player.lastY = player.y;
}

// Add your additional game logic here
