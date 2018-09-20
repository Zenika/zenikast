export const SET_NEW_CONTENT_AVAILABLE = 'SET NEW CONTENT AVAILABLE'

export default {
  [SET_NEW_CONTENT_AVAILABLE]: (state, value) =>
    (state.newContentAvailable = value)
}
