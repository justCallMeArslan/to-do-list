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

