import { paths } from './../../core/constants/paths';
import { Injectable } from '@angular/core';
import { BaseService } from 'app/core/base-service.abstract';
import { Observable } from 'rxjs';
import { Victim } from '../schemas/victim';

@Injectable({
  providedIn: 'root'
})
export class VictimService extends BaseService {

  getAll(): Observable<Array<Victim>> {
    return this.http.get<Victim[]>(paths.urlBase+"vitimas");
  }
}
