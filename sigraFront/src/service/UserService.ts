import Service from '@/service/Service'
import Axios from 'axios'

export default class UserService extends Service {
  public login (emailAddress: string, password: string, rememberMe?: boolean) {
    return Axios.put(
      `${this.url}/entrance/login`,
      { emailAddress, password, rememberMe },
      { headers: this.headers }
    )
  }
}
