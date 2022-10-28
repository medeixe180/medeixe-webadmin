import { Injectable } from '@angular/core';
import { BaseService } from 'app/core/base-service.abstract';
import { Observable } from 'rxjs';
import { paths } from '../../core/constants/paths';
import { Ocurrence } from '../schemas/ocurrence';

@Injectable({
  providedIn: 'root'
})
export class OcurrenceService extends BaseService {

  getAll(): Observable<Array<Ocurrence>> {
    return this.http.get<Ocurrence[]>(paths.urlBase + 'ocorrencias');
  }
}
