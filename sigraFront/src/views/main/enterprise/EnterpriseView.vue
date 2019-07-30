<template>
  <div>
    <v-tabs v-model="tab" centered background-color="primary">
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">Empresa</v-tab>

      <v-tab href="#tab-2">Aplicacción Laboral</v-tab>

      <v-tab href="#tab-3">Aréa</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-1">
        
      </v-tab-item>
      <v-tab-item value="tab-2">
        
      </v-tab-item>
      <v-tab-item value="tab-3">
        <Area/>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script lang="ts">
import EnterpriseView from "./EnterpriseViewComponent";
export default EnterpriseView;
</script>

<style lang="sass">
    @import "./EnterpriseView.sass";
</style>
