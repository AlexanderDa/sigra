import Service from '@/service/Service'
import Axios from 'axios'

export default class CompanyService extends Service {
  public getAll () {
    return Axios.get(
      `${this.url}/company`,
      { headers: this.headers }
    )
  }

  public post (body: any) {
    return Axios.post(
      `${this.url}/company`,
      body,
      { headers: this.headers }
    )
  }

  public put (id: number, body: any) {
    return Axios.put(
      `${this.url}/company/${id}`,
      body,
      { headers: this.headers }
    )
  }

  public remove (id: number) {
    return Axios.delete(
      `${this.url}/company/${id}`,
      { headers: this.headers }
    )
  }
}
