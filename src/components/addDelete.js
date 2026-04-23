import { state, setCurrentProjectId, getCurrentProjectId } from "./state.js";

export function createProject(name) {
    return {
        id: crypto.randomUUID().slice(0, 10),
        name: name,
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
            state.currentProjectId = state.projects[0].id; // sets Current to first item in array
        } else {
            state.currentProjectId = null;
        }
    }
}



export function createNote (tile) {
    return {

    }
}


export function addNote(title) {

}

export function deleteNote(id) {
    
}