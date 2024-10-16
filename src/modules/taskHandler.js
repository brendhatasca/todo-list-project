import { projects } from "./createProject.js";
import { createButton } from "./domHelpers.js";

// Handles adding task to correct section
// Adds task to project object
export function handleAddTask(taskInput, projectId) {
    const projectDiv = document.getElementById(projectId);
    const tasksList = projectDiv.querySelector('.tasks-ul');
    const taskName = taskInput.value;
    tasksList.append(createTask(taskName));

    const project = projects.find(proj => proj.id === projectId);
    if(project) {
        project.tasks.push(new Task(taskName))
    }
    console.log(project)
    taskInput.value = '';
}

// Creates li el, change status btn, adds name
export function createTask(taskName) {
    const task = document.createElement('li');
    const taskStatus = createButton('task-status', 'Done', () => {
        taskStatus.classList.toggle('done');
    })
    const taskTitle = document.createElement('p')
    taskTitle.textContent = taskName;

    const removeTaskBtn = createButton('remove-task', 'X', () => {
        // document.remove(e.target.parentElement)
        task.remove();
    })

    task.append(taskStatus, taskTitle, removeTaskBtn)

    return task;
};

class Task {
    constructor(title) {
        this.title = title;
        this.status = "incomplete";
        this.dueDate = " ";
    }

    addDueDate() {
        // adds due date
    }

    addDescription() {
        // description
    }
}

export function removeTask(task) {

}