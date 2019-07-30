import Vue from 'vue'
import Component from 'vue-class-component'
import Period from '@/views/main/period/PeriodView.vue'
import Faculty from '@/views/main/faculty/FacultyView.vue'
import Career from '@/views/main/career/CareerView.vue'

@Component({
  name: 'LoginPage',
  components: {
    Period,
    Faculty,
    Career
  }
})
export default class UniversityView extends Vue {
  public tab: string = 'tab-1';
}
