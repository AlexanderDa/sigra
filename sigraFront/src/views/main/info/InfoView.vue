<template>
  <v-app id="inspire">
    <v-app-bar app color="primary" dark>
      <v-btn icon @click="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Información</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex text-center>
            <v-card v-for="(item,index) of authors" :key="index" max-width="500" class="mx-auto">
              <v-layout py-4 pl-4>
                <v-flex shrink>
                  <img
                    height="200"
                    width="200"
                    :src="item.image"
                  />
                </v-flex>
                <v-flex text-center>
                  <v-container grid-list-lg pa-0>
                    <v-layout column>
                      <v-flex>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title>
                              <strong>Facultad de Ingeniería</strong>
                            </v-list-item-title>
                            <v-list-item-title>Sistemas y computación</v-list-item-title>
                            <v-list-item-title>
                              <strong>{{item.lastName}}</strong>
                            </v-list-item-title>
                            <v-list-item-title>{{item.firstName}}</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="secondary" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import InfoView from "./InfoViewComponent";
export default InfoView;
</script>

<style lang="sass">
    @import "./InfoView.sass";
</style>
