import { createSubHeader, createInputElement, createButton, capFirstLetters, createList, createDiv } from "./domHelpers";
import { handleAddTask } from "./taskHandler.js";

export const projects = [];

// will create a container for new project
// will create h2 and ul elements
// will create input and btn elements to create new tasks
export function createNewProject(projectName) {

    const projectsContainer = document.getElementById('projects-container');

    const projectDiv = createDiv('project', projectsContainer.childElementCount);
    const subheader = createSubHeader(capFirstLetters(projectName));
    const tasksList = createList('tasks-ul');
    const taskInputContainer = createTaskInput(projectDiv.id)

    projectDiv.append(subheader, tasksList);
    projectDiv.append(taskInputContainer)

    projectsContainer.append(projectDiv);

    const project = {
        name: projectName.toLowerCase().trim(),
        id: projectDiv.id,
        tasks: []
    }

    projects.push(project)
    console.log(projects)
};

function createTaskInput(projectId) {
    const inputContainer = createDiv('task-input-container', projectId)
    const taskInput = createInputElement('text', 'task-name-input', 'New Task', (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            handleAddTask(taskInput, projectId);
        };
    });
    const addButton = createButton('task-add-btn', 'add', () => {
        handleAddTask(taskInput, projectId);
    });
    
    inputContainer.append(taskInput, addButton)

    return inputContainer;
};
