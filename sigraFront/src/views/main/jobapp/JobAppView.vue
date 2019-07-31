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
          <v-toolbar-title>TRABAJO</v-toolbar-title>
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
    <v-dialog v-model="dialog" max-width="500px">
      <form @submit.prevent="save()">
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6>
                  <DateWidget
                    v-model.trim="editedItem.vinculationDate"
                    :input="editedItem.vinculationDate"
                    label="Fecha de vinculación"
                  />
                </v-flex>
                <v-flex xs12 sm6>
                  <DateWidget
                    v-model.trim="editedItem.unlinkDate"
                    :input="editedItem.unlinkDate"
                    label="Fecha de desvinculación"
                  />
                </v-flex>
                <v-flex xs12>
                  <v-combobox
                    required
                    v-model.trim="editedItem.graduate"
                    :items="graduates"
                    :clearable="true"
                    item-text="fullName"
                    label="Graduado"
                  ></v-combobox>
                </v-flex>
                <v-flex xs12>
                  <v-combobox
                    required
                    v-model.trim="editedItem.company"
                    :items="companies"
                    :clearable="true"
                    item-text="name"
                    label="Empresa"
                  ></v-combobox>
                </v-flex>
                <v-flex xs12>
                  <v-combobox
                    required
                    v-model.trim="editedItem.area"
                    :items="areas"
                    :clearable="true"
                    item-text="name"
                    label="Area"
                  ></v-combobox>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" text type="submite">Save</v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import JobAppView from './JobAppViewComponent'
export default JobAppView
</script>

<style lang="sass">
    @import "./JobAppView.sass";
</style>
