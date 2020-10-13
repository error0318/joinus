import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        indexSearch: {
            province: '山西',
            address: '',
            startTime: '',
            endTime: '',
        }
    }
})

export default store;