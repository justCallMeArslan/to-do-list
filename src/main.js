import "./style.css";
import { state } from "./components/state.js";
import {toggleModal} from "./components/render.js";
import { addProject, deleteProject, addNote, deleteNote } from "./components/addDelete.js";


toggleModal();

// testing playground
addProject("A");
addProject("B");

console.log("projects:", state.projects);
console.log("active:", state.currentProjectId);
deleteProject(state.projects[0].id);
console.log("after projects:", state.projects);
console.log("after active:", state.currentProjectId);