import { state, setCurrentProjectId, getCurrentProjectId } from "./state.js";

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


export function toggleAddNoteBtn () {

    const addNoteBtn = document.querySelector(".add-note-btn");
    addNoteBtn.disabled = !state.currentProjectId; // if no projects - button disabled

} 