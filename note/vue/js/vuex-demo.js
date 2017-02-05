
const state = {
    count: 0
};

const mutations = {
    INCREMENT (state) {
        state.count++
    }
};

export default new Vuex.Store({
    state,
    mutations
})