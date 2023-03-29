const addTaskButton = document.getElementById('add');


addTaskButton.addEventListener('click', task => {

    
    let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    localStorage.setItem('todoList', JSON.stringify(todoList));

    const todoListElement = document.getElementById('task-list');

    todoListElement.innerText = " ";

    todoList.forEach((item, index) => {
        const listItemElement = document.createElement('li');
        listItemElement.innerHTML = item;

        todoListElement.appendChild(listItemElement);
    });

    const inputValue = document.getElementById('task-input');
    const task = inputValue.value.trim();

    if (task !== "") {
        todoList.push(task);

        inputValue.value = "";
    }
})