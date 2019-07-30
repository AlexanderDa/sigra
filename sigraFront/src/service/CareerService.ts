import Service from '@/service/Service'
import Axios from 'axios'

export default class CareerService extends Service {
  public getAll () {
    return Axios.get(
      `${this.url}/career`,
      { headers: this.headers }
    )
  }

  public post (body: any) {
    return Axios.post(
      `${this.url}/career`,
      body,
      { headers: this.headers }
    )
  }

  public put (id: number, body: any) {
    return Axios.put(
      `${this.url}/career/${id}`,
      body,
      { headers: this.headers }
    )
  }

  public remove (id: number) {
    return Axios.delete(
      `${this.url}/career/${id}`,
      { headers: this.headers }
    )
  }
}
