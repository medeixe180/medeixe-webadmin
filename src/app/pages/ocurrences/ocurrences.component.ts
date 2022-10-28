import { Component, OnInit } from '@angular/core';
import { Ocurrence } from 'app/data/schemas/ocurrence';
import { Observable } from 'rxjs';
import { OcurrenceService } from './../../data/services/ocurrence.service';

@Component({
  selector: 'app-ocurrences',
  templateUrl: './ocurrences.component.html',
  moduleId: module.id
})
export class OcurrencesComponent implements OnInit {

  ocurrences$: Observable<Ocurrence[]>;

  constructor(private ocurrenceService: OcurrenceService) {

  }

  ngOnInit(): void {
    this.ocurrences$ = this.ocurrenceService.getAll();
    console.log(this.ocurrences$);
  }
}
