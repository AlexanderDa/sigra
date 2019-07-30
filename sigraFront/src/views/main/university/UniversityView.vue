<template>
  <div>
    <v-tabs v-model="tab" centered background-color="primary">
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">Periodo Académico</v-tab>

      <v-tab href="#tab-2">Facultad</v-tab>

      <v-tab href="#tab-3">Carrera</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-1"><Period/></v-tab-item>
      <v-tab-item value="tab-2"><Faculty/></v-tab-item>
      <v-tab-item value="tab-3"><Career/></v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script lang="ts">
import UniversityView from "./UniversityViewComponent";
export default UniversityView;
</script>

<style lang="sass">
    @import "./UniversityView.sass";
</style>
