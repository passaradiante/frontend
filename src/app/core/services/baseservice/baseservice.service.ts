import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class BaseService {

  constructor(
    protected http: HttpClient,
    protected endpoint: string
  ) { }

  urlAPI: string = `${environment.Endpoint}${this.endpoint}`;

  login(body = {}) {
    return this.http.post(this.urlAPI + `/login`, body);
  }


  getID(id: number) {
    return this.http.get(this.urlAPI + id);
  }

  getAll(query = ''){
    return this.http.get(this.urlAPI+query);
  }

  add(body = {}) {
    return this.http.post(this.urlAPI + `/cadastro`, body);
  }

  update(body = {}) {
    return this.http.put(this.urlAPI, body);
  }

  remove(id: number) {
    return this.http.delete(this.urlAPI + id)
  }

}
