export const state = () => ({ 
    authenticated: window.localStorage.getItem("authenticated")==="true" || false,
});

export const mutations = {
    SET_AUTHENTICATION(state, task){
        window.localStorage.setItem("authenticated", task);
        state.authenticated = task;
    },
}