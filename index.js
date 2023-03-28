const addButton = document.getElementById('add');
const toDoItem = document.getElementById('item');
const listedItems = document.getElementById('listed-items');

const listedItemsArray = Array.from(listedItems);

addButton.addEventListener('click', toDoItem => {
    if (toDoItem) {
        // let value1 = document.getElementById('item').value;
        listedItemsArray.push(toDoItem);
    }
})