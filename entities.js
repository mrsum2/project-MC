// entities.js

function createEntity(type, x, y, width, height, color) {
    return { type, x, y, width, height, color };
}

function spawnInitialEntities() {
    entities.push(createEntity('tree', 100, 100, 50, 50, 'brown'));
    entities.push(createEntity('rock', 200, 200, 50, 50, 'gray'));
    // Add more initial entities here
}
