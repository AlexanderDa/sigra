import Service from '@/service/Service'
import Axios from 'axios'

export default class JobAppService extends Service {
  public getAll () {
    return Axios.get(
      `${this.url}/job/application`,
      { headers: this.headers }
    )
  }

  public post (body: any) {
    return Axios.post(
      `${this.url}/job/application`,
      body,
      { headers: this.headers }
    )
  }

  public put (id: number, body: any) {
    return Axios.put(
      `${this.url}/job/application/${id}`,
      body,
      { headers: this.headers }
    )
  }

  public remove (id: number) {
    return Axios.delete(
      `${this.url}/job/application/${id}`,
      { headers: this.headers }
    )
  }
}
