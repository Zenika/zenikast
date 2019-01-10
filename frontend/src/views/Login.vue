<template>
  <div class="wrapper">
    <img alt="Logo" v-show="userInfos !== undefined && !isUserLoggedIn" class="logo-img" src="@/assets/logo-title.png" />

    <!-- Loader -->
    <div v-if="userInfos === undefined">
      <v-progress-circular :size="60" color="primary" indeterminate></v-progress-circular>
    </div>

    <!-- Auth UI -->
    <div v-show="userInfos !== undefined && !isUserLoggedIn" id="firebaseui-auth-container"></div>

    <!-- Already logged in message -->
    <div class="wrapper" v-show="isUserLoggedIn">
      <h2>Vous êtes déjà connecté.</h2>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import firebase from 'firebase/app';
import firebaseui from 'firebaseui';

export default {
  computed: {
    ...mapState('authentication', ['userInfos']),
    ...mapGetters('authentication', ['isUserLoggedIn'])
  },
  mounted() {
    this.initFirebaseUI();
  },
  methods: {
    initFirebaseUI() {
      const uiInstance = firebaseui.auth.AuthUI.getInstance();
      const ui = uiInstance
        ? uiInstance
        : new firebaseui.auth.AuthUI(firebase.auth());
      ui.start('#firebaseui-auth-container', {
        signInFlow: 'popup',
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
        signInSuccessUrl: '/#/podcasts'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~firebaseui/dist/firebaseui.css';

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .logo-img {
    max-height: 250px;
  }

  #firebaseui-auth-container /deep/ {
    padding-top: 30px;
    height: 100%;
    width: 100%;
  }
}
</style>
