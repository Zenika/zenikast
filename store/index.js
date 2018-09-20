import Vuex from 'vuex'
import navigationDrawer from './modules/navigation-drawer'
import config from './modules/config'

const store = new Vuex.Store({
  modules: {
    navigationDrawer,
    config
  }
})

export default () => store
