import { state, setCurrentProjectId, getCurrentProject } from "./state.js";
import { format } from "date-fns";

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
            title: noteTitle.value.trim(),
            description: noteDescr.value.trim(),
            deadline: noteDeadline.value,
            priority: notePriority.checked,
            complete: false
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
        newProject.classList.add("title");
        const removeProjBtn = document.createElement("button");
        removeProjBtn.textContent = "x";
        removeProjBtn.classList.add("remove-proj-btn");
        removeProjBtn.addEventListener("click", () => {
            handleProjRemoval(p.id);
        })

        if (p.id === state.currentProjectId) { // highlights current project
            newProject.classList.add("highlighted");
        }

        newProject.addEventListener("click", () => { // switching projects
            handleProjectClick(p.id);
        });

        projectBox.append(newProject, removeProjBtn);
        projCont.appendChild(projectBox);
    })
}

export function renderNotes(handleNoteRemoval, handleToggleComplete) {
    const noteCont = document.querySelector(".render-note-cont");
    noteCont.innerHTML = "";
    const currentProj = getCurrentProject();
    if (!currentProj) {
        return
    };
    currentProj.notes.forEach(n => {
        const noteBox = document.createElement("article");
        noteBox.classList.add("new-note-cont");
        const newTitle = document.createElement("p");
        newTitle.textContent = n.title;
        newTitle.classList.add("title");
        const newDescr = document.createElement("p");
        newDescr.textContent = n.description;
        newDescr.classList.add("description");
        const newDeadline = document.createElement("p");
        newDeadline.textContent = `Due: ${format(new Date(n.deadline), "dd MMM yyyy")}`;
        newDeadline.classList.add("deadline");
        const labelComplete = document.createElement("label");
        labelComplete.classList.add("labelComplete");
        const labelText = document.createTextNode("Is task completed?");
        const complete = document.createElement("input");
        complete.type = "checkbox";
        complete.checked = n.complete;
        complete.addEventListener("change", () => {
            handleToggleComplete(n.id)
        })

        labelComplete.append(labelText, complete);
 

        if (n.priority) {
            noteBox.classList.add("priority")
        }

        if (n.complete) {
            noteBox.classList.add("complete")
        }

        const removeNoteBtn = document.createElement("button");
        removeNoteBtn.textContent = "X";
        removeNoteBtn.classList.add("remove-note-btn");
        removeNoteBtn.addEventListener("click", () => {
            handleNoteRemoval(n.id);
        })

        noteBox.append(newTitle, newDescr, newDeadline, labelComplete, removeNoteBtn);
        noteCont.appendChild(noteBox);

    })
}


export function updateNoteBtnState() {
    const addNoteBtn = document.querySelector(".add-note-btn");
    addNoteBtn.disabled = !state.currentProjectId; // if no projects - button disabled
}