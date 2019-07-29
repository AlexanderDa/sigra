import Vue from 'vue'
import Component from 'vue-class-component'
import UserService from '@/service/UserService'
// import UserService from '@/model/service/UserService'

@Component({ name: 'LoginPage' })
export default class LoginView extends Vue {
  public username: string = '';
  public password: string = '';

  public login(): void {
    const auth: UserService = new UserService()
    auth.login(this.username, this.password, true)
      .then(async (res: any) => {
        await localStorage.setItem('islogged', 'true')
        await localStorage.setItem('userId', JSON.stringify(res.data.id))
        this.$router.push({ name: 'MainPage' })
      })
      .catch((err: any) => console.log(err))
  }
}
