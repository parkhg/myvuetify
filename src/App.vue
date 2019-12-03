<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer"
                         app
                         clipped
     >

      <v-list dense>
        <v-list-item
                v-for="item in items"
                :key="item.title"
                :to="item.to"
                link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
              app
              clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer != drawer" />
      <router-link :to="{name: 'home'}"><v-toolbar-title>idleCat</v-toolbar-title></router-link>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer app>
      <span>&copy; 2019 idleCat</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    drawer: null,
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: 'dashboard' },
      { title: 'Setting', icon: 'mdi-settings', to: 'setting' },
      { title: 'About', icon: 'mdi-help-box', to: 'about' },
    ],
  }),
  created () {
    this.$vuetify.theme.dark = true
  }
};
</script>

<style>
  router-link{
    text-decoration: none;
  }
  router-link a{
    text-decoration: none;
  }
</style>

<!--


<v-list dense>
  <v-list-item link>
    <v-list-item-action><v-icon>mdi-view-dashboard</v-icon></v-list-item-action>
    <v-list-item-content>
      <router-link :to="{name: 'vwDashboard'}"><v-list-item-title>Dashboard</v-list-item-title></router-link>
    </v-list-item-content>
  </v-list-item>

  <v-list-item link>
    <v-list-item-action><v-icon>mdi-settings</v-icon></v-list-item-action>
    <v-list-item-content>
      <router-link :to="{name: 'vwSetting'}"><v-list-item-title>Settings</v-list-item-title></router-link>
    </v-list-item-content>
  </v-list-item>

  <v-list-item link>
    <v-list-item-action><v-icon>mdi-help-box</v-icon></v-list-item-action>
    <v-list-item-content>
      <router-link :to="{name: 'vwAbout'}"><v-list-item-title>About</v-list-item-title></router-link>
    </v-list-item-content>
  </v-list-item>
</v-list>
-->
