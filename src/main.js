import "./style.css";
import { setCurrentProjectId, state } from "./components/state.js";
import {
    bindProjModal, bindNoteModal, updateNoteBtnState, renderProjects, renderNotes
} from "./components/ui.js";
import { addProject, deleteProject, addNote, deleteNote } from "./components/appLogic.js";

function renderApp() {
    renderProjects(handleProjectClick);
    renderNotes();
    updateNoteBtnState();
}

function handleProjectClick(id) {
    setCurrentProjectId(id);
    renderApp()
}

function handleProjBind (projectName) {
    addProject(projectName);
    renderApp();
}