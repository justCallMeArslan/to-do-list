export function toggleProjModal() {
    const addNoteBtn = document.querySelector(".add-proj-btn")
    const form = document.querySelector(".proj-cont");
    const modal = document.querySelector(".proj-dialog");
    const submitNoteBtn = document.querySelector(".submit-note");

    addNoteBtn.addEventListener("click", () => {
        modal.showModal();
    })
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        modal.close();
        form.reset();
    })

}

export function toggleNoteModal() {
    
}
