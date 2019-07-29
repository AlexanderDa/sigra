export default class Service {
  public url: string;
  public headers: any;
  constructor() {
    this.url = process.env.NODE_ENV === 'development'
      ? `http://localhost:1337/api/v1`
      : `/api/v1`

    this.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      userId: localStorage.getItem('userId')
    }
  }
}
