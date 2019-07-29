import Vue from 'vue'
import Component from 'vue-class-component'

interface Route {
  icon?: string;
  title: string;
  routerName?: string;
}

interface Item {
  icon: string;
  title: string;
  routerName?: string;
  children?: Route[]
}

@Component({ name: 'MaiNView' })
export default class MainView extends Vue {
  public drawer: boolean = true;
  public sideBarItems: Item[] = [
    { icon: 'home', title: 'Principal', routerName: 'MainPage' }
  ];

  public optionItems: Item[] = [
    { icon: 'info', title: 'Información', routerName: 'InfoPage' },
    { icon: 'logout', title: 'Salir', routerName: 'LoginPage' }
  ];

  public created (): void { }

  public changeView (routerName: string): void {
    this.$router.push({ name: routerName })
  }
}
