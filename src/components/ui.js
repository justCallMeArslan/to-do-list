import { state, setCurrentProjectId, getCurrentProject } from "./state.js";
import { createProject, createNote } from "./appLogic.js";

export function toggleProjModal() {
    const addProjBtn = document.querySelector(".add-proj-btn");
    const form = document.querySelector(".proj-cont");
    const modal = document.querySelector(".proj-dialog");

    addProjBtn.addEventListener("click", () => {
        modal.showModal();
    })
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        modal.close();
        form.reset();
    })
}

export function toggleNoteModal() {
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


export function toggleAddNoteBtn() {
    const addNoteBtn = document.querySelector(".add-note-btn");
    addNoteBtn.disabled = !state.currentProjectId; // if no projects - button disabled
}

export function renderProjects() {
    const projCont = document.querySelector(".project-cont"); // placed out of loop, 
    // to prevent multiple query
    projCont.innerHTML = "";
    state.projects.forEach(p => {
        const newProject = document.createElement("h3");
        newProject.textContent = p.name;

        projCont.appendChild(newProject);
    })
}

export function renderNotes() {

}