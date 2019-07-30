import Vue from 'vue'
import Component from 'vue-class-component'
import GraduateService from '@/service/GraduateService'
import swal from 'sweetalert'

@Component({ name: 'GraduateView' })
export default class GraduateView extends Vue {
  public dialog: boolean = false;
  public search: string = '';
  public headers: any[] = [
    { text: 'Apellidos', align: 'left', value: 'lastName' },
    { text: 'Nombres', align: 'left', value: 'firstName' },
    { text: 'Dirección', align: 'left', value: 'address' },
    { text: 'Fijo', align: 'left', value: 'telephone' },
    { text: 'Celular', align: 'left', value: 'mobile' },
    { text: 'Actions', value: 'action', sortable: false }
  ]
  public desserts: any = []
  public editedIndex: number = -1
  public editedItem: any = {}
  public defaultItem: any = {}
  public created (): void {
    this.initialize()
  }

  // Methods

  public initialize (): void {
    this.$store.commit('loaderStart')
    const service: GraduateService = new GraduateService()
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
          const service: GraduateService = new GraduateService()
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
    const service: GraduateService = new GraduateService()
    if (this.editedIndex > -1) {
      service.put(this.editedItem.id, this.editedItem)
        .then((res: any) => {
          Object.assign(this.desserts[this.editedIndex], res.data.updatedGraduate)
        })
        .catch((err: any) => {
          console.log(err)
        })
    } else {
      service.post(this.editedItem)
        .then((res: any) => {
          this.desserts.push(res.data.newGraduate)
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
