const state = {
    modal:false,
    isLogin:false,
    isRegister:false,
}

const mutations = {
    LOGIN_MODAL (state) {
        state.modal = true,
        state.isLogin = true
    },

    REGISTER_MODAL (state) {
        state.modal = true,
        state.isRegister = true
    }

}

const frontModule = {
    state,
    mutations
}

export default frontModule