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
    { icon: 'home', title: 'Principal', routerName: 'MainPage' },
    { icon: 'school', title: 'Universidad', routerName: 'UniversityPage' },
    { icon: 'person', title: 'Graduados', routerName: 'GraduatePage' },
    { icon: 'how_to_reg', title: 'Egresados', routerName: 'GraduateCarrerPage' },
    { icon: 'account_balance', title: 'Empresa', routerName: 'EnterprisePage' }

  ];

  public optionItems: Item[] = [
    { icon: 'info', title: 'Información', routerName: 'InfoPage' },
    { icon: 'logout', title: 'Salir', routerName: 'LoginPage' }
  ];

  public created (): void { }

  public changeView (routerName: string): void {
    if (routerName === 'LoginPage') {
      localStorage.setItem('isLogged', 'false')
      localStorage.removeItem('userId')
    }
    this.$router.push({ name: routerName })
  }
}
