const state = {
    orientation: 'unknown',
};
  
const mutations = {
    setOrientation (state, val) {
        state.orientation = val;
    }
};

const actions = {
    setOrientation: ({commit}) => commit('decrement'),
};

export default {
    namespaced: true,

    state,
    mutations,
    actions,
};