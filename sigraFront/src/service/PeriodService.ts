import Service from '@/service/Service'
import Axios from 'axios'

export default class PeriodService extends Service {
  public getAll () {
    return Axios.get(
      `${this.url}/period`,
      { headers: this.headers }
    )
  }

  public post (body: any) {
    return Axios.post(
      `${this.url}/period`,
      body,
      { headers: this.headers }
    )
  }

  public put (id: number, body: any) {
    return Axios.put(
      `${this.url}/period/${id}`,
      body,
      { headers: this.headers }
    )
  }

  public remove (id: number) {
    return Axios.delete(
      `${this.url}/period/${id}`,
      { headers: this.headers }
    )
  }
}
