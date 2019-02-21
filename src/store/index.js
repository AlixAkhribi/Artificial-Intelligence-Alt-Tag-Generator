import Vuex from 'vuex';
import Vue from 'vue';

import image from './modules/image'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        image
    }
})