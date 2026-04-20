export function toggleModal() {
    const addNoteBtn = document.querySelector(".add-btn")
    const form = document.querySelector(".form-container");
    const modal = document.querySelector (".dialog");
    const submitNoteBtn = document.querySelector(".submit-note");

    addNoteBtn.addEventListener("click", ()=> {
        modal.showModal();
    })
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        modal.close();
        form.reset();
    })

}

