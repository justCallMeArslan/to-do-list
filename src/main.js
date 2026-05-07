import "./style.css";
import { setCurrentProjectId, state } from "./components/state.js";
import {
    bindProjModal, bindNoteModal, updateNoteBtnState, renderProjects, renderNotes
} from "./components/ui.js";
import { addProject, deleteProject, addNote, deleteNote } from "./components/appLogic.js";


bindProjModal(handleProjBind);
renderApp();

function renderApp() {
    renderProjects(handleProjectClick, handleProjRemoval);
    renderNotes();
    updateNoteBtnState();
}

renderApp();

function handleProjBind(projectName) {
    addProject(projectName);
    renderApp();
}

function handleNoteBind(noteData) {
    addNote(noteData);
    renderApp();
}

function handleProjRemoval(id) {
    deleteProject(id);
    renderApp();
}

function handleProjectClick(id) {
    setCurrentProjectId(id);
    renderApp()
}

