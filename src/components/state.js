export const state = {
    projects:[],
    currentProjectId: null // required separately for one siurce of truth and less effort for UI operation
}

export function setCurrentProjectId (id) {
    state.currentProjectId = id;
}

export function getCurrentProjectId() {
    state.projects.find(prjct => prjct.id === state.currentProjectId);
}

