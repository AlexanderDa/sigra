import Vue from 'vue'
import Component from 'vue-class-component'
import PeriodService from '@/service/PeriodService';
import swal from 'sweetalert'

@Component({ name: 'PeriodView' })
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
    fullDate: '',
  }
  public defaultItem: any = {
    startDate: '',
    finishDate: '',
    fullDate: '',
  }
  public created(): void {
    this.initialize();
  }

  // Methods

  public initialize(): void {
    const service: PeriodService = new PeriodService();
    service.getAll()
      .then((res: any) => {
        this.desserts = res.data
      })
      .catch((err: any) => {
        console.log(err)
      })

  }
  public editItem(item: any): void {
    this.editedIndex = this.desserts.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialog = true
  }

  public deleteItem(item: any): void {
    const index = this.desserts.indexOf(item)
    const swalConf: any = {
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no podrá recuperar este registro!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }
    swal(swalConf)
      .then((willDelete) => {
        if (willDelete) {
          const service: PeriodService = new PeriodService();
          service.remove(item.id)
            .then((res: any) => {
              if (res.data.deleted === true) {
                this.desserts.splice(index, 1)
              }
            })
        }
      });
  }

  public close(): void {
    this.dialog = false
    setTimeout(() => {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
    }, 300)
  }

  public save(): void {
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
  public get formTitle(): string {
    return this.editedIndex === -1 ? 'Nuevo' : 'Editar'
  }

}
