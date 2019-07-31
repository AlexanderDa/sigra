import Vue from 'vue'
import Component from 'vue-class-component'
import GraduateCarrerService from '@/service/GraduateCarrerService'
import swal from 'sweetalert'
import DateWidget from '@/components/widget/date/DateWidget.vue'
import FacultyService from '@/service/FacultyService'
import PeriodService from '@/service/PeriodService'
import CareerService from '@/service/CareerService'
import GraduateService from '@/service/GraduateService'

import GraduateReport from '@/components/widget/report/GraduateReportWidget.vue'

@Component({
  name: 'GraduateCarrerView',
  components: {
    DateWidget,
    GraduateReport
  }
})
export default class GraduateCarrerView extends Vue {
  public dialog: boolean = false;
  public search: string = '';
  public headers: any[] = [
    { text: 'Graduado', align: 'left', value: 'graduated.fullName' },
    { text: 'Fecha de graduación', align: 'left', value: 'graduationDate' },
    { text: 'Facultad', align: 'left', value: 'faculty.name' },
    { text: 'Carrera', align: 'left', value: 'career.name' },
    { text: 'Puntaje', align: 'left', value: 'gradeScore' },
    { text: 'Actions', value: 'action', sortable: false }
  ]
  public desserts: any = []
  public graduates: any = []
  public faculties: any = []
  public careers: any = []
  public periods: any = []
  public editedIndex: number = -1
  public editedItem: any = {}
  public defaultItem: any = {}
  public created (): void {
    this.initialize()
  }

  // Methods

  public async initialize () {
    this.$store.commit('loaderStart')
    this.desserts = await new GraduateCarrerService().getAll().then((res: any) => res.data)
    this.graduates = await new GraduateService().getAll().then((res: any) => res.data)
    this.faculties = await new FacultyService().getAll().then((res: any) => res.data)
    this.careers = await new CareerService().getAll().then((res: any) => res.data)
    this.periods = await new PeriodService().getAll().then((res: any) => res.data)
    this.$store.commit('loaderFinish')
  }

  public editItem (item: any): void {
    this.editedIndex = this.desserts.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialog = true
  }

  public deleteItem (item: any): void {
    const index = this.desserts.indexOf(item)
    const swalConf: any = {
      title: '¿Estás seguro?',
      text: 'Una vez eliminado, no podrá recuperar este registro!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }
    swal(swalConf)
      .then((willDelete) => {
        if (willDelete) {
          const service: GraduateCarrerService = new GraduateCarrerService()
          service.remove(item.id)
            .then((res: any) => {
              if (res.data.deleted === true) {
                this.desserts.splice(index, 1)
              }
            })
        }
      })
  }

  public close (): void {
    this.dialog = false
    setTimeout(() => {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
    }, 300)
  }

  public save (): void {
    if (this.editedItem.graduated !== undefined) { this.editedItem.graduated = this.editedItem.graduated.id }
    if (this.editedItem.academicPeriod !== undefined) { this.editedItem.academicPeriod = this.editedItem.academicPeriod.id }
    if (this.editedItem.faculty !== undefined) { this.editedItem.faculty = this.editedItem.faculty.id }
    if (this.editedItem.career !== undefined) { this.editedItem.career = this.editedItem.career.id }

    this.editedItem.gradeScore = Number(this.editedItem.gradeScore)
    const service: GraduateCarrerService = new GraduateCarrerService()
    if (this.editedIndex > -1) {
      service.put(this.editedItem.id, this.editedItem)
        .then((res: any) => {
          this.initialize()
        })
        .catch((err: any) => {
          console.log(err)
        })
    } else {
      console.log(this.editedItem)
      service.post(this.editedItem)
        .then((res: any) => {
          this.initialize()
        })
        .catch((err: any) => {
          console.log(err)
        })
    }
    this.close()
  }

  // Computed
  public get formTitle (): string {
    return this.editedIndex === -1 ? 'Nuevo' : 'Editar'
  }
}
