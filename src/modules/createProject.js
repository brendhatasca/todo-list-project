import { createSubHeader, capFirstLetters } from "./domHelpers";


// will create a container for new project
// will create h2 and ul elements
// will create input and btn elements to create new tasks
export function createNewProject(projectName, className) {

    const listsContainer = document.getElementById('projects-container');

    const projectDiv = document.createElement('div');
    const subheader = createSubHeader(capFirstLetters(projectName));
    const tasksList = document.createElement('ul');

    projectDiv.classList.add(className);
    tasksList.classList.add('tasks-ul');

    projectDiv.append(subheader, tasksList, createTaskInput());
    listsContainer.append(projectDiv);
};

// append input and button to the dom
// more specifically the project div
function createTaskInput() {
    const tasksList = document.querySelector('.tasks-ul');
    const taskInputContainer = document.createElement('div');
    const input = document.createElement('input');
    const button = document.createElement('button');

    input.type = "text";
    input.placeholder = "Task name";
    input.classList.add('task-name-input');

    button.classList.add('task-name-add-btn');
    button.innerHTML = "Add";
    button.onclick = () => {
        addTask(input);
        input.value = '';
    };

    taskInputContainer.classList.add('task-input-container');

    taskInputContainer.append(input, button)

    return taskInputContainer;
};

function addTask(taskName) {
    const tasksList = document.querySelector('.tasks-ul')
    const task = document.createElement('li');
    task.textContent = taskName.value;

    tasksList.append(task)
}