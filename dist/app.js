// <li>
// <label for="task-1">Wyrzucić śmieci</label>
// <input type="checkbox" id="task-1" name="Wyrzucić śmieci" />
// </li>
const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector('button');
const tasksContainerElement = HTMLElement = document.querySelector('.tasks');
const tasks = ['Wyrzucić śmieci', 'Pójść na siłownię', 'Nakarmić koty'];
const render = () => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach(task => {
        const tasksElement = document.createElement('li');
        tasksElement.innerText = task;
        tasksContainerElement.appendChild(tasksElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener('click', (event) => {
    event.preventDefault();
    tasks.push(taskNameInputElement.value);
    render();
});
render();
