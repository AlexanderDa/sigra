<template>
  <div>
    <v-data-table
      :headers="headers"
      :search="search"
      :items="desserts"
      hide-default-footer
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>EMPRESA</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            solo
            append-icon="search"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn color="primary" dark icon @click="initialize()">
            <v-icon>refresh</v-icon>
          </v-btn>
          <v-btn color="primary" dark icon @click="dialog=!dialog">
            <v-icon>add</v-icon>
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
        <v-icon small @click="deleteItem(item)">delete</v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm8>
                <v-text-field v-model.trim="editedItem.name" label="Nombre"></v-text-field>
              </v-flex>
              <v-flex xs12 sm4>
                <v-text-field v-model.trim="editedItem.smallName" label="Nombre corto"></v-text-field>
              </v-flex>
              <v-flex xs8>
                <v-text-field v-model.trim="editedItem.email" label="Correo Electrónico"></v-text-field>
              </v-flex>
              <v-flex xs4>
                <v-text-field v-model.trim="editedItem.telephone" label="Teléfono"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model.trim="editedItem.address" label="Dirección"></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field v-model.trim="editedItem.contact" label="Contacto"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import CompanyView from './CompanyViewComponent'
export default CompanyView
</script>

<style lang="sass">
    @import "./CompanyView.sass";
</style>
