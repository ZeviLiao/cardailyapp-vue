<template>
  <div>
    <v-toolbar color="blue-grey" dark fixed app clipped-right>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer fixed v-model="drawer" app :width="drawerWidth">
      <v-list dense>
        <v-list-tile @click.stop="left = !left">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title @click="drawer = !drawer">Close</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid fill-height>
        <router-view/>
      </v-container>
    </v-content>
    <v-bottom-nav :active.sync="activeNavIdx" :value="true" app fixed height="60">
      <v-btn color="teal" :to="{ name: 'home' }">
        <span>Recents</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn color="teal">
        <span>Recents</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn color="teal">
        <span>Recents</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn color="teal">
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn color="teal">
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeNavIdx: 0,
      drawer: false,
      drawerWidth: window.innerWidth,
      left: null
    }
  }
}
</script>

<style lang="scss" module>

</style>
