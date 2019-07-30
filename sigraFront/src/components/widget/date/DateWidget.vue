<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
    :return-value.sync="date"
    persistent
    full-width
    width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field v-model="date" :label="label" readonly v-on="on"></v-text-field>
    </template>
    <v-date-picker v-model="date" scrollable locale="es-mx">
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
    </v-date-picker>
  </v-dialog>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Emit, Prop, Watch } from 'vue-property-decorator'

@Component({ name: 'widget-date' })
export default class DateWidget extends Vue {
  @Prop({ default: 'Fecha' }) public label!: string;
  @Prop() public input!: string;

  public modal: boolean = false;
  public date: any = '';

  public created (): void {
    this.date = this.input
  }
  @Watch('date')
  public listenerDate (newValue: any): void {
    if (newValue !== null || newValue !== undefined) {
      this.returnDate()
    }
  }

  public returnDate (): void {
    this.$emit('input', this.date)
  }
}
</script>
