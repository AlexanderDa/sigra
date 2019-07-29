<template>
  <div id="app">
    <v-app id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-content-center justify-center fill-height wrap>
            <v-flex xs12 subtitle-1 text-center mb-5>
              <h1>Sigra</h1>
            </v-flex>
            <v-flex xs6 mt-5>
              <v-progress-linear color="primary" indeterminate rounded height="6"></v-progress-linear>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class RootView extends Vue {
  private created (): void {
    if (localStorage.logged === 'true') {
      this.$router.push({ name: 'MainPage' })
    } else {
      this.$router.push({ name: 'LoginPage' })
    }
  }
}
</script>
