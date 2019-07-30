import Vue from 'vue'
import Component from 'vue-class-component'
import CareerService from '@/service/CareerService'
import swal from 'sweetalert'

@Component({ name: 'CareerView' })
export default class CareerView extends Vue {
  public dialog: boolean = false;
  public search: string = '';
  public headers: any[] = [
    { text: 'Nombre', align: 'left', value: 'name' },
    { text: 'Nombre corto', align: 'left', value: 'smallName' },
    { text: 'Actions', value: 'action', sortable: false }
  ]
  public desserts: any = []
  public editedIndex: number = -1
  public editedItem: any = {
    name: '',
    smallName: ''
  }
  public defaultItem: any = {
    name: '',
    smallName: ''
  }
  public created (): void {
    this.initialize()
  }

  // Methods

  public initialize (): void {
    const service: CareerService = new CareerService()
    service.getAll()
      .then((res: any) => {
        this.desserts = res.data
        console.log(res.data)
      })
      .catch((err: any) => {
        console.log(err)
      })
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
          const service: CareerService = new CareerService()
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
    const service: CareerService = new CareerService()
    if (this.editedIndex > -1) {
      service.put(this.editedItem.id, this.editedItem)
        .then((res: any) => {
          Object.assign(this.desserts[this.editedIndex], res.data.updatedCareer)
        })
        .catch((err: any) => {
          console.log(err)
        })
    } else {
      service.post(this.editedItem)
        .then((res: any) => {
          this.desserts.push(res.data.newCareer)
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
