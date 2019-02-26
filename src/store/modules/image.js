import api from '../../api/computerVision';

const state = {
    imageDescription: "",
    imageTags: null,
    imageURL: "",
    isBwImg: null,
};

const getters = {
    allImageData: (state) => {
        if(state.isBwImg){
            return{
                ...state,
                imageDescription: `Black and White image of ${state.imageDescription}`
            }
        } else{
            return{
                ...state
            }
        }
    },
};

const actions = {
    caputreImageURL: ({ commit }, event) => {
        commit('setImageURL', event.target.value)
    },

    // Function takes the URL from state and makes POST request to API
    async sendImageURL({ rootState, commit }, event) {
        event.preventDefault();

        const { imageURL } = rootState.image;
        let response = await api.sendImageToAnalyze(imageURL);
        
        commit('setImageData', response);
    }
};

const mutations = {
    setImageURL: (state, url) => state.imageURL = url,

    // setImageData takes in image data object and sets the properties to state. Does not set URL
    setImageData: (state, response) => {
        state =  Object.assign(state, {
            ...response
        })
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};