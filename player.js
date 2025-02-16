// player.js

document.addEventListener('keydown', movePlayer);

function movePlayer(event) {
    const speed = 5;
    switch(event.key) {
        case 'ArrowUp':
            player.y -= speed;
            break;
        case 'ArrowDown':
            player.y += speed;
            break;
        case 'ArrowLeft':
            player.x -= speed;
            break;
        case 'ArrowRight':
            player.x += speed;
            break;
    }
}
