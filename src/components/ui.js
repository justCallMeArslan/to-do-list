import { state, setCurrentProjectId, getCurrentProject } from "./state.js";

export function bindProjModal(handleProjBind) { // 
    const addProjBtn = document.querySelector(".add-proj-btn");
    const form = document.querySelector(".proj-cont");
    const modal = document.querySelector(".proj-dialog");

    addProjBtn.addEventListener("click", () => {
        modal.showModal();
    })
    form.addEventListener("submit", (e) => { // on submit it provides data 
        e.preventDefault();
        const input = form.querySelector("#form-proj-name"); // getting user input value
        const projectName = input.value.trim();
        handleProjBind(projectName);
        modal.close();
        form.reset();
    })
}

export function bindNoteModal(handleNoteBind) {  // provides data on submit
    const addNoteBtn = document.querySelector(".add-note-btn")
    const form = document.querySelector(".note-cont");
    const modal = document.querySelector(".note-dialog");

    addNoteBtn.addEventListener("click", () => {
        modal.showModal();
    })
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const noteTitle = form.querySelector("#form-title");
        const noteDescr = form.querySelector("#form-description");
        const noteDeadline = form.querySelector("#form-deadline");
        const notePriority = form.querySelector("#priority");

        const noteData = {
            title: noteTitle.value,
            description: noteDescr.value,
            deadline: noteDeadline.value,
            priority: notePriority.checked
        }

        handleNoteBind(noteData);

        modal.close();
        form.reset();
    })
}




export function renderProjects(handleProjectClick, handleProjRemoval) {
    const projCont = document.querySelector(".project-cont"); // placed out of loop, 
    // to prevent multiple query
    projCont.innerHTML = "";
    state.projects.forEach(p => {
        const projectBox = document.createElement("div");
        projectBox.classList.add("new-proj-cont");
        const newProject = document.createElement("p");
        newProject.textContent = p.name;

        const removeProjBtn = document.createElement("button");
        removeProjBtn.textContent = "X";
        removeProjBtn.classList.add("remove-proj-btn");
        removeProjBtn.addEventListener("click", () => {
            handleProjRemoval(p.id);
        })

        if (p.id === state.currentProjectId) { // highlighting current project
            newProject.classList.add("highlighted");
        }

        newProject.addEventListener("click", () => { // switching projects
            handleProjectClick(p.id);
        });

        projectBox.append(newProject, removeProjBtn);
        projCont.appendChild(projectBox);
    })
}

export function renderNotes() {

}


export function updateNoteBtnState() { 
    const addNoteBtn = document.querySelector(".add-note-btn");
    addNoteBtn.disabled = !state.currentProjectId; // if no projects - button disabled
}