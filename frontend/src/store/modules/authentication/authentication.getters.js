export default {
  providerData: state => (state.user ? state.user.providerData[0] : null)
};
