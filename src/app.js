import { createNewProject } from "./modules/createProject.js";

import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
    const inputProjectName = document.getElementById('project-name-input');
    const createProjectBtn = document.getElementById('create-project-button');

    createProjectBtn.addEventListener("click", () => {
        const projectName = inputProjectName.value;
        createNewProject(projectName, 'project');
        inputProjectName.value = '';
    })
})