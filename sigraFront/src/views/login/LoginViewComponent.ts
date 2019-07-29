import Vue from 'vue'
import Component from 'vue-class-component'
// import UserService from '@/model/service/UserService'

@Component({ name: 'LoginPage' })
export default class LoginView extends Vue {
  public username: string = '';
  public password: string = '';

  public login (): void {

  }
}
