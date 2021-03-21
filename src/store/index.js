import { createStore } from 'vuex'
import frontModule from './modules/front'

export default createStore ({
    state:{
        modal:false,
        isLogin:false,
        isRegister:false,
    },
    modules: {
        frontModule
    }
})