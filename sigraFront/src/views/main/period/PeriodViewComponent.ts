import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import PeriodService from '@/service/PeriodService'
import swal from 'sweetalert'
import DateWidget from '@/components/widget/date/DateWidget.vue'
@Component({ name: 'PeriodView', components: { DateWidget } })
export default class PeriodView extends Vue {
  public dialog: boolean = false;
  public search: string = '';

  public headers: any[] = [
    { text: 'Fecha de Inicio', align: 'left', value: 'startDate' },
    { text: 'Fecha de Cierre', align: 'left', value: 'finishDate' },
    { text: 'Periodo', align: 'left', value: 'fullDate' },
    { text: 'Actions', value: 'action', sortable: false }
  ]
  public desserts: any = []
  public editedIndex: number = -1
  public editedItem: any = {
    startDate: '',
    finishDate: '',
    fullDate: ''
  }
  public defaultItem: any = {
    startDate: '',
    finishDate: '',
    fullDate: ''
  }
  public created (): void {
    this.initialize()
  }

  // Methods

  public initialize (): void {
    const service: PeriodService = new PeriodService()
    this.$store.commit('loaderStart')
    service.getAll()
      .then((res: any) => {
        this.desserts = res.data
      })
      .catch((err: any) => {
        console.log(err)
      })
      .finally(() => { this.$store.commit('loaderFinish') })
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
          const service: PeriodService = new PeriodService()
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
    const service: PeriodService = new PeriodService()
    if (this.editedIndex > -1) {
      service.put(this.editedItem.id, this.editedItem)
        .then((res: any) => {
          Object.assign(this.desserts[this.editedIndex], res.data.updatedPeriod)
          this.initialize()
        })
        .catch((err: any) => {
          console.log(err)
        })
    } else {
      service.post(this.editedItem)
        .then((res: any) => {
          this.desserts.push(res.data.newPeriod)
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

  // Watch
  @Watch('editedItem.startDate')
  public onStartDateChange () { this.fullDateFormat() }
  @Watch('editedItem.finishDate')
  public ooFinishDateChange () { this.fullDateFormat() }

  public fullDateFormat () {
    let date: string = ''

    date = `${this.getMonth(Number(this.editedItem.startDate.substring(5, 7)))} ${this.editedItem.startDate.substring(0, 4)}`

    date = (this.editedItem.startDate !== '' && this.editedItem.finishDate !== '')
      ? `${date} - `
      : date

    date = date + `${this.getMonth(Number(this.editedItem.finishDate.substring(5, 7)))} ${this.editedItem.finishDate.substring(0, 4)}`

    this.editedItem.fullDate = date
  }

  private getMonth (value: number): string {
    let month: string = ''
    switch (value) {
      case 1: month = 'ENERO'; break
      case 2: month = 'FEBRERO'; break
      case 3: month = 'MARZO'; break
      case 4: month = 'ABRIL'; break
      case 5: month = 'MAYO'; break
      case 6: month = 'JUNIO'; break
      case 7: month = 'JULIO'; break
      case 8: month = 'AGOSTO'; break
      case 9: month = 'SEPTIEMBRE'; break
      case 10: month = 'OCTUBRE'; break
      case 11: month = 'NOVIEMBRE'; break
      case 12: month = 'DICIEMBRE'; break
    }
    return month
  }
}
