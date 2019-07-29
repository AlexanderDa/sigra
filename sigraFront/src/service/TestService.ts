import Service from '@/service/Service'
import Axios from 'axios'

export default class TestService extends Service {

  public getAll() {
    return Axios.get(
      `${this.url}/test`,
      { headers: this.headers }
    )
  }

  public post(body: any) {
    return Axios.post(
      `${this.url}/test`,
      body,
      { headers: this.headers }
    )
  }

  public put(id: number, body: any) {
    return Axios.put(
      `${this.url}/test/${id}`,
      body,
      { headers: this.headers }
    )
  }

  public remove(id: number) {
    return Axios.delete(
      `${this.url}/test/${id}`,
      { headers: this.headers }
    )
  }
}
