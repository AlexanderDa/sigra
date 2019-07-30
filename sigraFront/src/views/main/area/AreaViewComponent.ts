import Vue from 'vue'
import Component from 'vue-class-component'
import AreaService from '@/service/AreaService';
import swal from 'sweetalert'

@Component({ name: 'AreaView' })
export default class AreaView extends Vue {
  public dialog: boolean = false;
  public search: string = '';
  public headers: any[] = [
    { text: 'Nombre', align: 'left', value: 'name' },
    { text: 'Actions', value: 'action', sortable: false }
  ]
  public desserts: any = []
  public editedIndex: number = -1
  public editedItem: any = {
    name: '',
  }
  public defaultItem: any = {
    name: '',
  }
  public created(): void {
    this.initialize();
  }

  // Methods

  public initialize(): void {
    const service: AreaService = new AreaService();
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
          const service: AreaService = new AreaService();
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
    const service: AreaService = new AreaService()
    if (this.editedIndex > -1) {
      service.put(this.editedItem.id, this.editedItem)
        .then((res: any) => {
          Object.assign(this.desserts[this.editedIndex], res.data.updatedArea)
        })
        .catch((err: any) => {
          console.log(err)
        })
    } else {
      service.post(this.editedItem)
        .then((res: any) => {
          this.desserts.push(res.data.newArea)
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
