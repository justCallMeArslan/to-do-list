import { da } from "date-fns/locale";

export const state = {
    projects:[],
    currentProjectId: null // required separately for one source of truth and 
    // less effort for UI operation
}

export function setCurrentProjectId (id) {
    state.currentProjectId = id;
}

export function getCurrentProject() {
   return state.projects.find(prjct => prjct.id === state.currentProjectId);
}

const STORAGE_KEY = "to-do-app-state"; 

export function saveState() { 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); // converts state obj into 
    // string and saves it in localStorage
}

export function loadState () { 
    const data = localStorage.getItem(STORAGE_KEY); // retrieves saved string 
    // from localStorage using key

    if (!data) return;

    const parsedData = JSON.parse(data); 

    state.projects = parsedData.projects || [];  // use saved in localStorage projects,
    // if not - empty array (defedsive mechanism/fallback);
    state.currentProjectId = parsedData.currentProjectId || null; 
}