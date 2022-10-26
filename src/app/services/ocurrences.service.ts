import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { API_PATH } from 'environments/environment'
import { IOcurrence } from './interfaces/IOcurrence'

@Injectable({
  providedIn: 'root'
})
export class OcurrencesService {

  constructor(private httpClient: HttpClient) { }

  getOcurrence() {

    return this.httpClient.get<IOcurrence[]>(`${API_PATH}vitimas`).toPromise()
  }
}
