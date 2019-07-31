import Vue from 'vue'
import Component from 'vue-class-component'
import CompanyService from '@/service/CompanyService'
import swal from 'sweetalert'

@Component({ name: 'CompanyView' })
export default class CompanyView extends Vue {
  public dialog: boolean = false;
  public search: string = '';
  public headers: any[] = [
    { text: 'Nombre', align: 'left', value: 'name' },
    { text: 'Dirección', align: 'left', value: 'address' },
    { text: 'Teléfono', align: 'left', value: 'telephone' },
    { text: 'Correo Electronico', align: 'left', value: 'email' },
    { text: 'Contacto', align: 'left', value: 'contact' },
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
    const service: CompanyService = new CompanyService()
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
          const service: CompanyService = new CompanyService()
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
    const service: CompanyService = new CompanyService()
    if (this.editedIndex > -1) {
      service.put(this.editedItem.id, this.editedItem)
        .then((res: any) => {
          Object.assign(this.desserts[this.editedIndex], res.data.updatedCompany)
        })
        .catch((err: any) => {
          console.log(err)
        })
    } else {
      service.post(this.editedItem)
        .then((res: any) => {
          this.desserts.push(res.data.newCompany)
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
