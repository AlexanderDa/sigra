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
          <v-toolbar-title>EGRESADOS</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field
            required
            v-model="search"
            solo
            append-icon="search"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
          <v-spacer></v-spacer>
          <GraduateReport :faculties="faculties" :careers="careers" :graduates="desserts" />
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
    <v-dialog required v-model="dialog" max-width="850px">
      <form @submit.prevent="save()">
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <DateWidget
                    required
                    :input="editedItem.careerStartDate"
                    v-model.trim="editedItem.careerStartDate"
                    label="Fecha de inicio de carrera"
                  />
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <DateWidget
                    required
                    :input="editedItem.careerFinishDate"
                    v-model.trim="editedItem.careerFinishDate"
                    label="Fecha de fin de carrera"
                  />
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <DateWidget
                    required
                    :input="editedItem.graduationDate"
                    v-model.trim="editedItem.graduationDate"
                    label="Fecha de graduación"
                  />
                </v-flex>
                <v-flex xs12>
                  <v-combobox
                    required
                    v-model.trim="editedItem.graduated"
                    :items="graduates"
                    :clearable="true"
                    item-text="fullName"
                    label="Graduado"
                  ></v-combobox>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    required
                    v-model.trim="editedItem.gradeScore"
                    type="number"
                    label="Puntaje"
                    min="0"
                    max="10"
                    step=".01"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field v-model.trim="editedItem.senescytRecord" label="Senecyt"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-combobox
                    required
                    v-model.trim="editedItem.academicPeriod"
                    :items="periods"
                    clearable
                    item-text="fullDate"
                    label="Periodo Académico"
                  ></v-combobox>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-combobox
                    required
                    v-model.trim="editedItem.faculty"
                    :items="faculties"
                    :clearable="true"
                    item-text="name"
                    label="Facultad"
                  ></v-combobox>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-combobox
                    required
                    v-model.trim="editedItem.career"
                    :items="careers"
                    clearable
                    item-text="name"
                    label="Carrera"
                  ></v-combobox>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
            <v-btn color="primary" type="submit">Save</v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import GraduateCarrerView from "./GraduateCarrerViewComponent";
export default GraduateCarrerView;
</script>

<style lang="sass">
    @import "./GraduateCarrerView.sass";
</style>
