import { state, setCurrentProjectId, getCurrentProject } from "./state.js";

export function bindProjModal(handleProjBind) {
    const addProjBtn = document.querySelector(".add-proj-btn");
    const form = document.querySelector(".proj-cont");
    const modal = document.querySelector(".proj-dialog");

    addProjBtn.addEventListener("click", () => {
        modal.showModal();
    })
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = form.querySelector("#form-proj-name"); // getting user input value
        const projectName = input.value.trim();
        handleProjBind(projectName);
        modal.close();
        form.reset();
    })
}

export function bindNoteModal() {
    const addNoteBtn = document.querySelector(".add-note-btn")
    const form = document.querySelector(".note-cont");
    const modal = document.querySelector(".note-dialog");

    addNoteBtn.addEventListener("click", () => {
        modal.showModal();
    })
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        modal.close();
        form.reset();
    })
}


export function updateNoteBtnState() {
    const addNoteBtn = document.querySelector(".add-note-btn");
    addNoteBtn.disabled = !state.currentProjectId; // if no projects - button disabled
}

export function renderProjects(handleProjectClick) {
    const projCont = document.querySelector(".project-cont"); // placed out of loop, 
    // to prevent multiple query
    projCont.innerHTML = "";
    state.projects.forEach(p => {
        const newProject = document.createElement("p");
        newProject.textContent = p.name;

        if (p.id === state.currentProjectId) { // highlighting current project
            newProject.classList.add("highlighted");
        }

        newProject.addEventListener("click", () => { // switching projects
            handleProjectClick(p.id);
        });

        projCont.appendChild(newProject);
    })
}

export function renderNotes() {

}