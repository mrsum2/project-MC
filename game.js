// game.js

document.getElementById("single-player-button").addEventListener("click", startGame);

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gameRunning = false;
let player = { x: canvas.width / 2, y: canvas.height / 2, width: 50, height: 50, color: "green", health: 100, hunger: 100, inventory: [] };
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
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawEntities();
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

function spawnEntities() {
    // Example: Spawn some basic entities
    entities.push({ x: 100, y: 100, width: 50, height: 50, color: "brown", type: "tree" });
    entities.push({ x: 200, y: 200, width: 50, height: 50, color: "gray", type: "rock" });
}

// Add your additional game logic here
