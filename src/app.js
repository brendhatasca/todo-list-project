import { createNewProject } from "./modules/createProject.js";

import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
    const inputProjectName = document.getElementById('project-name-input');
    const createProjectBtn = document.getElementById('create-project-button');

    createProjectBtn.addEventListener("click", () => {
        const projectName = inputProjectName.value;
        createNewProject(projectName);
        inputProjectName.value = '';
    });

    inputProjectName.addEventListener("keydown", (event) => {
        const projectName = inputProjectName.value;
        if (event.key === 'Enter' || event.keyCode === 13) {
            createNewProject(projectName);
            inputProjectName.value = '';
        };

    })
})