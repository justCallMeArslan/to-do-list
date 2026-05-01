import "./style.css";
import { state } from "./components/state.js";
import {toggleProjModal, toggleNoteModal, toggleAddNoteBtn} from "./components/render.js";
import { addProject, deleteProject, addNote, deleteNote } from "./components/addDelete.js";


toggleProjModal();
toggleNoteModal();

// testing playground
addProject("Work");
addProject("Bork");
toggleAddNoteBtn();

console.log("projects:", state.projects);
console.log("active:", state.currentProjectId);
deleteProject(state.projects[0].id);
console.log("after projects:", state.projects);
console.log("after active:", state.currentProjectId);