import { SET_NEW_CONTENT_AVAILABLE } from './config.mutations'

export default {
  setNewContentAvailable: ({ commit }, value) =>
    commit(SET_NEW_CONTENT_AVAILABLE, value),
  reloadApp: () => window.location.reload()
}
