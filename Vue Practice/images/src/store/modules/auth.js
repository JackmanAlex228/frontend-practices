/**
 * Auth Module Design
 *   State:
 *     token
 *     null
 *   Getters:
 *     isLoggedIn (look at value of 'token' in state object)
 *   Mutations:
 *     setToken
 *   Actions:
 *     finalizeLogin (call setToken, update token)
 *     logout (call setToken, set it to null)
 *     login
 * 
 * Client ID: f82505ee0d28697
 * Client secret: 60818aa7079fad7583b6372d8c06f419e0ac03f1
 */

const state = {
    token: null
};

const getters = {
    isLoggedIn: state => !!state.token
};

const actions = {
    logout: ({ commit }) => {
        commit('setToken', null);
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};