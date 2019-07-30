import Vue from 'vue'
import Component from 'vue-class-component'
import Area from '@/views/main/area/AreaView.vue'

@Component({
  name: 'EnterprisePage',
  components: {
    Area
  }
})
export default class EnterpriseView extends Vue {
  public tab: string = 'tab-1';
}
