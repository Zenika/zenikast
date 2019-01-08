<template>
  <v-toolbar class="toolbar" dark :color="networkOnLine ? 'primary': 'secondary'" app>
    <router-link class="logo-wrapper" to="/podcasts">
      <img alt="Logo" class="logo" src="@/assets/logo.png">
    </router-link>
    <v-toolbar-title class="toolbar-title">
      <router-link class="clean-link" to="/podcasts">
        {{ appTitle }}
      </router-link>
    </v-toolbar-title>
    <v-chip class="offline-chip" v-if="!networkOnLine" label small outline color="white">Hors ligne</v-chip>

    <template v-if="userInfos">
      <v-spacer></v-spacer>
      <v-menu class="menu" offset-y>
        <v-avatar slot="activator" size="36px">
          <img :src="userInfos.photoURL" alt="Avatar">
        </v-avatar>
        <v-list class="menu-list ">
          <v-list-tile to="/user">
            <v-list-tile-title>Mon profil</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="logout">
            <v-list-tile-title>Déconnexion</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </template>

    <template v-else>
      <v-spacer></v-spacer>
      <router-link class="clean-link" to="/login">
        <span>Connexion</span>
      </router-link>
    </template>
  </v-toolbar>
</template>

<script>
import firebase from 'firebase/app';
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('config', ['appTitle', 'networkOnLine']),
    ...mapState('authentication', ['userInfos']),
    ...mapActions('authentication', { userLogout: 'logout' })
  },
  methods: {
    logout() {
      firebase.auth().signOut();
      this.userLogout;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.toolbar /deep/ {
  .logo-wrapper {
    height: 70%;
    margin-right: 10px;
    display: block;

    .logo {
      height: 100%;
    }
  }

  .clean-link {
    color: #fff;
    text-decoration: none;
  }

  .v-toolbar__content {
    height: $bar-height !important;
  }

  .toolbar-title {
    margin: 0;

    @media screen and (max-width: 600px) {
      font-size: 17px;
    }
  }

  .offline-chip {
    color: white;

    .v-chip__content {
      padding: 0 6px;
    }
  }
}

.menu {
  margin-left: 10px;

  .menu-list {
    padding: 0 !important;
    cursor: pointer;
  }
}
</style>
