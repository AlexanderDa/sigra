import Service from '@/service/Service'
import Axios from 'axios'

export default class GraduateCarrerService extends Service {
  public getAll () {
    return Axios.get(
      `${this.url}/gradute/career`,
      { headers: this.headers }
    )
  }

  public post (body: any) {
    return Axios.post(
      `${this.url}/gradute/career`,
      body,
      { headers: this.headers }
    )
  }

  public put (id: number, body: any) {
    return Axios.put(
      `${this.url}/gradute/career/${id}`,
      body,
      { headers: this.headers }
    )
  }

  public remove (id: number) {
    return Axios.delete(
      `${this.url}/gradute/career/${id}`,
      { headers: this.headers }
    )
  }
}
