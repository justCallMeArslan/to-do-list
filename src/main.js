import "./style.css";
import { setCurrentProjectId, state, loadState } from "./components/state.js";
import {
    bindProjModal, bindNoteModal, updateNoteBtnState, renderProjects, renderNotes
} from "./components/ui.js";
import { addProject, deleteProject, addNote, deleteNote, toggleCompleted} from "./components/appLogic.js";


bindProjModal(handleProjBind);
bindNoteModal(handleNoteBind);
loadState();
renderApp();

function renderApp() {
    renderProjects(handleProjectClick, handleProjRemoval);
    renderNotes(handleNoteRemoval, handleToggleComplete);
    updateNoteBtnState();
}

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

function handleNoteRemoval(id){
    deleteNote(id);
    renderApp();
}

function handleProjectClick(id) {
    setCurrentProjectId(id);
    renderApp()
}

function handleToggleComplete (id) {
    toggleCompleted(id);
    renderApp();
}
