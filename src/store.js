import Vue from 'vue'
import Vuex from 'vuex'
import global from './store/global/index'
import usuario from './store/usuario/index'
import eventos from './store/eventos/index'
import inscricao from './store/inscricao/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    global,
    usuario,
    eventos,
    inscricao
  },
  debug: true,
})
