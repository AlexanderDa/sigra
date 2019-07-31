import Vue from 'vue'
import Component from 'vue-class-component'
import UserService from '@/service/UserService'
// import UserService from '@/model/service/UserService'

@Component({ name: 'LoginPage' })
export default class LoginView extends Vue {
  public username: string = '';
  public password: string = '';
  public error: boolean = false;
  public loading: boolean = false

  public async login () {
    const auth: UserService = new UserService()
    this.loading = true
    this.error = false
    await auth.login(this.username, this.password, true)
      .then(async (res: any) => {
        await localStorage.setItem('isLogged', 'true')
        await localStorage.setItem('userId', JSON.stringify(res.data.id))
        this.$router.push({ name: 'MainPage' })
      })
      .catch(() => { this.error = true })
      .finally(() => { this.loading = false })
  }
}
