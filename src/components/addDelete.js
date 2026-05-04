import { state, setCurrentProjectId, getCurrentProjectId } from "./state.js";

export function createProject(name) {
    return {
        id: crypto.randomUUID().slice(0, 7),
        name,
        notes: []
    }
}

export function addProject(name) {
    const project = createProject(name);
    state.projects.push(project);

    if (state.projects.length === 1) {
        setCurrentProjectId(project.id);
    }
}

export function deleteProject(id) {
    state.projects = state.projects.filter(p => p.id !== id); //creates new array without removed
    if (state.currentProjectId === id) { // checks if removed isCurrent 
        if (state.projects.length > 0) {
            state.currentProjectId = state.projects[0].id; // sets current to first item in array
        } else {
            state.currentProjectId = null;
        }
    }
}

export function createNote({ title, description = "", deadline = null,
    priority = false,
    complete = false }) { // factory for notes

    if (!title || title.trim() === "") {
        throw new Error("Title for Note is required!")
    }

    return {
        id: crypto.randomUUID().slice(0, 5),
        title: title.trim(),  //removes whitespaces, so title cant be only whitespace
        description,
        deadline,
        priority,
        complete
    }
}

export function addNote(title) {
    const note = createNote(title);
    // search for currentPorjectId and push into object of this id
}

export function deleteNote(id) {
}