// <li>
// <label for="task-1">Wyrzucić śmieci</label>
// <input type="checkbox" id="task-1" name="Wyrzucić śmieci" />
// </li>
const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector('button');

const tasksContainerElement = HTMLElement = document.querySelector('.tasks');

const tasks: string[] = ['Wyrzucić śmieci', 'Pójść na siłownię', 'Nakarmić koty'];

const render = () => {
    tasksContainerElement.innerHTML = ''
    tasks.forEach(task => {
        const tasksElement: HTMLElement = document.createElement('li')
        tasksElement.innerText = task;
        tasksContainerElement.appendChild(tasksElement);
    })
}

const addTask = (task: string) => {
    tasks.push(task)
}

addButtonElement.addEventListener('click', (event: Event) => {
    event.preventDefault();
    tasks.push(taskNameInputElement.value)
    render();

})

render();

