export const state = {
    projects:[],
    currentProjectId: null
}

export function setCurrentProjectId () {
    state.currentProjectId = id;
}

export function getCurrentProjectId() {
    state.projects.find(prjct => prjct.id === state.currentProjectId);
}