import { state, setCurrentProjectId, getCurrentProject } from "./state.js";

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

export function addNote(noteData) {
    const current = getCurrentProject(); //stored for easier validation
    if (!current) {
        console.warn("No active projects");
        return; // stop execution
    }
    if (!Array.isArray(current.notes)) { // validation to make sure (arg) is array
        console.warn("Notes is not an Array. Ressetting required.");
        current.notes = []; // if data corrupted or wrong type , reset to array
    }

    const note = createNote(noteData);
    current.notes.push(note);
}

export function deleteNote(id) {
    const current = getCurrentProject();

    if (!current) {
        console.warn("No active projects");
        return; // stops execution 
    }

    current.notes = current.notes.filter(n => n.id !== id);
}


export function toggleCompleted(id) {
    const currentProject = getCurrentProject();
    const note = currentProject.notes.find(n => n.id === id);
    if (!note) return;

    note.complete = !note.complete;
}