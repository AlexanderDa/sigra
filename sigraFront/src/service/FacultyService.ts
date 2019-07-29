import Service from '@/service/Service'
import Axios from 'axios'

export default class FacultyService extends Service {

  public getAll() {
    return Axios.get(
      `${this.url}/faculty`,
      { headers: this.headers }
    )
  }

  public post(body: any) {
    return Axios.post(
      `${this.url}/faculty`,
      body,
      { headers: this.headers }
    )
  }

  public put(id: number, body: any) {
    return Axios.put(
      `${this.url}/faculty/${id}`,
      body,
      { headers: this.headers }
    )
  }

  public remove(id: number) {
    return Axios.delete(
      `${this.url}/faculty/${id}`,
      { headers: this.headers }
    )
  }
}
