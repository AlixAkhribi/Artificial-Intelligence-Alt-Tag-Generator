import api from '../../api/computerVision';

const state = {
    imageDescription: "",
    imageTags: [],
    imageURL: "",
};

const getters = {
    allImageData: (state) => ({...state}),
};

const actions = {
    caputreImageURL: ({commit}, event) => {
        commit('setImageURL', event.target.value)
    }
};

const mutations = {
    setImageURL: (state, url) => state.imageURL = url
};

export default {
    state,
    getters,
    actions,
    mutations
};