import Service from '@/service/Service'
import Axios from 'axios'

export default class AreaService extends Service {

  public getAll() {
    return Axios.get(
      `${this.url}/area`,
      { headers: this.headers }
    )
  }

  public post(body: any) {
    return Axios.post(
      `${this.url}/area`,
      body,
      { headers: this.headers }
    )
  }

  public put(id: number, body: any) {
    return Axios.put(
      `${this.url}/area/${id}`,
      body,
      { headers: this.headers }
    )
  }

  public remove(id: number) {
    return Axios.delete(
      `${this.url}/area/${id}`,
      { headers: this.headers }
    )
  }
}
