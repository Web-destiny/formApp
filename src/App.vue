<template>
  <!-- App.vue -->

  <v-app>
    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
    >
      <v-list>
        <v-list-item
          :to="link.url"
          v-for="link of links"
          :key="link.title"
        >
          <v-list-item-icon>
            <v-icon>
              {{ link.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="red lighten-1">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link
          to="/"
          tag="span"
          class="pointer"
        >formApp</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link of links"
          :key="link.title"
          :to="link.url"
          text
        >
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main class="grey darken-3">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        {title: 'home', icon: 'mdi-home-circle', url: '/'},
      ]
    }
  }
}
</script>

<style scoped>
.pointer{
  cursor: pointer;
}
</style>
