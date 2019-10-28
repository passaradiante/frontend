import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class BaseService {

  constructor(
    protected http: HttpClient,
    protected endpoint: string
  ) { }

  urlAPI: string = `${environment.Endpoint}${this.endpoint}/`;

  getID(id: number) {
    return this.http.get(this.urlAPI + id);
  }

  getAll(){
    return this.http.get(this.urlAPI);
  }

  add(body: object = {}) {
    console.log(this.urlAPI+`cadastro`)
    return this.http.post(this.urlAPI + `cadastro`, body);
  }

  login(body: object = {}) {
    console.log(this.urlAPI+`login`)
    return this.http.post(this.urlAPI + `login`, body);
  }

  update(body: object = {}) {
    return this.http.put(this.urlAPI, body);
  }

  remove(id: number) {
    return this.http.delete(this.urlAPI + id)
  }

}
