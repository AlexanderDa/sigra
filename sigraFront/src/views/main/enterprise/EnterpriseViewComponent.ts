import Vue from 'vue'
import Component from 'vue-class-component'
import Area from '@/views/main/area/AreaView.vue'
import Company from '@/views/main/company/CompanyView.vue'
import JobApp from '@/views/main/jobapp/JobAppView.vue'

@Component({
  name: 'EnterprisePage',
  components: {
    Area,
    Company,
    JobApp
  }
})
export default class EnterpriseView extends Vue {
  public tab: string = 'tab-1';
}
