import "./style.css";
import { state } from "./components/state.js";
import {toggleModal} from "./components/render.js";
import { addProject } from "./components/addDelete.js";


toggleModal();
addProject("Work");
addProject("HOoohOOO")
console.log(state);
