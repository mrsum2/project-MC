// inventory.js

function addItemToInventory(item) {
    player.inventory.push(item);
    updateInventoryUI();
}

function updateInventoryUI() {
    const inventoryDiv = document.getElementById('inventory');
    inventoryDiv.innerHTML = '';
    player.inventory.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'inventory-item';
        itemDiv.innerText = item.type;
        inventoryDiv.appendChild(itemDiv);
    });
}
