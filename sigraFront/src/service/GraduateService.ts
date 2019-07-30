import Service from '@/service/Service'
import Axios from 'axios'

export default class GraduateService extends Service {
  public getAll () {
    return Axios.get(
      `${this.url}/graduate`,
      { headers: this.headers }
    )
  }

  public post (body: any) {
    return Axios.post(
      `${this.url}/graduate`,
      body,
      { headers: this.headers }
    )
  }

  public put (id: number, body: any) {
    return Axios.put(
      `${this.url}/graduate/${id}`,
      body,
      { headers: this.headers }
    )
  }

  public remove (id: number) {
    return Axios.delete(
      `${this.url}/graduate/${id}`,
      { headers: this.headers }
    )
  }
}
