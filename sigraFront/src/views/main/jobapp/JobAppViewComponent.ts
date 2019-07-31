import Vue from 'vue'
import Component from 'vue-class-component'
import JobAppService from '@/service/JobAppService'
import swal from 'sweetalert'
import GraduateService from '@/service/GraduateService'
import AreaService from '@/service/AreaService'
import CompanyService from '@/service/CompanyService'
import DateWidget from '@/components/widget/date/DateWidget.vue'

@Component({
  name: 'JobAppView',
  components: { DateWidget }
})
export default class JobAppView extends Vue {
  public dialog: boolean = false;
  public search: string = '';
  public headers: any[] = [
    { text: 'Graduado', align: 'left', value: 'graduate.fullName' },
    { text: 'Fecha de vinculación', align: 'left', value: 'vinculationDate' },
    { text: 'Fecha de desvinculación', align: 'left', value: 'unlinkDate' },
    { text: 'Empresa', align: 'left', value: 'company.name' },
    { text: 'area', align: 'left', value: 'area.name' },
    { text: 'Actions', value: 'action', sortable: false }
  ]
  public desserts: any = []
  public graduates: any = []
  public companies: any = []
  public areas: any = []
  public editedIndex: number = -1
  public editedItem: any = {}
  public defaultItem: any = {}
  public created (): void {
    this.initialize()
  }

  // Methods

  public async initialize () {
    this.$store.commit('loaderStart')
    this.desserts = await new JobAppService().getAll().then((res: any) => res.data)
    this.graduates = await new GraduateService().getAll().then((res: any) => res.data)
    this.companies = await new CompanyService().getAll().then((res: any) => res.data)
    this.areas = await new AreaService().getAll().then((res: any) => res.data)
      .finally(() => { this.$store.commit('loaderFinish') })
    console.log(this.graduates)
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
          const service: JobAppService = new JobAppService()
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
    this.editedItem.graduate = this.editedItem.graduate.id
    this.editedItem.company = this.editedItem.company.id
    this.editedItem.area = this.editedItem.area.id

    const service: JobAppService = new JobAppService()
    if (this.editedIndex > -1) {
      service.put(this.editedItem.id, this.editedItem)
        .then((res: any) => {
          Object.assign(this.desserts[this.editedIndex], res.data.updatedJobApp)
        })
        .catch((err: any) => {
          console.log(err)
        })
    } else {
      service.post(this.editedItem)
        .then((res: any) => {
          this.desserts.push(res.data.newJobApp)
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
